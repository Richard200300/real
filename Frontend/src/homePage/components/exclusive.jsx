import React from "react";
import exclusive_1 from "../../assets/images/exclusive_1.png";
import exclusive_2 from "../../assets/images/exclusive_2.png";
import exclusive_3 from "../../assets/images/exclusive_3.png";
import exclusive_3_icon from "../../assets/icons/exclusive_1.svg";
import exclusive_2_icon from "../../assets/icons/exclusive_2.svg";
import exclusive_1_icon from "../../assets/icons/exclusive_3.svg";
const Exclusive = () => {
  return (
    <section className="mt-[70px] flex items-center justify-between gap-4">
      <article className="relative h-[692px] w-[435px] ">
        <div className="relative h-[648] w-[100%]">
          <img
            src={exclusive_1}
            alt="exclusive_1"
            className="h-[100%] w-[100%]"
          />
          <img
            src={exclusive_1_icon}
            alt="exclusive_1_icon"
            className="absolute bottom-10 right-10"
          />
        </div>
        <div className="absolute bottom-0 uppercase">
          <p className="text-[28px]/[32px] font-[600]">
            m<em className="font-[400]">e</em>mber sh
            <em className="font-[400]">o</em>p
          </p>
          <p className="text-[12px]/[12px] font-[600] text-[#0B0B0B]">
            shop member exclusive styles
          </p>
        </div>
      </article>
      <article className="relative h-[692px] w-[435px] ">
        <div className="relative h-[648] w-[100%]">
          <img
            src={exclusive_2}
            alt="exclusive_2"
            className="h-[100%] w-[100%]"
          />
          <img
            src={exclusive_2_icon}
            alt="exclusive_2_icon"
            className="absolute bottom-10 right-10"
          />
        </div>
        <div className="absolute bottom-0 uppercase">
          <p className="text-[25px]/[32px] font-[600]">
            sh<em className="font-[400]">o</em>pp
            <em className="font-[400]">i</em>ng as it sh
            <em className="font-[400]">o</em>uld b
            <em className="font-[400]">e</em>
          </p>
          <p className="text-[12px]/[12px] font-[600] text-[#0B0B0B]">
            free shipping on orders above 50,000 NGN
          </p>
        </div>
      </article>
      <article className="relative h-[692px] w-[435px] ">
        <div className="relative h-[648] w-[100%]">
          <img
            src={exclusive_3}
            alt="exclusive_3"
            className="h-[100%] w-[100%]"
          />
          <img
            src={exclusive_3_icon}
            alt="exclusive_3_icon"
            className="absolute bottom-7 right-10"
          />
        </div>
        <div className="absolute bottom-0 uppercase">
          <p className="text-[25px]/[32px] font-[600]">
            asis by y<em className="font-[400]">o</em>urs tr
            <em className="font-[400]">u</em>ly
          </p>
          <p className="text-[12px]/[12px] font-[600] text-[#0B0B0B]">
            choose your own style{" "}
          </p>
        </div>
      </article>
    </section>
  );
};

export default Exclusive;
