import React from "react";
import Image from "next/image";
import yourData from "../../data/portfolio.json";

const Socials = () => {
  return (
    <div className="w-screen bg-[#d4cdc7] flex justify-center py-1 mob:py-1.5 tablet:py-3 laptop:py-4">
      <div className="flex flex-wrap mob:flex-nowrap justify-center items-center gap-2 mob:gap-3 tablet:gap-6 laptop:gap-8 p-1 mob:p-1 tablet:p-3">
        {yourData.socials.map((social, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => window.open(social.link)}
            title={social.title}
          >
            {/* Icons - hidden on mobile, shown on tablet and up */}
            <div className="hidden tablet:block p-1 mob:p-1 tablet:p-2 rounded-full hover:bg-gray-100/30 transition-colors">
              <Image
                src={social.icon}
                alt={social.title}
                width={90}
                height={70}
                className="w-10 h-10 laptop:w-14 laptop:h-14"
              />
            </div>
            
            {/* Text label - shown on all screens */}
            <span className="mt-0.5 tablet:mt-1.5 text-xs mob:text-sm tablet:text-sm laptop:text-base font-medium">
              {social.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;