import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Abhay Dave",
  initials: "AD",
  url: "https://dillion.io",
  blogUrl: "https://abhaydave.github.io",
  location: "Indore, MP",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer in India. I love building things and helping people. Video games, Emulation, Linux.",
  summary:
    "Full-stack developer passionate about Linux, open source, DevOps, and system design. Currently deepening my skills in system architecture and automation. While new to contributing, I'm a dedicated user of open-source tools. In my free time, I enjoy Linux customization, cooking, tech exploration, and teaching. Check out my GitHub for projects, and let's connect!",
  avatarUrl: "./me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "Java",
    "Angular",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://abhaydave.github.io", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "abhaydave2004@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AbhayDave",
        icon: Icons.githubDock,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abhay-dave",
        icon: Icons.linkedinDock,
      },
      X: {
        name: "X",
        url: "https://x.com/Abhay_Dave04",
        icon: Icons.xDock,
      },
      email: {
        name: "Send Email",
        url: "mailto:abhaydave2004@gmail.com?subject=Website%20Feedback&body=I%20have%20some%20feedback%20about%20your%20website:%0D%0A%0D%0A...",
        icon: Icons.emailDock,
      },
    },
  },
  work: [
    {
      company: "BazaarVoice",
      href: "https://atomic.finance",
      badges: [],
      location: "Bengaluru",
      title: "Software Engineer Intern",
      logoUrl: "/bazaarvoice.png",
      start: "July 2024",
      end: "January 2025",
      description:
        "Resolved critical bugs, cutting project timelines by 7 days. Improved UI response by 150ms and boosted engagement by 15% via React Query. Deployed 5+ features with feature flags for seamless rollouts. Debugged 20+ state issues, reducing recurrences by 30% and enhancing reliability.",
    },
  ],
  education: [
    {
      company: "Rajiv Gandhi University of Technology",
      href: "https://www.rgpv.ac.in/",
      badges: [],
      location: "Bhopal",
      title:
        "Bachelor's Degree of Technology in Information Technology (B.Tech IT)",
      logoUrl: "/rgpv.webp",
      start: "2021",
      end: "Present",
      description:
        "Data Structures, Software Methodology, Algorithms Analysis, Database Management, OOPS, Computer Networks, Cloud Computing, Operating Systems",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      // href: "https://chatcollect.com",
      // href: "#",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://chatcollect.com",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://magicui.design",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/magicuidesign/magicui",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://llm.report",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      //   {
      //     type: "Source",
      //     href: "https://github.com/dillionverma/llm.report",
      //     icon: <Icons.github className="size-3" />,
      //   },
      // ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      // links: [
      //   {
      //     type: "Website",
      //     href: "https://automatic.chat",
      //     icon: <Icons.globe className="size-3" />,
      //   },
      // ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
};

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-white",
    img: "/b1.svg",
    spareImg: "",
  },
  // {
  //   id: 2,
  //   title: "I'm very flexible with time zone communications",
  //   description: "",
  //   className:
  //     "lg:col-span-2 md:col-span-3 md:row-span-2 text-black dark:text-white",
  //   imgClassName: "",
  //   titleClassName: "justify-end items-center text-black",
  //   img: "",
  //   spareImg: "",
  // },
  {
    id: 2,
    title: "",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 text-black dark:text-white",
    imgClassName: "",
    titleClassName: "",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 bg-background text-black dark:text-white",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 bg-background text-black dark:text-white",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className:
      "md:col-span-3 md:row-span-2 bg-background text-black dark:text-white",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-start",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-1 bg-background text-black dark:text-white",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
