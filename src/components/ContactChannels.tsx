import { waLink, instagramLink, siteConfig } from "@/lib/config";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "./icons";

const channels = [
  {
    label: "WhatsApp Us",
    sub: siteConfig.whatsappDisplay,
    href: waLink("Hi Nova Agency, I'd like to talk about a project."),
    icon: WhatsAppIcon,
    accent: "bg-[#25D366]",
  },
  {
    label: "Instagram DM",
    sub: `@${siteConfig.instagramHandle}`,
    href: instagramLink,
    icon: InstagramIcon,
    accent: "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af]",
  },
  {
    label: "Email Us",
    sub: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: MailIcon,
    accent: "bg-navy",
  },
];

export default function ContactChannels() {
  return (
    <div className="reveal grid grid-cols-1 gap-4 sm:grid-cols-3">
      {channels.map((channel) => (
        <a
          key={channel.label}
          href={channel.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl border border-navy-2/8 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue/25 hover:shadow-[0_20px_40px_-18px_rgba(20,115,255,0.25)]"
        >
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white ${channel.accent}`}
          >
            <channel.icon className="h-6 w-6" />
          </span>
          <span className="flex flex-col">
            <span className="font-display text-[15px] font-bold text-navy-2">
              {channel.label}
            </span>
            <span className="text-sm text-muted">{channel.sub}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
