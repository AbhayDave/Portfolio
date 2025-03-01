import { AnimatedSubscribeButton } from "./magicui/animated-subscribe-button";
import { ClipboardCheck, Copy } from "lucide-react";

export function AnimatedCopyEmailAddressButton() {
  return (
    <AnimatedSubscribeButton className="min-w-36">
      <span className="group inline-flex items-center">
        Copy my email address
        <Copy className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <span className="group inline-flex items-center">
        <ClipboardCheck className="mr-2 size-4" />
        Email is Copied!
      </span>
    </AnimatedSubscribeButton>
  );
}

