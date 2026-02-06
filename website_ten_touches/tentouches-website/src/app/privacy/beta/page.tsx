import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — Ten Touches TestFlight Beta",
  description:
    "Privacy policy for the Ten Touches TestFlight Beta. Learn how we handle bug reports and your data during testing.",
};

export default function PrivacyBetaPage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-tt-navy/80 backdrop-blur-xl border-b border-white/5">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Ten Touches — home">
            <Image
              src="/app-icon.png"
              alt="Ten Touches app icon"
              width={40}
              height={40}
              className="rounded-[10px]"
            />
            <span className="text-lg font-bold text-white">Ten Touches</span>
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Privacy Policy for Ten Touches TestFlight Beta
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> January 2026
          </p>

          {/* 1. Standard Privacy */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            1. Standard Privacy (Unchanged)
          </h2>
          <p>
            All provisions of our{" "}
            <Link href="/privacy" className="text-tt-cyan hover:underline">
              standard Privacy Policy
            </Link>{" "}
            apply to this beta version. Your client data:
          </p>
          <ul className="list-none space-y-1.5 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-tt-success">✓</span> Remains on your device
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-success">✓</span> Is never transmitted to our servers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-success">✓</span> Is never shared with third parties
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Is NOT included in bug reports
            </li>
          </ul>

          {/* 2. Bug Reporting */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            2. Bug Reporting Feature (TestFlight Only)
          </h2>
          <p>
            The TestFlight beta includes an optional bug reporting feature. When
            you choose to submit a bug report, we collect the following:
          </p>

          <h3 className="text-base font-semibold text-white mt-6 mb-3">
            What We Do NOT Collect
          </h3>
          <ul className="list-none space-y-1.5 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Your client data (names, emails, phone numbers)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Your opportunities or touchpoints
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Audio recordings (voice is transcribed locally)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Screenshots (use TestFlight&rsquo;s built-in feature)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Location data
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Device identifiers for tracking
            </li>
          </ul>

          <h3 className="text-base font-semibold text-white mt-6 mb-3">
            How Voice Input Works
          </h3>
          <p>When you use voice input to describe a bug:</p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>Your speech is processed on your device using Apple&rsquo;s Speech framework</li>
            <li>Only the text transcript is included in the report</li>
            <li>
              The audio recording is never transmitted &mdash; it stays on your
              device temporarily and is discarded
            </li>
          </ol>

          <h3 className="text-base font-semibold text-white mt-6 mb-3">
            Privacy Protections for Logs
          </h3>
          <p>
            App logs included in bug reports are automatically filtered to remove:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Email addresses</li>
            <li>Phone numbers</li>
            <li>Passwords, tokens, or API keys</li>
            <li>Any other potentially sensitive information</li>
          </ul>

          {/* 3. How We Use Bug Report Data */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            3. How We Use Bug Report Data
          </h2>
          <p>Bug reports are used exclusively to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Identify and fix bugs before public release</li>
            <li>Improve app stability and performance</li>
            <li>Understand how issues occur in real-world usage</li>
          </ul>
          <p>Bug reports are:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Reviewed only by the development team</li>
            <li>Not shared with third parties</li>
            <li>Not used for advertising or marketing</li>
            <li>Not linked to your identity beyond the report itself</li>
          </ul>

          {/* 4. Data Retention */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            4. Data Retention
          </h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Bug reports are retained for the duration of the TestFlight testing period</li>
            <li>Reports are deleted within 30 days of the public App Store release</li>
            <li>You can request deletion of your reports at any time by contacting us</li>
          </ul>

          {/* 5. Your Consent */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            5. Your Consent
          </h2>
          <p>
            Bug reporting is entirely optional. Before submitting any bug report:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5">
            <li>You will see a clear summary of what data will be collected</li>
            <li>You must explicitly tap &ldquo;I Understand &amp; Continue&rdquo; to proceed</li>
            <li>You can cancel at any time before submission</li>
          </ol>
          <p>
            If you prefer not to use our bug reporting feature, you can still
            provide feedback through:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>TestFlight&rsquo;s built-in screenshot feedback (shake to report)</li>
            <li>
              Email directly to{" "}
              <a
                href="mailto:feedback@tentouches.app"
                className="text-tt-cyan hover:underline"
              >
                feedback@tentouches.app
              </a>
            </li>
          </ul>

          {/* 6. Production Release */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            6. Production Release
          </h2>
          <p>When Ten Touches is released on the App Store:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>The bug reporting feature may be disabled</li>
            <li>Our standard Privacy Policy (local-only data) will apply</li>
            <li>No diagnostic data will be collected without a similar opt-in feature</li>
          </ul>

          {/* 7. Contact Us */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            7. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or your data:
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:privacy@tentouches.app"
              className="text-tt-cyan hover:underline"
            >
              privacy@tentouches.app
            </a>
            <br />
            Website:{" "}
            <a
              href="https://tentouches.app"
              className="text-tt-cyan hover:underline"
            >
              tentouches.app
            </a>
          </p>

          {/* Summary */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            Summary
          </h2>
          <p>
            Your privacy remains our priority. The bug reporting feature helps us
            build a better app while keeping your client data completely private.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="text-sm text-white/40 hover:text-white transition-colors"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
