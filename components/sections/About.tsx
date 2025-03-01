import { DATA } from "@/data/resume";
import { BlurFade } from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants";

function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-4xl">
      <div className="space-y-2">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="prose max-w-full text-pretty font-sans text-xl text-muted-foreground font-bold dark:prose-invert">
            {DATA.summary}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export default About;
