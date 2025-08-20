import AboutPreview from "@/components/forms/AboutPreview";
import HeroSection from "@/components/forms/Hero";
import Navbar from "@/components/forms/Navbar";
import WhatWeDo from "@/components/forms/WhatWeDo";
import ProductShowcase from "./pages/product/page";
// import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection />
    <AboutPreview/>
    <WhatWeDo/>
    <ProductShowcase/>
    </>
  );
}
