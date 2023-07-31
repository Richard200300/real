import React from "react";
import limited_img from "../../assets/images/limited_img.png";
import img_border from "../../assets/icons/img_border.svg";
import down_arrow from "../../assets/icons/down_arrow.svg";

const Limited_collection = () => {
  return (
    <section className="relative mt-[100px] flex items-start justify-between border-t-[1.5px] border-[#0B0B0B] pt-3 ">
      <article className="mt-6  h-[100%] basis-[52.5%] uppercase">
        <div className="w-[282px] text-[40px]/[40px] font-[500] ">
          <p>
            <span className="font-[400]">/</span>limit
            <em className="font-[400]">e</em>d{" "}
            <span className="font-[400]">
              c<em>o</em>llecti<em>o</em>n
            </span>
          </p>
        </div>
        <article className="absolute bottom-0 w-[52.5%] text-[16px]/[24px] font-[400] uppercase text-[#5C5C5C]">
          <div className="flex cursor-pointer justify-between border-y-[1px] border-[#5C5C5C] py-2">
            <p> pre-fall 2023</p>
            <img src={down_arrow} alt="down_arrow" />
          </div>
          <div className="flex cursor-pointer justify-between border-b-[1px] border-[#5C5C5C] py-2">
            <p>uncommon [limited time sale]</p>
            <img src={down_arrow} alt="down_arrow" />
          </div>
          <div className="flex cursor-pointer justify-between border-b-[1px] border-[#5C5C5C] py-2">
            <p> essentials 2023</p>
            <img src={down_arrow} alt="down_arrow" />
          </div>
        </article>
      </article>
      <article className="relative h-[632px] w-[470px]">
        <div className="mt-[20px] flex h-[614px] w-[458px] items-center justify-center">
          <img
            src={limited_img}
            alt="limited_img"
            className=" ml-[14px] mt-[2px] h-[95%] w-[97%] object-cover object-top"
          />
        </div>
        <img
          src={img_border}
          alt="img_border"
          className="absolute bottom-[0px] right-[0px]"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute top-[23px] rotate-[180deg]"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute right-[0px] top-[23px] rotate-[270deg]"
        />
        <img
          src={img_border}
          alt="img_border"
          className="absolute bottom-[0px] rotate-[90deg]"
        />
      </article>
    </section>
  );
};

export default Limited_collection;
