import React from "react";
import footer_logo from "../assets/icons/footer_logo.svg"
import footer_img from "../assets/images/footer_img.png";
import footer_icon from "../assets/icons/footer_icon.svg";
import facebook from "../assets/icons/facebook.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Reddit from "../assets/icons/Reddit.svg";
import Twitter from "../assets/icons/Twitter.svg";



const Footer = () => {
  return (
    <div className="grid grid-cols-4 max-lg:grid-cols-2 border-[#0B0B0B] border-t-[1.5px] mt-10">
      <div className="uppercase border-b-[1.5px] border-[#0B0B0B]">
        <p className="w-[512px] font-[600] text-[20px]/[32px] mt-2 ml-3  max-lg:w-[70vw] ">
          /subsricb<em className="font-[400]" >e</em > to our n<em className="font-[400]" >e</em >wslett<em className="font-[400]" >e</em >r & be th
          <em className="font-[400]" >e</em > first to he<em className="font-[400]" >a</em >r ab<em className="font-[400]" >o</em >ut new pr<em className="font-[400]" >o</em >ducts
          & <em className="font-[400]" >e</em >vents
        </p>
      </div>
      <div className="border-b-[1.5px] border-[#0B0B0B]"></div>

      <div className="border-b-[1.5px] border-l-[1.5px] border-[#0B0B0B] relative max-lg:border-l-[0px]">
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL ADDRESS"
          className="w-full absolute bottom-[10px] outline-0 font-[600] text-[12px]/[16px] text-[#3C3C3C] px-5 bg-[url('./assets/images/bg_img.png')]"
        />
      </div>
      <div className="border-b-[1.5px] border-l-[1.5px] border-[#0B0B0B] h-[96px] uppercase relative pl-5">
        <div className="absolute bottom-[5px] flex items-center gap-2 cursor-pointer">
          <p className="font-[600] text-[12px]/[16px] text-[#0B0B0B] ">
            agree & subscribe
          </p>
          <img src={footer_icon} alt="footer_icon" />
        </div>
      </div>
      {/* down footer seciton */}
      <div className="border-r-[1.5px] border-[#0B0B0B]  h-[392px] pt-7 pr-4 pl-3 border-b-[1.5px] ">
        <div className="w-[305px] h-[348px] max-lg:w-[100%] max-lg:h-[97%] ">
        <img
          src={footer_img}
          alt="footer_img"
          className="w-[100%] h-[100%]  object-cover object-top  "
        />
        </div>
    
      </div>
      <div className="h-[392px] relative border-b-[1.5px] border-[#0B0B0B]">
    <img src={footer_logo} alt="footer_logo" className="ml-5 absolute top-[30px] cursor-pointer" />
          <p className="w-[256px] ml-5 absolute top-[30%] font-[500] text-[12px]/[15.5px] text-[#0B0B0B] uppercase max-lg:w-[100%]">
            AISI offers a carefully curated collection of stylish and versatile
            clothing pieces that are designed to elevate everyday looks. From
            comfortable essentials to trendy statement pieces, Aisi aims to
            empower individuals to express their unique sense of style with
            confidence.
          </p>
          <div className="flex items-center gap-5 absolute bottom-[14px] ml-5">
            <img src={facebook} alt="facebook" className="cursor-pointer" />
            <img src={Instagram} alt="Instagram" className="cursor-pointer" />
            <img src={Reddit} alt="Reddit" className="cursor-pointer" />
            <img src={Twitter} alt="Twitter" className="cursor-pointer" />
          </div>
     
      </div>

      <div className="uppercase border-l-[1.5px] border-b-[1.5px] border-[#0B0B0B] h-[392px] relative max-lg:border-l-[0px] ">
        <p className="font-[400] text-[12px]/[15.5px] text-[#0b0b0b77] ml-5 absolute top-[30%]">
          <em>/ site navigation</em>
        </p>
        <ul className="list-none font-[600] text-[16px] text-[#0B0B0B] absolute bottom-[14px] ml-5">
          <li className="my-2 cursor-pointer">homepage</li>
          <li className="my-2 cursor-pointer">shop</li>
          <li className="my-2 cursor-pointer">collections</li>
          <li className="my-2 cursor-pointer">homepage</li>
          <li className="cursor-pointer">contact</li>
        </ul>
      </div>
      <div className="uppercase border-l-[1.5px] border-[#0B0B0B] border-b-[1.5px] h-[392px] relative">
        <p className="font-[400] text-[12px]/[15.5px] text-[#0B0B0B] ml-5 absolute top-[30%]">
          <em>/ customer care</em>
        </p>
        <ul className="list-none font-[600] text-[16px] text-[#0B0B0B] absolute bottom-[14px] ml-5">
          <li className="my-2 cursor-pointer">shipping & payment</li>
          <li className="my-2 cursor-pointer">refund & return policy</li>
          <li className="cursor-pointer">care instructions</li>
        </ul>
      </div>
      <div className="my-8 ml-5 uppercase font-[600] text-[12px]/[12px] text-[#0B0B0B]">coyright 2023, aisi right reserved </div>
      <div className="max-lg:hidden"></div>
      <div className="my-8 ml-5 uppercase font-[600] text-[12px]/[12px] text-[#0B0B0B]">[ terms and conditions ]</div>
      <div className="my-8 uppercase text-right font-[600] text-[12px]/[12px] text-[#0B0B0B]">[ privacy ]</div>
    </div>
  );
};

export default Footer;
