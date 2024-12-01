import React from "react";

export default function Banner({ title, content, image }) {
  return (
    <div
      className="w-full h-80 md:h-[800px] bg-cover bg-center relative mb-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Title and Content at the Bottom */}
      <div className="absolute bottom-5 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-4">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="mt-2 text-sm md:text-lg">{content}</p>
      </div>
    </div>
  );
}
