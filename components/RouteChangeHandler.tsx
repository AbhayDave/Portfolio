"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useLoading } from "@/context/LoadingContext";

export default function RouteChangeHandler() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { setIsPageLoading } = useLoading();

  useEffect(() => {
    setIsPageLoading(true);

    console.log("Route change started");

    const timeout = setTimeout(() => {
      console.log("Route change ended");
      setIsPageLoading(false); 
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [pathname, searchParams, setIsPageLoading]);

  return null; 
}


// "use client";

// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useLoading } from "@/context/LoadingContext";

// export default function RouteChangeHandler() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { setIsPageLoading } = useLoading();
//   const [isDelaying, setIsDelaying] = useState(false);

//   useEffect(() => {
//     if (isDelaying) return; // Skip if already delaying

//     setIsDelaying(true); // Start delaying
//     setIsPageLoading(true); // Show the loader

//     const timeout = setTimeout(() => {
//       setIsPageLoading(false); // Hide the loader
//       setIsDelaying(false); // Stop delaying
//     }, 5000); // Delay for 10 seconds

//     return () => clearTimeout(timeout); // Cleanup timeout
//   }, [pathname, searchParams, setIsPageLoading, isDelaying]);

//   return null; // This component doesn't render anything
// }