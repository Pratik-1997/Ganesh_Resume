"use client";

import { usePathname } from "next/navigation";
import Header from "@/app/components/Non-Reusable/Header/Header";
import Footer from "@/app/components/Non-Reusable/Footer/Footer";
import SmoothScroll from "@/app/components/Reusable/SmoothScroll/SmoothScroll";

type LayoutChromeProps = {
  children: React.ReactNode;
};

export default function LayoutChrome({ children }: LayoutChromeProps) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/case-study/nerolac";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <SmoothScroll>{children}</SmoothScroll>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
