import { DATA } from "@/data/resume";
import { BlurFade } from "../magicui/blur-fade";
import { BLUR_FADE_DELAY } from "@/constants";
import Link from "next/link";

function Contact() {
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Contact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hit me up with your questions in a DM on{" "}
              <Link
                href={DATA.contact.social.X.url}
                className="text-blue-500 hover:underline"
              >
                Twitter!
              </Link>{" "}
              or{" "}
              <Link
                href={DATA.contact.social.LinkedIn.url}
                className="text-blue-500 hover:underline"
              >
                Linkedin!
              </Link>{" "}
              I'll get back to you when I can. Just a heads up, I'm not
              interested in sales pitches.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

export default Contact;
