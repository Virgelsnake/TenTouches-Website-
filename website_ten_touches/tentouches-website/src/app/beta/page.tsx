"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, type FormEvent } from "react";
import { ProgressRing } from "@/components/progress-ring";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function BetaPage() {
  const { ref, progress } = useScrollProgress(0.95, -0.3);
  const touchCount = Math.round(progress * 10);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [signupCount, setSignupCount] = useState<number | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>("");

  // Fetch current counter on mount
  useEffect(() => {
    fetch("/.netlify/functions/get-counter")
      .then((res) => {
        if (!res.ok) throw new Error(`Counter API error: ${res.status}`);
        return res.json();
      })
      .then((data) => setSignupCount(data.count))
      .catch((err) => {
        console.error("Failed to fetch counter:", err);
        setSignupCount(1);
      });
  }, []);

  // Safety timeout to reset submitting state if it gets stuck
  useEffect(() => {
    if (!submitting) return;
    
    const timeout = setTimeout(() => {
      console.warn("Submit timeout triggered - resetting state");
      setSubmitting(false);
      setError("Request timed out. Please try again.");
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [submitting]);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (submitting) {
      console.log("Already submitting, ignoring click");
      return;
    }

    setSubmitting(true);
    setError("");
    setDebugInfo("Starting submission...");

    try {
      console.log("Submitting signup:", { name, email, mobile: mobile || null });
      setDebugInfo("Sending request to API...");

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second fetch timeout

      const res = await fetch("/.netlify/functions/submit-beta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, mobile }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      console.log("API response status:", res.status);
      setDebugInfo(`API responded: ${res.status}`);

      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(data.error || `Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log("API response data:", data);
      setDebugInfo("Success!");

      setSignupCount(data.count);
      setSubmitted(true);
      
      // Fire-and-forget Netlify Forms submission (for notifications)
      try {
        const formData = new URLSearchParams();
        formData.append("form-name", "beta-signup");
        formData.append("name", name);
        formData.append("email", email);
        formData.append("mobile", mobile);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formData.toString(),
        }).catch(() => { /* silent */ });
      } catch {
        // Ignore Netlify Forms errors
      }
    } catch (err) {
      console.error("Submission error:", err);
      
      if (err instanceof Error) {
        if (err.name === "AbortError") {
          setError("Request timed out. Please check your connection and try again.");
          setDebugInfo("Fetch was aborted due to timeout");
        } else {
          setError(err.message);
          setDebugInfo(`Error: ${err.message}`);
        }
      } else {
        setError("Something went wrong. Please try again.");
        setDebugInfo("Unknown error occurred");
      }
    } finally {
      console.log("Submission complete, resetting state");
      setSubmitting(false);
    }
  }, [name, email, mobile, submitting]);

  return (
    <>
      <Header />

      {/* Hidden Netlify form for bot detection and email notifications */}
      <form name="beta-signup" data-netlify="true" netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="tel" name="mobile" />
        <input type="text" name="bot-field" />
      </form>

      <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-tt-navy via-tt-slate/40 to-tt-navy" />

        {/* Decorative orbs */}
        <div className="gradient-orb w-[500px] h-[500px] bg-tt-cyan/15 -top-32 left-1/3" />
        <div className="gradient-orb w-[400px] h-[400px] bg-tt-indigo/15 -bottom-32 right-1/4" />

        {/* Large decorative ring — same format as homepage */}
        <div
          className="absolute left-0 top-1/2 -translate-x-[20%] -translate-y-1/2 pointer-events-none z-0 opacity-50"
          aria-hidden="true"
        >
          <ProgressRing
            progress={progress}
            size={1344}
            strokeWidth={80}
            colors={["#30CFFF", "#7B5EE0", "#B44AFF"]}
            trackOpacity={0.04}
          >
            <span className="text-[clamp(18rem,30vw,30rem)] font-bold tabular-nums text-white/30">
              {touchCount}
            </span>
          </ProgressRing>
        </div>

        {/* Form card */}
        <div className="relative z-10 w-full max-w-md">
          {/* App icon + branding */}
          <div className="flex flex-col items-center mb-10">
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-3 bg-gradient-to-r from-tt-cyan/20 to-tt-indigo/20 rounded-[22px] blur-lg" />
              <Image
                src="/app-icon.png"
                alt="Ten Touches app icon"
                width={80}
                height={80}
                className="relative rounded-[18px] shadow-xl"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center leading-tight mb-3">
              Join the <span className="gradient-text">Beta Test</span>
            </h1>
            <p className="text-base text-white/50 text-center max-w-sm leading-relaxed">
              Be among the first to experience Ten Touches. Sign up below and
              we&apos;ll send you early access as soon as it&apos;s ready.
            </p>
          </div>

          {/* Live counter */}
          {signupCount !== null && signupCount > 1 && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tt-cyan opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tt-cyan" />
                </span>
                <span className="text-sm font-medium text-white/70">
                  <span className="text-white font-bold tabular-nums">{signupCount.toLocaleString("en-GB")}</span> people interested
                </span>
              </div>
            </div>
          )}

          {submitted ? (
            <div className="glass-card p-8 rounded-2xl text-center">
              <div className="w-14 h-14 rounded-full bg-tt-success/15 flex items-center justify-center mx-auto mb-5">
                <svg
                  className="w-7 h-7 text-tt-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">You&apos;re on the list!</h2>
              <p className="text-sm text-white/50 leading-relaxed">
                Thanks, {name}. We&apos;ll be in touch at <span className="text-white/70">{email}</span> when
                the beta is ready. Keep an eye on your inbox.
              </p>
              {signupCount !== null && signupCount > 1 && (
                <p className="text-sm text-white/40 mt-3">
                  You&apos;re one of <span className="text-tt-cyan font-semibold">{signupCount.toLocaleString("en-GB")}</span> people interested.
                </p>
              )}
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white mt-8"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-5">
              {/* Honeypot field for spam prevention */}
              <div className="hidden" aria-hidden="true">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div>
                <label htmlFor="beta-name" className="block text-sm font-medium text-white/70 mb-2">
                  Name
                </label>
                <input
                  id="beta-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  disabled={submitting}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-tt-cyan/50 focus:ring-1 focus:ring-tt-cyan/30 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="beta-email" className="block text-sm font-medium text-white/70 mb-2">
                  Email
                </label>
                <input
                  id="beta-email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  disabled={submitting}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-tt-cyan/50 focus:ring-1 focus:ring-tt-cyan/30 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="beta-mobile" className="block text-sm font-medium text-white/70 mb-2">
                  Mobile Number <span className="text-white/30">(optional)</span>
                </label>
                <input
                  id="beta-mobile"
                  name="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="+44 7700 900000"
                  disabled={submitting}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/25 outline-none focus:border-tt-cyan/50 focus:ring-1 focus:ring-tt-cyan/30 transition-colors disabled:opacity-50"
                />
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-tt-error/10 border border-tt-error/20">
                  <p className="text-sm text-tt-error text-center">{error}</p>
                </div>
              )}

              {/* Debug info - remove in production */}
              {debugInfo && (
                <p className="text-xs text-white/30 text-center font-mono">{debugInfo}</p>
              )}

              <button
                type="submit"
                disabled={submitting || !name || !email}
                className="w-full rounded-full bg-gradient-to-r from-tt-cyan to-tt-indigo px-8 py-4 text-base font-semibold text-white shadow-lg shadow-tt-cyan/25 transition-all hover:shadow-xl hover:shadow-tt-cyan/35 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none disabled:hover:scale-100"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting…
                  </span>
                ) : (
                  "Request Early Access"
                )}
              </button>

              <p className="text-xs text-white/25 text-center pt-1">
                No spam, ever. We&apos;ll only contact you about the beta.
              </p>
            </form>
          )}

          {/* Back link */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              &larr; Back to tentouches.app
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
