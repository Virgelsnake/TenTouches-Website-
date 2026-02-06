import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy — Ten Touches",
  description:
    "Privacy policy for the Ten Touches iOS application. Learn how we handle your data.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> February 2026
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            Overview
          </h2>
          <p>
            Ten Touches (&ldquo;the App&rdquo;) is a personal CRM application
            for iOS. We are committed to protecting your privacy and being
            transparent about how we handle your data.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            Data Collection
          </h2>
          <p>
            Ten Touches stores your data locally on your device. The information
            you enter &mdash; including client details, opportunities, touches,
            and notes &mdash; remains on your iPhone and under your control.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            Voice Input
          </h2>
          <p>
            When you use the voice input feature, speech recognition is
            processed using Apple&rsquo;s on-device speech recognition
            technology. Audio data is not sent to our servers.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            Third-Party Services
          </h2>
          <p>
            The App does not share your personal data with third-party services
            for advertising or marketing purposes.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            Data Security
          </h2>
          <p>
            Your data is stored using iOS standard data protection mechanisms.
            We recommend keeping your device updated with the latest iOS version
            for optimal security.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            Your Rights
          </h2>
          <p>
            Since your data is stored locally on your device, you have full
            control over it. You can delete the App at any time, which will
            remove all associated data from your device.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            Contact
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us
            via our{" "}
            <Link href="/support" className="text-tt-cyan hover:underline">
              support page
            </Link>
            .
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
