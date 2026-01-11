import React from "react";
import Button from "../Button";
import Image from "next/image";
import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link 
      gap-4 mob:gap-6 tablet:gap-8 laptop:gap-10 laptopL:gap-12`}>
      {yourData.socials.map((social, index) => (
        <div key={index} className="flex flex-col items-center">
          {social.icon && (
            <div className="mb-1 mob:mb-2 tablet:mb-3 laptop:mb-4">
              <Image
                src={social.icon}
                alt={social.title}
                width={80}
                height={80}
                className="w-6 h-6 mob:w-8 mob:h-8 tablet:w-10 tablet:h-10 laptop:w-12 laptop:h-12 laptopL:w-14 laptopL:h-14"
              />
            </div>
          )}
          <Button onClick={() => window.open(social.link)}>
            {social.title}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Socials;