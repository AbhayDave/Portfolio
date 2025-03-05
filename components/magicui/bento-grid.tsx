import { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Globe } from "./globe";
import { AnimatedCopyEmailAddressButton } from "../AnimatedCopyEmailAddressButton";
import { IconCloudGlobe } from "../IconCloud";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: BentoGridItemProps) => {
  const handleCopy = () => {
    const text = "abhaydave2004@gmail.com";
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      // style={{
      //   background: "rgb(2,0,36)",
      //   backgroundColor:
      //     "linear-gradient(90deg, rgba(2,0,36,1) 13%, rgba(60,52,52,1) 45%, rgba(112,110,111,1) 83%)",
      // }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <div className="bg-red-500">
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </div>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && (
            <div className="">
              <Globe />
            </div>
          )}

          {/* Tech stack list div */}
          {id === 3 && <IconCloudGlobe />}
          {id === 6 && (
            <div
              className="mt-5 flex items-center justify-center"
              // style={{
              //   background: "rgb(2,0,36)",
              //   backgroundColor:
              //     "linear-gradient(90deg, rgba(2,0,36,1) 13%, rgba(60,52,52,1) 45%, rgba(112,110,111,1) 83%)",
              // }}
            >
              {/* <div className={"absolute -bottom-5 right-0 block"}> */}
              {/* <CoolMode> */}
              <AnimatedCopyEmailAddressButton onClick={handleCopy} />
              {/* </CoolMode> */}
              {/* </div> */}
              {/* <Button onClick={handleCopy}>Click Me!</Button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { BentoGridItem, BentoGrid };
