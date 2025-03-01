// "use client";
// import { usePathname, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useLoading } from "@/context/LoadingContext";

// export default function RouteChangeHandler() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { setIsPageLoading } = useLoading();

//   useEffect(() => {
//     setIsPageLoading(true);

//     console.log("Route change started");

//     const timeout = setTimeout(() => {
//       console.log("Route change ended");
//       setIsPageLoading(false); 
//     }, 2000); 

//     return () => clearTimeout(timeout);
//   }, [pathname, searchParams, setIsPageLoading]);

//   return null; 
// }
