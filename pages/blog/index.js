import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { stagger } from "../../animations";
import Cursor from "../../components/Cursor";
import Header from "../../components/Header";
import data from "../../data/portfolio.json";
import { useIsomorphicLayoutEffect } from "../../utils";

const Work = () => {
  const showWork = useRef(data.showBlog);
  const text = useRef();
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
    if (showWork.current) stagger([text.current], { y: 30 }, { y: 0 });
    else router.push("/");
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const WorkSection = ({ title, projects }) => {
    if (!projects || projects.length === 0) return null;
  
    return (
      <div className="mt-12 text-white">
        <h2 className="ml-0 tablet:ml-4 text-2xl font-bold">
          {title}.
        </h2>
  
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
  
                <h3 className="mt-5 text-3xl font-semibold text-white">
                  {project.title}
                </h3>
  
                {project.datePeriod && (
                  <p className="mt-2 text-sm text-white/70">
                    {project.datePeriod}
                  </p>
                )}
  
                {project.shortDescription && (
                  <p className="mt-2 text-lg text-white/80">
                    {project.shortDescription}
                  </p>
                )}
  
                <p className="mt-2 text-lg text-white/80">
                  {project.description}
                </p>
  
                {project.longDescription && (
                  <p className="mt-3 text-base leading-relaxed text-white/90">
                    {project.longDescription}
                  </p>
                )}
              </div>
  
              <div className="mt-4 flex gap-4">
                {project.category === "development" && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-sm text-white/70 hover:text-white underline"
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
                    className="text-sm text-white/70 hover:text-white underline"
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
          data.showCursor && "cursor-none"
        }`}
      >
        {data.showCursor && <Cursor />}
  
        <Head>
          <title>Work</title>
        </Head>
  
        {/* Header */}
        <Header isBlog={true} />
  
        {/* Page content — padded to clear fixed header */}
        <div className="container mx-auto pt-24 laptop:pt-28 mb-10">
          <h1
            ref={text}
            className="mob:p-2 font-bold text-6xl laptop:text-8xl w-full"
          >
            Work.
          </h1>
  
          <WorkSection title="Development" projects={developmentProjects} />
          <WorkSection title="Design" projects={designProjects} />
        </div>
      </div>
    )
  );  
};

export default Work;
