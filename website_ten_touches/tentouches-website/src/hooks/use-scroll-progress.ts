"use client";

import { useEffect, useRef, useCallback } from "react";
import { useSyncExternalStore } from "react";

/**
 * Tracks how far an element has scrolled through the viewport.
 * Returns a progress value from 0 → 1 as the element enters and crosses the viewport.
 * Respects prefers-reduced-motion by snapping to 1 immediately.
 */
export function useScrollProgress(startOffset = 0.85, endOffset = 0.25) {
  const ref = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const listenersRef = useRef(new Set<() => void>());

  const subscribe = useCallback((listener: () => void) => {
    listenersRef.current.add(listener);
    return () => { listenersRef.current.delete(listener); };
  }, []);

  const getSnapshot = useCallback(() => progressRef.current, []);

  const progress = useSyncExternalStore(subscribe, getSnapshot, () => 1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      progressRef.current = 1;
      listenersRef.current.forEach((l) => l());
      return;
    }

    let rafId = 0;

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const topFraction = rect.top / windowHeight;
        const raw = (startOffset - topFraction) / (startOffset - endOffset);
        const clamped = Math.min(1, Math.max(0, raw));

        if (clamped !== progressRef.current) {
          progressRef.current = clamped;
          listenersRef.current.forEach((l) => l());
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [startOffset, endOffset]);

  return { ref, progress };
}
