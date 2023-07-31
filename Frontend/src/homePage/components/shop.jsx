import React from "react";
import shop_img from "../../assets/images/shop_img.png";
import shop_img2 from "../../assets/images/shop_img2.png";
import img_border from "../../assets/icons/img_border.svg";
import up_arrow from "../../assets/icons/up_arrow.svg";

const Shop = () => {
  return (
    <section
      className=" relative mt-[100px] flex items-start 
     justify-between border-t-[1.5px] border-[#0B0B0B] pt-3"
    >
      <article className="basis-[20%]">
        <div className="mt-10   w-[200px] text-[40px]/[40px] font-[500] uppercase">
          <p className="">
            ch<em className="font-[400]">o</em>
            <em className="font-[400]">o</em>se
          </p>
          <p className="text-right">
            y<em className="font-[400]">o</em>ur
          </p>
          <p>
            <em className="font-[400]">o</em>wn s
            <em className="font-[400]">i</em>n
          </p>
        </div>
        <div className="mt-10 w-[320px] text-[12px]/[15.5px] uppercase">
          stylish and versatile clothing pieces that are designed to GIVE MORAL
          AND MEAINING. ALL FASHION PERKS INCLUDING COLLABS WITH BRANDS THAT
          SERVE THE SAME PURPOSE.
        </div>
        <div className="absolute bottom-0 w-[24.5%] ">
          <div className="ml-[auto] flex h-[32px] w-[115px] cursor-pointer items-center justify-center gap-2 border-[1.5px] border-[#000000] uppercase">
            <p className="text-[12px]/[12px] font-[500]">shop now</p>
            <img src={up_arrow} alt="up_arrow" />
          </div>
        </div>
      </article>
      <article className="flex basis-[72%] items-start justify-between">
        <article className="relative h-[632px] w-[470px] ">
          <div className="mt-[20px] flex h-[614px] w-[458px] items-center justify-center">
            <img
              src={shop_img}
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
        <article className="">
          <div className="mt-10 h-[415px] w-[433px]">
            <img
              src={shop_img2}
              alt="shop_img2"
              className="h-[100%] w-[100%]"
            />
          </div>
        </article>
      </article>
    </section>
  );
};

export default Shop;
