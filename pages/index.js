import { useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Cursor from "../components/Cursor";

import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

import Typed from "typed.js";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Refs
  const workRef = useRef(null);
  const aboutRef = useRef(null);

  const textTwo = useRef(null);
  const textThree = useRef(null);
  const textFour = useRef(null);

  const typedRef = useRef(null);

  // Scroll handlers
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  // Text animation
  useIsomorphicLayoutEffect(() => {
    stagger(
      [textTwo.current, textThree.current, textFour.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, []);

  // Typed.js
  useEffect(() => {
    if (!typedRef.current) return;

    const typed = new Typed(typedRef.current, {
      strings: ["Curious", "Strategic", "Inventive"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1200,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className={`relative bg-[#bfb6ad]`}>
      {data.showCursor && <Cursor />}

      <Head>
        <title>Fiona Leung</title>
      </Head>

      {/* <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div> */}

      {/* Header stays constrained */}
      <div className="container mx-auto">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
      </div>

      {/* FULL-BLEED HERO */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden mt-10 laptop:mt-20">

        {/* Background */}
        <Image
          src="/images/background_img.png"
          alt="Hero background"
          width={1920}
          height={900}  // keep original image
          priority
          sizes="100vw"
          className="w-full h-auto object-cover"
        />

        {/* Overlay content: vertically & horizontally centered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center pointer-events-none">

          {/* Bunny above pixel image */}
          <div className="w-[10vw] max-w-[80px] tablet:w-[15vw] tablet:max-w-[160px] laptop:max-w-[200px] mb-0">
            <Image
              src="/images/bunny.png"
              alt="Bunny"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Pixel image */}
          <div className="w-[35vw] max-w-[220px] laptop:w-[40vw] laptop:max-w-[400px] mb-0">
            <Image
              src="/images/fionaleung_pixel.png"
              alt="Fiona Leung Pixel"
              width={400}
              height={65}
              className="w-full h-auto object-contain"
              priority
            />
          </div>


        {/* Taglines */}
        <div className="mt-0 space-y-1 leading-tight text-center">
          <h2
            ref={textTwo}
            className="text-[9px] sm:text-base tablet:text-lg font-semibold"
          >
            {data.headerTaglineTwo}{" "}
            <span ref={typedRef} className="inline-block ml-1" />
          </h2>

          <h2
            ref={textThree}
            className="text-[9px] sm:text-base tablet:text-lg font-semibold opacity-90"
          >
            {data.headerTaglineThree}
          </h2>

          <h2
            ref={textFour}
            className="text-[9px] sm:text-base tablet:text-lg font-semibold opacity-80"
          >
            {data.headerTaglineFour}
          </h2>
        </div>

          {/* Butterfly below taglines */}
          <div className="w-[10vw] max-w-[80px] tablet:w-[15vw] tablet:max-w-[160px] laptop:max-w-[200px] mt-4 tablet:mt-6">
            <Image
              src="/images/butterfly_pixel.png"
              alt="Butterfly"
              width={175}
              height={75}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Left mirrored frame */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[20vw] max-w-[240px] tablet:max-w-[320px] laptop:max-w-[400px]">
          <Image
            src="/images/frame.png"
            alt="Left frame"
            width={360}
            height={640}
            className="-scale-x-100 w-full h-auto object-contain"
          />
        </div>

        {/* Right frame */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[20vw] max-w-[240px] tablet:max-w-[320px] laptop:max-w-[400px]">
          <Image
            src="/images/frame.png"
            alt="Right frame"
            width={360}
            height={640}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Socials (full-width, no gap below hero) */}
      <div className="w-screen">
        <Socials />
      </div>

      {/* Rest of page stays constrained */}
      <div className="container mx-auto">

      {/* About Section */}
      <div
        className="container mx-auto mt-10 laptop:mt-20 p-2 laptop:p-0"
        ref={aboutRef}
      >
        {/* Add extra bottom spacing after About Me */}
        <div className="mb-12 laptop:mb-20">
          {/* About Me image with butterflies */}
          <div className="relative w-full flex flex-col items-center mb-6">
            <div className="relative w-full flex justify-center items-center mb-2">
              {/* Left butterfly */}
              <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[12vw] max-w-[220px] tablet:max-w-[280px] laptop:max-w-[330px] z-20">
                <Image
                  src="/images/butterfly_pixel.png"
                  alt="Left Butterfly"
                  width={330}
                  height={330}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* AboutMe image */}
              <div className="w-[65%] max-w-[500px] tablet:max-w-[600px] laptop:max-w-[700px] z-10">
                <Image
                  src="/images/aboutme_frame_img.png"
                  alt="About Me"
                  width={700}
                  height={440}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>

              {/* Right butterfly */}
              <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[12vw] max-w-[220px] tablet:max-w-[280px] laptop:max-w-[330px] z-20">
                <Image
                  src="/images/butterfly_pixel.png"
                  alt="Right Butterfly"
                  width={330}
                  height={330}
                  className="-scale-x-100 w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>

            {/* About Me Title */}
            <div className="w-[40%] max-w-[300px] tablet:max-w-[350px] laptop:max-w-[400px] mt-2">
              <Image
                src="/images/aboutme_title.png"
                alt="About Me Title"
                width={400}
                height={100}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* About Text */}
          <div className="relative flex flex-col laptop:flex-row gap-6 items-start">
            {/* Left frame - desktop only */}
            <div className="hidden laptop:block laptop:absolute left-0 top-0 h-full w-[12vw] max-w-[300px]">
              <Image
                src="/images/frame.png"
                alt="Left Frame"
                width={500}
                height={800}
                className="-scale-x-100 w-full h-full object-contain"
              />
            </div>

            {/* Text - smaller on mobile */}
            <div className="w-full laptop:w-2/3 mx-auto z-10 px-4">
              <p className="text-base tablet:text-xl laptop:text-2xl leading-relaxed">
                {data.aboutpara}
              </p>
              <p className="mt-4 tablet:mt-6 text-sm tablet:text-lg laptop:text-xl leading-relaxed opacity-80">
                Interested in seeing what I've been up to? Check out my{" "}
                <Link href="/blog" className="font-semibold hover:text-[#ff1b6b] transition-colors">
                  <span className="underline underline-offset-2">Work</span>
                </Link>{" "}
                page to explore my latest projects and designs!
              </p>
            </div>

            {/* Right frame - desktop only */}
            <div className="hidden laptop:block laptop:absolute right-0 top-0 h-full w-[12vw] max-w-[300px]">
              <Image
                src="/images/frame.png"
                alt="Right Frame"
                width={500}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div> {/* End mb-12 laptop:mb-20 */}
      </div>


        {/* Achievements - FULL WIDTH */}
      </div>

      {/* Full width Key Achievements section */}

<div className="w-screen bg-[#80756a] py-10 laptop:py-16 mt-10 laptop:mt-30">
  <div className="container mx-auto px-4 laptop:px-6">
    {/* Key Achievements Title image */}
    <div className="flex justify-center mb-8 laptop:mb-12">
      <div className="w-[90%] max-w-[500px] sm:w-[70%] sm:max-w-[500px] tablet:w-[60%] tablet:max-w-[600px] laptop:w-[50%] laptop:max-w-[700px]">
        <Image
          src="/images/keyachievements_title.png"
          alt="Key Achievements"
          width={700}
          height={100}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>


    <div className="mt-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
      {data.services.map((service, index) => (
        <div
          key={index}
          className="text-[12px] sm:text-base tablet:text-base laptop:text-base"
        >
          <ServiceCard
            name={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Footer stays constrained */}
      <div className="container mx-auto px-6 tablet:px-10 laptop:px-0 pb-5 laptop:pb-13">
        <Footer />
      </div>
    </div>
  );
}