import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";

// Data
import data from "../data/portfolio.json";
const { showResume } = data;

const Resume = () => {
  const router = useRouter();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

  return (
    <div
      className={`bg-[#bfb6ad] min-h-screen ${
        data.showCursor && "cursor-none"
      }`}
    >
      {data.showCursor && <Cursor />}

      {/* Header */}
      <Header isBlog />

      {/* Page content — pushed below fixed header */}
      <div className="container mx-auto pt-24 laptop:pt-28">
        {mount && (
          <div className="flex justify-center">
            <img
              src="/images/fionaleung_resumepng.png"
              alt="Fiona Leung Resume"
              className="
                w-full
                tablet:w-[80%]
                laptop:w-[70%]
                max-w-4xl
                h-auto
                laptop:mb-16
              "
            />


          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
