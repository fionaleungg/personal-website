import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link flex flex-col h-full"
      onClick={onClick}
    >
      {/* Image container with responsive aspect ratio */}
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 w-full aspect-video mob:aspect-[3/2] laptop:aspect-[16/9] flex-shrink-0">
        <img
          alt={name}
          className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>
      
      {/* Content that can grow/shrink */}
      <div className="flex flex-col flex-grow mt-3 mob:mt-4 laptop:mt-5">
        <h1 className="text-xl mob:text-2xl laptop:text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-base mob:text-lg laptop:text-xl opacity-50 mt-1 flex-grow">
          {description ? description : "Description"}
        </h2>
      </div>
    </div>
  );
};

export default WorkCard;