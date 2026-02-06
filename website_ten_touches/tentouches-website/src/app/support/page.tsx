import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — Ten Touches",
  description:
    "Get help with the Ten Touches iOS application. Contact our support team.",
};

export default function SupportPage() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Support
        </h1>
        <p className="text-lg text-white/50 mb-12">
          We&rsquo;re here to help. Choose the best way to reach us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-tt-cyan/20 to-blue-500/20 flex items-center justify-center mb-5">
              <Mail size={22} className="text-tt-cyan" />
            </div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Email Support
            </h2>
            <p className="text-sm text-white/55 leading-relaxed mb-4">
              For general enquiries, feature requests, or technical issues.
              We aim to respond within 24 hours.
            </p>
            <a
              href="mailto:support@tentouches.app"
              className="text-tt-cyan hover:underline text-sm font-medium"
            >
              support@tentouches.app
            </a>
          </div>

          <div className="glass-card p-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-tt-indigo/20 to-purple-500/20 flex items-center justify-center mb-5">
              <MessageCircle size={22} className="text-tt-indigo" />
            </div>
            <h2 className="text-lg font-semibold text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-white/55 leading-relaxed mb-4">
              Quick answers to common questions about getting started, features,
              and troubleshooting.
            </p>
          </div>
        </div>

        <div className="mt-16 glass-card p-8">
          <h2 className="text-xl font-semibold text-white mb-6">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-base font-medium text-white mb-2">
                What devices does Ten Touches support?
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                Ten Touches is available for iPhone running iOS 17.0 or later.
              </p>
            </div>
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-base font-medium text-white mb-2">
                Where is my data stored?
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                All your data is stored locally on your device. You have full
                control over your information. See our{" "}
                <Link href="/privacy" className="text-tt-cyan hover:underline">
                  privacy policy
                </Link>{" "}
                for more details.
              </p>
            </div>
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-base font-medium text-white mb-2">
                How does voice input work?
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                Tap the record button and speak naturally. Ten Touches uses
                Apple&rsquo;s on-device speech recognition to parse your words
                into structured fields &mdash; names, companies, personal
                details, and follow-up actions.
              </p>
            </div>
            <div className="border-t border-white/5 pt-6">
              <h3 className="text-base font-medium text-white mb-2">
                What is a &ldquo;touch&rdquo;?
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">
                A touch is any meaningful interaction with a client &mdash; a
                phone call, email, meeting, SMS, LinkedIn message, or even a
                casual coffee. Ten Touches helps you track and optimise these
                interactions.
              </p>
            </div>
          </div>
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
