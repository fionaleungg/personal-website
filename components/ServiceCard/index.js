import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`w-full p-3 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark"
          ? "hover:bg-pink-400/30"
          : "hover:bg-pink-300/30"
      } hover:scale-105 link`}
    >
      {/* Heading */}
      <h1 className="font-semibold text-lg sm:text-2xl tablet:text-3xl laptop:text-3xl leading-snug">
        {name ? name : "Heading"}
      </h1>

      {/* Description */}
      <p className="mt-3 text-base sm:text-lg tablet:text-xl laptop:text-xl opacity-80 leading-relaxed font-medium">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
      </p>
    </div>
  );
};

export default ServiceCard;
