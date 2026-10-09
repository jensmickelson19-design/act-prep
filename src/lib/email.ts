import { Resend } from "resend";
import { reportError } from "@/lib/observability";

// Transactional email via Resend. When RESEND_API_KEY is unset the mailer runs
// in "log" mode: it prints the message (including any link) to the server
// console and reports success, so local dev and preview deploys work without a
// provider. In production an unset key is a misconfiguration and sendEmail
// returns { ok: false }.

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.EMAIL_FROM ?? "ACT Prep <onboarding@resend.dev>";
const resend = apiKey ? new Resend(apiKey) : null;

export type SendResult = { ok: boolean; id?: string; error?: string };

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  text: string;
}): Promise<SendResult> {
  if (!resend) {
    if (process.env.NODE_ENV === "production") {
      reportError(new Error("RESEND_API_KEY is not set; email not sent"), {
        to: opts.to,
        subject: opts.subject,
      });
      return { ok: false, error: "Email is not configured" };
    }
    // Dev/preview: make the link easy to grab from the terminal.
    console.info(
      `\n[email:log-mode] To: ${opts.to}\n  Subject: ${opts.subject}\n  ${opts.text}\n`
    );
    return { ok: true, id: "log-mode" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
    });
    if (error) {
      reportError(error, { scope: "email.send", to: opts.to, subject: opts.subject });
      return { ok: false, error: error.message };
    }
    return { ok: true, id: data?.id };
  } catch (err) {
    reportError(err, { scope: "email.send", to: opts.to, subject: opts.subject });
    return { ok: false, error: "Email send failed" };
  }
}

// --- Message templates -----------------------------------------------------

const wrap = (title: string, bodyHtml: string) => `<!doctype html>
<html><body style="margin:0;background:#f7f4ee;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1a1f2b">
  <div style="max-width:480px;margin:0 auto;padding:32px 24px">
    <div style="font-family:Georgia,serif;font-size:18px;font-weight:600;margin-bottom:24px">ACT Prep</div>
    <h1 style="font-family:Georgia,serif;font-size:22px;font-weight:600;margin:0 0 16px">${title}</h1>
    ${bodyHtml}
    <p style="font-size:12px;color:#5b6270;margin-top:32px">If you didn&rsquo;t request this, you can ignore this email.</p>
  </div>
</body></html>`;

const button = (href: string, label: string) =>
  `<p style="margin:24px 0"><a href="${href}" style="display:inline-block;background:#1a2540;color:#fff;text-decoration:none;padding:11px 20px;border-radius:6px;font-size:14px;font-weight:600">${label}</a></p>
   <p style="font-size:13px;color:#5b6270;word-break:break-all">Or paste this link into your browser:<br>${href}</p>`;

export function passwordResetEmail(link: string) {
  return {
    subject: "Reset your ACT Prep password",
    html: wrap(
      "Reset your password",
      `<p style="font-size:14px;line-height:1.6">Click below to choose a new password. This link expires in 1 hour and can be used once.</p>${button(
        link,
        "Reset password"
      )}`
    ),
    text: `Reset your ACT Prep password (link expires in 1 hour):\n${link}`,
  };
}

export function verificationEmail(link: string) {
  return {
    subject: "Confirm your email for ACT Prep",
    html: wrap(
      "Confirm your email",
      `<p style="font-size:14px;line-height:1.6">Confirm this address to keep full access to your ACT Prep account. This link expires in 24 hours.</p>${button(
        link,
        "Confirm email"
      )}`
    ),
    text: `Confirm your email for ACT Prep (link expires in 24 hours):\n${link}`,
  };
}
