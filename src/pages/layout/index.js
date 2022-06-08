import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import DetailCard from "../../components/detailCard";
import { LinkIcon } from "@heroicons/react/solid";
import myArray from "../../components/array";
import DropDownCard from "../../components/dropCard";
const Layout = () => {
  return (
    <div className="p-10 rounded  bg-zinc-50">
      <div className="w-2/5 shadow-md rounded bg-white">
        <div className="p-4">
          <h1 className="font-bold text-xl">Invite Users</h1>
          <div className="pt-5 flex justify-between items-center">
            <Input />
            <Button text="Send Invite" />
          </div>
        </div>
        <div className="pt-3 pb-6">
          <hr />
          <div className="p-4 ">
            {myArray &&
              myArray.map((items) => {
                return (
                  <div className="pt-5 pb-5">
                    <DetailCard items={items} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="pt-4 ">
          <hr />
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center">
              <LinkIcon className="w-6 h-6  text-green-400 " />
              <h1 className="pl-3 text-xl text-green-400">Copy Story Link</h1>
            </div>
            <div className="flex  items-center">
              <h1 className="text-xl mr-4">Invite Users</h1>
              <DropDownCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
