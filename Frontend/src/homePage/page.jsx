import React from "react";
import Header from "../components/header";
import Collection from "./components/collection";
import Banner from "../components/banner";
import New_Arrival from "./components/new_arrival";
import Limited_collection from "./components/limited_collection";
import Shop from "./components/shop";
import Discover from "./components/discover";
import Membership from "./components/membership";
import Exclusive from "./components/exclusive";
import back_to_top from "../assets/icons/back_to_top.svg"
import Footer from "../components/footer";
const Page = () => {
  return (
    <div className=" h-full p-0 ">
      <Header />
      <Collection />
      <Banner />
      <New_Arrival />
      <Limited_collection />
      <Shop />
      <Discover />
      <Membership />
      <Exclusive />
      <section>
        <div className="border-t-[1.5px] border-[#0B0B0B]   mt-[100px] relative">
<img src={back_to_top} alt="back_to_top" className="absolute right-[10%] top-[-25px] cursor-pointer" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Page;
