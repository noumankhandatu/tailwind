import React from "react";
import Input from "../../components/input";
import Button from "../../components/button";
const Layout = () => {
  return (
    <div className="p-5 rounded  ">
      <div className="w-1/3 shadow">
        <div className="p-3">
          <h1 className="font-bold text-xl">Invite Users</h1>
          <div className="pt-5 flex justify-between items-center">
            <Input />
            <Button text="Send Invite" />
          </div>
        </div>
        <div className="pt-3 pb-6">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Layout;
