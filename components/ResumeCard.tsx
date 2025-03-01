"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description && href) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#education"}
      className="block cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex">
        {/* Avatar Section */}
        <div className="flex-none">
          <Avatar className="border size-15 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>

        {/* Content Section */}
        <div className="flex-grow ml-4 flex flex-col justify-center">
          {/* Title, Badges, and Period */}
          <div className="flex items-center justify-between gap-x-2 text-base">
            <div className="flex items-center gap-x-2">
              <h3 className="font-semibold leading-none text-xs sm:text-sm">
                {title}
              </h3>
              {/* Chevron Icon */}
              <ChevronRightIcon
                className={cn(
                  "size-4 translate-x-0 transform transition-all duration-300 ease-out self-center",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
              {badges && (
                <span className="inline-flex gap-x-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
            </div>

            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground">
              {period}
            </div>
          </div>

          {/* Subtitle */}
          {subtitle && (
            <div className="font-sans text-xs text-muted-foreground mt-1">
              {subtitle}
            </div>
          )}

          {/* Description */}
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 text-xs sm:text-sm"
            >
              {description}
            </motion.div>
          )}
        </div>
      </div>
    </Link>
  );
};
