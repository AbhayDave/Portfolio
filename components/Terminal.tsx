import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "./magicui/terminal";

export function TerminalDemo() {
  return (
    <Terminal className="max-w-6xl min-h-[35rem]">
      <TypingAnimation>&gt; booting kernel... </TypingAnimation>

      <AnimatedSpan delay={1500} className="text-green-500">
        <span> loading system modules....</span>
      </AnimatedSpan>
      <AnimatedSpan delay={2000} className="text-green-500">
        <span> initializing network interfaces....</span>
      </AnimatedSpan>
      <TypingAnimation delay={2500} className="text-green-500">
        [██████████████████████████████████] 100%
      </TypingAnimation>
      <AnimatedSpan delay={5000} className="text-green-500">
        <span>system ready.</span>
      </AnimatedSpan>
      <AnimatedSpan delay={5000} className="text-green-500">
        <span> </span>
      </AnimatedSpan>
      <TypingAnimation delay={6000}>
        Welcome.....
      </TypingAnimation>
    </Terminal>
  );
}
