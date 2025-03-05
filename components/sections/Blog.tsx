import { DATA } from "@/data/resume";
import { BlurFade } from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants";
import Link from "next/link";

function Blog() {
  return (
    <section id="hackathons" className="mx-auto w-full max-w-4xl">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                What I&lsquo;m upto
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                I read a lot of technical blogs
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Back in my university days, I was glued to tech blogs, seeing
                amazing things people across the country were building and
                sharing. It was so inspiring! That&lsquo;s why I&lsquo;ve
                decided to start my own blog – to share what I&lsquo;m learning
                and building.{" "}
                <Link
                  href={DATA.blogUrl}
                  className="text-blue-500 hover:underline"
                >
                  I&lsquo;d love for you to check it out and leave a comment
                </Link>{" "}
                . Let&lsquo;s connect!
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export default Blog;
