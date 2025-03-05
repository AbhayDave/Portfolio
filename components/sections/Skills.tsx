import { DATA } from "@/data/resume";
import { BlurFade } from "../magicui/blur-fade";
import { Badge } from "../ui/badge";
import { BLUR_FADE_DELAY } from "@/constants";

function Skills() {
  return (
    <section id="skills">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold">Skills</h2>
        </BlurFade>
        <div className="flex flex-wrap gap-1">
          {DATA.skills.map((skill, id) => (
            <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
              <Badge key={skill}>{skill}</Badge>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
