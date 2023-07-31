import React from "react";
import discover_img from "../../assets/images/discover_img.png";

const Discover = () => {
  return (
    <section className=" mt-[50px] flex justify-end pt-3">
      <article className="relative text-[64px]/[64px] font-[400] uppercase ">
        <p className=" mr-3 w-[375px] text-right">
          <span className="mr-1 font-[300]">/</span>W
          <em className="font-[300]">E</em> CRE<em className="font-[300]">a</em>
          TE
        </p>

        <p className="absolute left-[60%] w-[572px] ">
          F<em className="font-[300]">a</em>SH
          <span className="text-[#FFFFFF]">
            I<em className="font-[300]">o</em>N AR
            <em className="font-[300]">t</em> F<em className="font-[300]">o</em>
            R
          </span>
        </p>
        <p className="absolute right-6 top-[125px]">
          ev<em className="font-[300]">e</em>ry<em className="font-[300]">o</em>
          ne
        </p>
        <div className="absolute bottom-0 right-6 flex h-[131px] w-[131px] items-center justify-center rounded-full bg-[#A67700] ">
          <p className="br-[50%] text-[12px]/[20px] font-[600] text-[#FFFFFF]">
            discover
          </p>
        </div>
      </article>
      <article className="">
        <img src={discover_img} alt="discover_img" />
      </article>
    </section>
  );
};

export default Discover;
