import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/yajush-mishra-7b9aba27a/",
      label: "Linkedin",
      icon: IoLogoLinkedin,
    },
    {
      link: "https://github.com/Yajushh",
      label: "Github",
      icon: FaGithub,
    },
  ];
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <Link
        href="/"
        className="text-2xl font-bold underline underline-offset-8 decoration-green-800 -rotate-2"
      >
        Yajush
      </Link>
      <div className="flex items-center gap-5">
        <Link
          href="/guestbook"
          className="hover:scale-105 underline  duration-500 transition-all"
        >
          Guestbook
        </Link>
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-6 h-6 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
