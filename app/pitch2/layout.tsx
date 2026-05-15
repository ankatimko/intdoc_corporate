import type React from "react";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

export default function Pitch2Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className={interTight.variable}>{children}</div>;
}
