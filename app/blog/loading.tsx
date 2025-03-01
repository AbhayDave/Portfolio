import { PageTransitionLoader } from "@/components/PageTransitionLoader";

export default function Loading() {
  return (
      <div className="fixed top-0 left-0 flex items-center justify-center h-screen w-full">
        <PageTransitionLoader />
      </div>
    );
}
