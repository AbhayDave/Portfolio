import { DATA } from "@/data/resume";
import { BlurFade } from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants";
import { ResumeCard } from "../ResumeCard";

function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-4xl">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-xl font-bold">Education</h2>
        </BlurFade>
        {DATA.education.map((education, id) => (
          <BlurFade
            key={education.company}
            delay={BLUR_FADE_DELAY * 8 + id * 0.05}
          >
            <ResumeCard
              key={education.company}
              href={education.href}
              logoUrl={education.logoUrl}
              badges={education.badges}
              altText={education.company}
              title={education.company}
              subtitle={education.title}
              period={`${education.start} - ${education.end}`}
              description={education.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

export default Education;
