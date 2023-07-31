import React from "react";
import { Outlet } from "react-router-dom";

const Page = () => {
  return (
    <div className="bg-[url('./assets/images/bg_img.png')] px-7">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Page;
