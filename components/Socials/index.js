import React from "react";
import Image from "next/image";
import yourData from "../../data/portfolio.json";

const Socials = () => {
  return (
    <div className="w-screen bg-[#d4cdc7] flex justify-center py-1 mob:py-1.5 tablet:py-2 laptop:py-4">
      <div className="flex flex-wrap mob:flex-nowrap justify-center items-center gap-2 mob:gap-3 tablet:gap-4 laptop:gap-8 p-1 mob:p-1 tablet:p-2">
        {yourData.socials.map((social, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.open(social.link)}
            title={social.title}
          >
            {/* Icons — desktop only */}
            <div className="hidden laptop:block p-1 rounded-full hover:hover:bg-pink-400/30 transition-colors">
              <Image
                src={social.icon}
                alt={social.title}
                width={90}
                height={70}
                className="w-14 h-14"
              />
            </div>

            {/* Text — mobile base, slightly larger on tablet */}
            <span
              className="
                mt-0.5
                text-xs
                mob:text-sm
                tablet:text-base
                laptop:text-lg
                font-medium
              "
            >
              {social.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
