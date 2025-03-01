import { DATA } from "@/data/resume";
import { BlurFade } from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants";

function Hero() {
  return (
    <section className="mx-auto w-full max-w-4xl">
      <div className="space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-8xl font-bold leading-none tracking-tighter text-transparent">
            {`Hi, I'm ${DATA.name.split(" ")[0]}`}
          </span>
          <span className="pointer-events-none text-center text-7xl">👋</span>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <span className="text-pretty text-3xl tracking-tighter">
            {DATA.description}
          </span>
        </BlurFade>
      </div>
    </section>
  );
}

export default Hero;
