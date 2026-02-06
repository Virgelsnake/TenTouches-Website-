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
          Privacy Policy for Ten Touches
        </h1>

        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-white/70 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> January 2026
          </p>

          {/* 1. Information You Provide */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            1. Information You Provide
          </h2>
          <p>
            When you use Ten Touches, you may enter the following types of
            information:
          </p>

          <h3 className="text-base font-semibold text-white mt-6 mb-3">
            Contact Information
          </h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-white/90">Names</strong> &mdash; Client names for identification</li>
            <li><strong className="text-white/90">Email addresses</strong> &mdash; Optional client contact details</li>
            <li><strong className="text-white/90">Phone numbers</strong> &mdash; Optional client contact details</li>
          </ul>

          <h3 className="text-base font-semibold text-white mt-6 mb-3">
            Personal Context
          </h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-white/90">Family details</strong> &mdash; Information about clients&rsquo; children</li>
            <li><strong className="text-white/90">Interests</strong> &mdash; Sports, hobbies, and personal preferences</li>
            <li><strong className="text-white/90">Pet information</strong> &mdash; Pet types, breeds, and names</li>
            <li><strong className="text-white/90">Personal notes</strong> &mdash; Free-form notes about clients</li>
          </ul>

          <h3 className="text-base font-semibold text-white mt-6 mb-3">
            Business Information
          </h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-white/90">Opportunities</strong> &mdash; Sales opportunities and their status</li>
            <li><strong className="text-white/90">Touchpoints</strong> &mdash; Records of client interactions</li>
            <li><strong className="text-white/90">Products</strong> &mdash; Your product/service catalogue</li>
          </ul>

          {/* 2. How Your Data Is Stored */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            2. How Your Data Is Stored
          </h2>
          <p>
            All data you enter into Ten Touches is stored exclusively on your
            device using Apple&rsquo;s SwiftData framework. Your data:
          </p>
          <ul className="list-none space-y-1.5 pl-0">
            <li className="flex items-start gap-2">
              <span className="text-tt-success">✓</span> Remains on your iPhone or iPad
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-success">✓</span> Is protected by your device&rsquo;s security
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-success">✓</span> Is included in your device backups
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Is never transmitted to our servers
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Is never shared with third parties
            </li>
            <li className="flex items-start gap-2">
              <span className="text-tt-error">✗</span> Is never used for analytics or advertising
            </li>
          </ul>

          {/* 3. Data We Do NOT Collect */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            3. Data We Do NOT Collect
          </h2>
          <p>We do not collect, access, or process:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Your client information</li>
            <li>Your usage patterns or analytics</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Location data</li>
            <li>Any form of tracking data</li>
          </ul>
          <p>
            We have no servers that receive your data. The App operates entirely
            offline and locally.
          </p>

          {/* 4. Third-Party Services */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            4. Third-Party Services
          </h2>
          <p>
            Ten Touches does not integrate with any third-party services that
            collect data. The App:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Does not contain advertising</li>
            <li>Does not use analytics SDKs</li>
            <li>Does not share data with social networks</li>
            <li>Does not connect to external APIs</li>
          </ul>

          {/* 5. Your Rights and Controls */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            5. Your Rights and Controls
          </h2>

          <h3 className="text-base font-semibold text-white mt-6 mb-3">
            Data Access
          </h3>
          <p>
            All your data is accessible directly within the App. You can view,
            edit, or delete any client, opportunity, or touchpoint at any time.
          </p>

          <h3 className="text-base font-semibold text-white mt-6 mb-3">
            Data Deletion
          </h3>
          <p>
            You can delete individual records within the App, or delete all data
            by uninstalling the App.
          </p>

          {/* 6. Security */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            6. Security
          </h2>
          <p>Your data is protected by:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong className="text-white/90">Device Security</strong> &mdash; Your device&rsquo;s passcode, Face ID, or Touch ID</li>
            <li><strong className="text-white/90">App Sandbox</strong> &mdash; iOS app sandboxing prevents other apps from accessing your data</li>
            <li><strong className="text-white/90">Encrypted Storage</strong> &mdash; Data is stored using Apple&rsquo;s secure frameworks</li>
          </ul>

          {/* 7. Contact Us */}
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">
            7. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
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
            Your privacy is protected by design. Ten Touches was built to keep
            your client data private and under your complete control.
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
