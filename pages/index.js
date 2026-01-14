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

  const textOne = useRef(null);
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
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
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

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}

      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <div className="laptop:mt-20 mt-10">
          {/* Desktop layout */}
          <div className="tablet:flex tablet:items-start tablet:justify-between tablet:gap-8">
            {/* Left */}
            <div className="tablet:flex-1">
              <div className="mt-5">
                <h1
                  ref={textOne}
                  className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
                >
                  {data.headerTaglineOne}
                </h1>

                <h1
                  ref={textTwo}
                  className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                >
                  {data.headerTaglineTwo}{" "}
                  <span
                    ref={typedRef}
                    className="inline-block ml-2"
                  ></span>
                </h1>

                <h1
                  ref={textThree}
                  className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                >
                  {data.headerTaglineThree}
                </h1>

                <h1
                  ref={textFour}
                  className="text-3xl tablet:text-4xl laptop:text-4xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
                >
                  {data.headerTaglineFour}
                </h1>
              </div>

              <Socials className="mt-2 laptop:mt-5" />
            </div>

            {/* Right image (tablet+) */}
            <div className="hidden tablet:block tablet:flex-shrink-0 tablet:w-1/3 laptop:w-2/5">
              <div className="sticky top-20">
                {/* Optional image */}
                {/* <Image
                  src="/images/mobile_banner.jpg"
                  alt="Profile"
                  width={600}
                  height={800}
                  className="rounded-lg"
                  priority
                /> */}
              </div>
            </div>
          </div>

          {/* Mobile image */}
          <div className="tablet:hidden mt-6 mb-6">
            {/* <Image
              src="/images/mobile_banner.jpg"
              alt="Profile"
              width={800}
              height={400}
              className="rounded-lg"
              priority
            /> */}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="ml-0 tablet:ml-4 text-2xl text-bold">
            My Projects.
          </h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="ml-0 tablet:ml-4 text-2xl text-bold">
            Key Achievements.
          </h1>

          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Dev-only edit button */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}

        {/* About */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="ml-0 tablet:ml-4 text-2xl text-bold">
            About.
          </h1>

          <div className="mt-5 tablet:m-10">
            <div className="flex flex-col laptop:flex-row gap-6 items-start">
              <div className="w-full laptop:w-2/3">
                <p className="text-xl laptop:text-2xl leading-relaxed">
                  {data.aboutpara}
                </p>
              </div>

              <div className="w-full laptop:w-1/3 order-first laptop:order-last">
                <div className="relative w-48 h-48 laptop:w-64 laptop:h-64 mx-auto rounded-lg overflow-hidden">
                  <img
                    src="/images/heart.png"
                    alt="About me"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
