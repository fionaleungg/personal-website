import { useRef, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";

import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";

import Typed from "typed.js";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  const workRef = useRef(null);
  const aboutRef = useRef(null);

  const textTwo = useRef(null);
  const textThree = useRef(null);
  const textFour = useRef(null);

  const typedRef = useRef(null);

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

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textTwo.current, textThree.current, textFour.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, []);

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
    <div className={`relative ${data.showCursor && "cursor-none"} bg-[#bfb6ad]`}>
      {data.showCursor && <Cursor />}

      <Head>
        <title>Fiona Leung</title>
      </Head>

      <div className="container mx-auto">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
      </div>

      {/* FULL-BLEED HERO */}
<div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden mt-10 laptop:mt-20">
  {/* Background */}
  <img
    src="/images/background_img.png"
    alt="Hero background"
    className="w-full h-auto object-cover"
  />

  {/* Overlay content */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center pointer-events-none">
    {/* Bunny */}
    <div className="w-[8vw] max-w-[60px] tablet:w-[12vw] tablet:max-w-[120px] laptop:max-w-[150px] mb-0">
      <img
        src="/images/bunny.png"
        alt="Bunny"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Pixel Image */}
    <div className="w-[35vw] max-w-[220px] laptop:w-[40vw] laptop:max-w-[400px] mt-2 mb-2 laptop:mt-8 laptop:mb-10">
      <img
        src="/images/fionaleung_pixel.png"
        alt="Fiona Leung Pixel"
        className="w-full h-auto object-contain"
      />
    </div>


    {/* Taglines */}
    <div className="mt-0 space-y-1 leading-tight text-center">
      <h2
        ref={textTwo}
        className="text-[9px] sm:text-base tablet:text-lg laptop:text-2xl font-semibold"
      >
        {data.headerTaglineTwo}{" "}
        <span ref={typedRef} className="inline-block ml-1" />
      </h2>

      <h2
        ref={textThree}
        className="text-[9px] sm:text-base tablet:text-lg laptop:text-2xl font-semibold opacity-90"
      >
        {data.headerTaglineThree}
      </h2>

      <h2
        ref={textFour}
        className="text-[9px] sm:text-base tablet:text-lg laptop:text-2xl font-semibold opacity-80"
      >
        {data.headerTaglineFour}
      </h2>
    </div>

    {/* Butterfly */}
    <div className="w-[6vw] max-w-[50px] tablet:w-[12vw] tablet:max-w-[120px] laptop:max-w-[120px] mt-8">
      <img
        src="/images/butterfly_pixel.png"
        alt="Butterfly"
        className="w-full h-auto object-contain"
      />
    </div>
  </div>

  {/* Left frame (mirrored) */}
  <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[20vw] max-w-[240px] tablet:max-w-[320px] laptop:max-w-[400px]">
    <img
      src="/images/frame.png"
      alt="Left frame"
      className="-scale-x-100 w-full h-auto object-contain"
    />
  </div>

  {/* Right frame */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[20vw] max-w-[240px] tablet:max-w-[320px] laptop:max-w-[400px]">
    <img
      src="/images/frame.png"
      alt="Right frame"
      className="w-full h-auto object-contain"
    />
  </div>
</div>


      {/* Socials */}
      <div className="w-screen">
        <Socials />
      </div>

      {/* About Me Section */}
<div className="container mx-auto mt-16 laptop:mt-24 p-2 laptop:p-0" ref={aboutRef}>
  <div className="relative flex flex-col items-center">

    {/* About Me Image + Butterflies */}
    <div className="relative w-full flex justify-center items-center mb-8">
      {/* Left Butterfly */}
      <div className="absolute left-[5%] top-1/2 -translate-y-1/2 w-[10vw] max-w-[180px] tablet:max-w-[220px] laptop:max-w-[260px] z-20">
        <img
          src="/images/butterfly_pixel.png"
          alt="Left Butterfly"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* About Me Illustration */}
      <div className="w-[55%] max-w-[350px] tablet:max-w-[450px] laptop:max-w-[500px] z-10">
        <img
          src="/images/aboutme_frame_img.png"
          alt="About Me"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Butterfly */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[10vw] max-w-[180px] tablet:max-w-[220px] laptop:max-w-[260px] z-20">
        <img
          src="/images/butterfly_pixel.png"
          alt="Right Butterfly"
          className="-scale-x-100 w-full h-auto object-contain"
        />
      </div>
    </div>

    {/* About Me Title */}
    <div className="w-[40%] max-w-[300px] tablet:max-w-[350px] laptop:max-w-[400px] mb-6">
      <img
        src="/images/aboutme_title.png"
        alt="About Me Title"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* About Me Content */}
    <div className="relative flex flex-col laptop:flex-row w-full max-w-[1200px] items-start gap-6">

      {/* Left Frame */}
      <div className="hidden laptop:block laptop:absolute left-0 top-0 h-full w-[12vw] max-w-[250px] z-10">
        <img
          src="/images/frame.png"
          alt="Left Frame"
          className="-scale-x-100 w-full h-full object-contain"
        />
      </div>


      {/* Text */}
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

      {/* Right Frame */}
      <div className="hidden laptop:block laptop:absolute right-0 top-0 h-full w-[12vw] max-w-[250px] z-10">
        <img
          src="/images/frame.png"
          alt="Right Frame"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
</div>


      {/* Key Achievements */}
      <div className="w-screen bg-[#80756a] py-10 laptop:py-16 mt-10 laptop:mt-30">
        <div className="container mx-auto px-4 laptop:px-6">
          <div className="flex justify-center mb-8 laptop:mb-12">
            <div className="w-[90%] max-w-[500px] sm:w-[70%] sm:max-w-[500px] tablet:w-[60%] tablet:max-w-[600px] laptop:w-[50%] laptop:max-w-[700px]">
              <img
                src="/images/keyachievements_title.png"
                alt="Key Achievements"
                className="w-full h-auto object-contain"
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

      <div className="container mx-auto px-6 tablet:px-10 laptop:px-0 pb-5 laptop:pb-13">
        <Footer />
      </div>
    </div>
  );
}
