import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import Image from "next/image";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
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
          {/* Flex container for desktop layout */}
          <div className="tablet:flex tablet:items-start tablet:justify-between tablet:gap-8">
            {/* Left side: Text and Socials */}
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
                  {data.headerTaglineTwo}
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

            {/* Right side: Large image (tablet and up) */}
            <div className="hidden tablet:block tablet:flex-shrink-0 tablet:w-1/3 laptop:w-2/5 laptopl:w-2/5">
              <div className="sticky top-20">
                <Image
                  src="/images/mobile_banner.jpg" // Replace with your image path
                  alt="Profile"
                  width={600}
                  height={800}
                  className="w-full h-auto rounded-lg object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile banner image (below socials, above work) */}
          <div className="tablet:hidden mt-6 mb-6">
            <Image
              src="/images/mobile_banner.jpg" // Replace with your image path
              alt="Profile"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
              priority
            />
          </div>
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="ml-0 tablet:ml-4 text-2xl text-bold laptop: ml-2 text-2xl text-bold">My Projects.</h1>

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

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="ml-0 tablet:ml-4 text-2xl text-bold laptop: ml-2 text-2xl text-bold">Key Achievements.</h1>
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
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={aboutRef}>
            <h1 className="ml-0 tablet:ml-4 text-2xl text-bold laptop:ml-2 text-2xl text-bold">About.</h1>
            
            <div className="mt-5 tablet:m-10">
              <div className="flex flex-col laptop:flex-row gap-6 tablet:gap-8 items-start">
                {/* Paragraph text on left */}
                <div className="w-full laptop:w-2/3">
                  <p className="text-xl laptop:text-2xl w-full leading-relaxed">
                    {data.aboutpara}
                  </p>
                </div>
                
                {/* Smaller square image on right */}
                <div className="w-full laptop:w-1/3 flex-shrink-0 order-first laptop:order-last">
                  <div className="relative w-48 h-48 tablet:w-56 tablet:h-56 laptop:w-64 laptop:h-64 mx-auto laptop:mx-0 rounded-lg overflow-hidden">
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