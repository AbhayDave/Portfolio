import { BlurFade } from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants";
import Grid from "../Grid";

function BentoGrid() {
  return (
    <section id="grid">
      <div className="mx-auto w-full max-w-4xl">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <Grid />
        </BlurFade>
      </div>
    </section>
  );
}

export default BentoGrid;
