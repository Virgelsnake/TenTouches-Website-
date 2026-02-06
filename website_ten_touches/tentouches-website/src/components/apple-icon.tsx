"use client";

import type { LucideIcon } from "lucide-react";

interface AppleIconProps {
  icon: LucideIcon;
  label: string;
  /** Whether this icon appears in its "active/selected" state */
  active?: boolean;
  /** Brand colour for the active state */
  color?: string;
  size?: number;
  className?: string;
}

/**
 * An iOS-style tab/category icon with label, mimicking the in-app UI.
 * Active state shows filled background + bolder colour, matching native iOS behaviour.
 */
export function AppleIcon({
  icon: Icon,
  label,
  active = false,
  color = "#00D4FF",
  size = 20,
  className = "",
}: AppleIconProps) {
  return (
    <div className={`flex flex-col items-center gap-1.5 ${className}`}>
      <div
        className={`
          flex items-center justify-center rounded-xl transition-all duration-300
          ${active
            ? "w-11 h-11 shadow-lg"
            : "w-10 h-10"
          }
        `}
        style={
          active
            ? {
                background: `${color}20`,
                boxShadow: `0 0 16px ${color}30`,
                border: `1px solid ${color}40`,
              }
            : {
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.06)",
              }
        }
      >
        <Icon
          size={size}
          className="transition-colors duration-300"
          style={{ color: active ? color : "rgba(255,255,255,0.35)" }}
          strokeWidth={active ? 2.2 : 1.5}
        />
      </div>
      <span
        className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
          active ? "opacity-100" : "opacity-40"
        }`}
        style={{ color: active ? color : "white" }}
      >
        {label}
      </span>
    </div>
  );
}
