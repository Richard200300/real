import React from "react";
import logo_white from "../../assets/icons/logo_white.svg";
const Membership = () => {
  return (
    <section className=" mt-[100px] flex justify-between border-t-[1.5px] border-[#0B0B0B] pt-14">
      <div className="w-[264px] text-[40px]/[40px] font-[500] uppercase">
        <p>
          <span className="font-[400]">/</span>aisi m
          <em className="font-[400]">e</em>mb<em className="font-[400]">e</em>
          rship
        </p>
      </div>
      <article className="relative flex h-[296px] basis-[75%] items-start justify-start bg-[#A67700] p-5">
        <article className="basis-[50%]">
          <div className="w-[221px] text-[40px]/[40px] font-[600] uppercase text-[#FFFEF5]">
            <p>
              Bec<em className="font-[400]">o</em>me a m
              <em className="font-[400]">e</em>mb
              <em className="font-[400]">e</em>r
            </p>
          </div>
          <div
            className="absolute bottom-10
flex gap-5 text-[16px]/[24px] font-[500] uppercase text-[#0B0B0B]"
          >
            <p className="flex h-[48px] w-[190px] cursor-pointer items-center justify-center bg-[#FFFEF5] ">
              Join us
            </p>
            <p className="flex h-[48px] w-[190px] cursor-pointer items-center justify-center bg-[#FFFEF5]">
              sign in
            </p>
          </div>
        </article>
        <div className="basis-[50%]">
          <img src={logo_white} alt="logo_white" />
        </div>
      </article>
    </section>
  );
};

export default Membership;
