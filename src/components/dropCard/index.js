import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
const DropDownCard = () => {
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(!close);
  };
  return (
    <div>
      <div onClick={handleClose} className="flex cursor-pointer">
        <h1 className=" text-xl text-green-500"> Can Edit </h1>
        <ChevronDownIcon className="h-7 w-7 text-green-500" />
      </div>
      {close ? (
        <div
          className="rounded shadow-md p-4 "
          style={{
            position: "absolute",
            zIndex: 1,
            backgroundColor: "white",
          }}
        >
          <h1 className="text-xl text-black">Can View</h1>
          <h1 className="text-xl text-green-400 pt-2 pb-2">Can View</h1>
          <h1 className="text-xl text-red-400">Remove User</h1>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default DropDownCard;
