import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — ACT Prep",
  description: "How ACT Prep collects, uses, and protects your information.",
};

// ⚠️ REVIEW REQUIRED: Working draft covering Stripe's published-Privacy
// requirement AND the fact that users are minors (high-schoolers). The minor /
// COPPA / FERPA-adjacent sections in particular should be reviewed by a lawyer
// for your jurisdiction and business model. Fill every [BRACKET].
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="July 8, 2026">
      <p>
        This Privacy Policy explains how <strong>[COMPANY LEGAL NAME]</strong> (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects information when you use
        the ACT Prep website and application (the &ldquo;Service&rdquo;). Because our users include
        high-school students who may be minors, please read the section on minors carefully.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Account information</strong> you provide at signup: name, email address, password
          (stored only as a secure hash), and whether the account is a student or parent.
        </li>
        <li>
          <strong>Usage and progress data</strong> generated as you use the Service: practice
          answers, test attempts and scores, sub-skill mastery, lessons viewed, study plans, and
          timestamps.
        </li>
        <li>
          <strong>Parent–student links</strong> when an invite code connects a parent and student
          account.
        </li>
        <li>
          <strong>Payment information</strong> is collected and processed by our payment processor,
          Stripe. We do not store your full card number; we retain a Stripe customer identifier and
          your subscription status.
        </li>
        <li>
          <strong>Technical data</strong> such as basic log and device information handled by our
          hosting provider (Vercel) and database provider (Neon).
        </li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>to provide the Service — deliver practice, track progress, and generate score estimates;</li>
        <li>to manage subscriptions and process payments through Stripe;</li>
        <li>to let a linked parent view their student&rsquo;s progress;</li>
        <li>to secure the Service, prevent abuse, and comply with law;</li>
        <li>to communicate with you about your account or the Service.</li>
      </ul>

      <h2>3. Children and minors</h2>
      <p>
        The Service is designed for high-school ACT preparation and is intended to be used by
        students <strong>with the involvement of a parent or guardian</strong>. We do not knowingly
        collect personal information from children under 13 without verifiable parental consent. If
        you believe a child under 13 has provided us personal information without such consent,
        contact us at <strong>[SUPPORT EMAIL]</strong> and we will delete it.
      </p>
      <p>
        <strong>[REVIEW WITH COUNSEL]</strong> Depending on your users and jurisdiction, COPPA (U.S.,
        under 13) and state student-privacy laws may impose specific obligations (parental consent,
        limits on use, deletion rights). Confirm your consent flow and disclosures here.
      </p>

      <h2>4. How we share information</h2>
      <p>We do not sell your personal information. We share it only with:</p>
      <ul>
        <li>
          <strong>Service providers</strong> that operate the Service — Stripe (payments), Vercel
          (hosting), and Neon (database) — who process data on our behalf;
        </li>
        <li>
          <strong>A linked parent/guardian</strong>, who can see the connected student&rsquo;s
          practice progress and scores;
        </li>
        <li>
          <strong>Authorities</strong>, where required by law or to protect rights and safety.
        </li>
      </ul>

      <h2>5. Data retention and security</h2>
      <p>
        We keep your information while your account is active and as needed to provide the Service
        and meet legal obligations. Passwords are stored only as salted hashes; data is transmitted
        over encrypted connections. No system is perfectly secure, but we take reasonable measures to
        protect your information.
      </p>

      <h2>6. Your choices and rights</h2>
      <p>
        You may access or update your account information, cancel your subscription at any time, and
        request deletion of your account by contacting <strong>[SUPPORT EMAIL]</strong>. Depending on
        your location, you may have additional rights (access, correction, deletion, portability).{" "}
        <strong>[Confirm applicable rights — e.g., California/CCPA, GDPR — with counsel.]</strong>
      </p>

      <h2>7. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will update the &ldquo;Last
        updated&rdquo; date and, for material changes, provide additional notice where appropriate.
      </p>

      <h2>8. Contact</h2>
      <p>
        Questions about your privacy or this policy? Contact us at <strong>[SUPPORT EMAIL]</strong>.
        See also our{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    </LegalPage>
  );
}
