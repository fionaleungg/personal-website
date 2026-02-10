import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { stagger } from "../../animations";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "../../utils";

const Work = () => {
  const showWork = useRef(data.showBlog);
  const text = useRef(null);
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const developmentProjects = useMemo(
    () => data.projects.filter((project) => project.category === "development"),
    []
  );

  const designProjects = useMemo(
    () => data.projects.filter((project) => project.category === "design"),
    []
  );

  const handleCardClick = (url) => window.open(url, "_blank");

  useIsomorphicLayoutEffect(() => {
    stagger(
      [text.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );

    if (!showWork.current) router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const WorkSection = ({ titleImage, alt, size = "default", projects }) => {
    if (!projects || projects.length === 0) return null;

    const sizeClasses =
      size === "small"
        ? "w-[40%] max-w-[220px] tablet:max-w-[260px] laptop:max-w-[300px]"
        : "w-[55%] max-w-[320px] tablet:max-w-[360px] laptop:max-w-[420px]";

    return (
      <div className="mt-14 text-white">
        {/* Section Title Image */}
        <div className={sizeClasses}>
          <Image
            src={titleImage}
            alt={alt}
            width={420}
            height={110}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Projects Grid */}
        <div className="mt-6 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div className="relative" key={project.id}>
              <div
                className="cursor-pointer"
                onClick={() => handleCardClick(project.url)}
              >
                <img
                  className="w-full h-60 rounded-lg shadow-lg object-cover"
                  src={project.imageSrc}
                  alt={project.title}
                />

                <h3 className="mt-5 text-3xl laptop:text-4xl font-semibold text-white">
                  {project.title}
                </h3>

                {project.datePeriod && (
                  <p className="mt-2 text-sm laptop:text-base text-white/70">
                    {project.datePeriod}
                  </p>
                )}

                {project.shortDescription && (
                  <p className="mt-2 text-lg laptop:text-xl text-white/80">
                    {project.shortDescription}
                  </p>
                )}

                <p className="mt-2 text-lg laptop:text-xl text-white/80">
                  {project.description}
                </p>

                {project.longDescription && (
                  <p className="mt-3 text-base laptop:text-lg leading-relaxed text-white/90">
                    {project.longDescription}
                  </p>
                )}

                {project.category === "development" &&
                  project.technologies && (
                    <p className="mt-3 text-sm laptop:text-base text-white/80">
                      <span className="font-semibold">
                        Technologies Used:
                      </span>{" "}
                      {project.technologies}
                    </p>
                  )}
              </div>

              {/* Links */}
              <div className="mt-4 flex gap-4">
                {project.category === "development" && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm laptop:text-base text-white/70 hover:text-white underline"
                  >
                    GitHub
                  </a>
                )}

                {project.category === "design" && project.figma && (
                  <a
                    href={project.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm laptop:text-base text-white/70 hover:text-white underline"
                  >
                    Figma
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    showWork.current && (
      <div
        className={`bg-[#bfb6ad] min-h-screen text-white ${
          ""
        }`}
      >
        {data.showCursor && <Cursor />}

        <Head>
          <title>Work</title>
        </Head>

        <Header isBlog={true} />

        {/* PAGE CONTENT */}
        <div
          className="
            container
            mx-auto
            pt-24 laptop:pt-28
            pb-6 laptop:pb-10
            px-6
            tablet:px-10
            laptop:px-0
          "
        >
          {/* WORK TITLE */}
          <div
            ref={text}
            className="mob:p-2 mx-auto w-[60%] max-w-[420px] tablet:max-w-[480px] laptop:max-w-[520px] text-center"
          >
            <Image
              src="/images/work_title.png"
              alt="Work"
              width={520}
              height={120}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Sections */}
          <WorkSection
            titleImage="/images/development_title.png"
            alt="Development"
            projects={developmentProjects}
          />

          <WorkSection
            titleImage="/images/design_title.png"
            alt="Design"
            size="small"
            projects={designProjects}
          />
        </div>

        {/* Footer text */}
        <h1 className="mt-4 text-xs tablet:text-sm text-center opacity-80 w-full pb-5 laptop:pb-13">
          Made With ❤ by{" "}
          <Link href="https://www.linkedin.com/in/fiona-leung1134/">
            <a className="underline underline-offset-2 hover:opacity-100 transition">
              Fiona Leung
            </a>
          </Link>
        </h1>
      </div>
    )
  );
};

export default Work;
