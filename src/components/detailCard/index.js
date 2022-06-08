import React, { useState } from "react";
import DropDownCard from "../dropCard";
const DetailCard = ({ items }) => {
  const { name, alphabet, color } = items;
  
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div
          style={{ backgroundColor: `${color}` }}
          className="text-center h-7 p-0.4 w-7  text-white text-xl rounded-full"
        >
          {alphabet}
        </div>
        <p className="pl-3 text-xl text-gray-500">{name}</p>
      </div>
      <div>
        <h1 className="text-xl text-gray-500">
          {/* Owner */}
          <DropDownCard  />
        </h1>
      </div>
    </div>
  );
};

export default DetailCard;
