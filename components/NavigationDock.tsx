"use client";

import { CalendarIcon, HomeIcon, MailIcon, PencilIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

// import { ModeToggle } from "/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "./magicui/dock";
import { ModeToggle } from "./mode-toggle";
import { Icons } from "./icons";

export type IconProps = React.HTMLAttributes<SVGElement>;

const handleEmailClick = () => {
  const emailLink = document.createElement("a");
  emailLink.href =
    "mailto:your.email@example.com";
  emailLink.click();
};

const NAV_DOCK_DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AbhayDave",
        icon: Icons.githubDock,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhay-dave",
        icon: Icons.linkedinDock,
      },
      X: {
        name: "X",
        url: "https://x.com/Abhay_Dave04",
        icon: Icons.xDock,
      },
      email: {
        name: "Send Email",
        url: "mailto:abhaydave2004@gmail.com?subject=Website%20Feedback&body=I%20have%20some%20feedback%20about%20your%20website:%0D%0A%0D%0A...",
        icon: Icons.emailDock,
      },
    },
  },
};

export function NavigationDock() {
  return (
    <div className="fixed bottom-1 left-0 right-0 z-40 flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock iconSize={40} direction="middle">
          {NAV_DOCK_DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-8" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(NAV_DOCK_DATA.contact.social).map(
            ([name, social]) => (
              <DockIcon key={name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.url}
                      aria-label={social.name}
                      onClick={() => {
                        social.name === "Send Email" && handleEmailClick();
                      }}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <social.icon className="size-7" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{name}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            )
          )}
          {/* <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon> */}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
