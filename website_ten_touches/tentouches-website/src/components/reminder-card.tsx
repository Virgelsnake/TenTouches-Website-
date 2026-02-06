"use client";

import { Phone, Mail, MessageSquare, Coffee, Calendar } from "lucide-react";

const ACTION_ICONS = {
  call: { icon: Phone, color: "#34C759" },
  email: { icon: Mail, color: "#007AFF" },
  sms: { icon: MessageSquare, color: "#00D4FF" },
  coffee: { icon: Coffee, color: "#FF9500" },
  meeting: { icon: Calendar, color: "#5856D6" },
} as const;

interface ReminderCardProps {
  action: keyof typeof ACTION_ICONS;
  client: string;
  note: string;
  /** Stagger delay index for entrance animation */
  index: number;
  isVisible: boolean;
  className?: string;
}

/**
 * A clipped-out reminder card matching the in-app UI style.
 * Slides in from the right with a staggered delay when visible.
 */
export function ReminderCard({
  action,
  client,
  note,
  index,
  isVisible,
  className = "",
}: ReminderCardProps) {
  const { icon: Icon, color } = ACTION_ICONS[action];

  return (
    <div
      className={`
        flex items-center gap-3 px-4 py-3 rounded-2xl glass-card
        transition-all duration-700 ease-out
        ${isVisible
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-12"
        }
        ${className}
      `}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
    >
      <div
        className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
        style={{ background: `${color}18` }}
      >
        <Icon size={16} style={{ color }} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white truncate">{client}</p>
        <p className="text-xs text-white/45 truncate">{note}</p>
      </div>
      <div
        className="flex-shrink-0 w-2 h-2 rounded-full animate-pulse"
        style={{ background: color }}
      />
    </div>
  );
}
