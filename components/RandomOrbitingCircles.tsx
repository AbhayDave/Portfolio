import useWindowSize from "@/hooks/useWindowSize";
import { OrbitingCircles } from "./magicui/orbiting-circles";
import { Icons } from "./icons";

const getRadius = (windowWidth: number) => {
  if (windowWidth >= 1280) {
    // Large screens (e.g., desktops)
    return { large: 200, small: 100, largeIcon: 60, smallIcon: 40 };
  } else if (windowWidth >= 768) {
    // Medium screens (e.g., tablets)
    return { large: 150, small: 75, largeIcon: 50, smallIcon: 30 };
  } else {
    // Small screens (e.g., phones)
    return { large: 100, small: 50, largeIcon: 40, smallIcon: 30 };
  }
};

export function OrbitingCirclesDemo() {
  const windowWidth = useWindowSize();

  const { large, small, largeIcon, smallIcon } = getRadius(windowWidth);

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles iconSize={largeIcon} radius={large}>
        <Icons.arch />
        <Icons.notion />
        <Icons.openaiOrbit />
        <Icons.googleDrive />
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}
