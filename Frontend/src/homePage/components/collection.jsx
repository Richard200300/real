import React from "react";
import collection_img from "../../assets/images/collection_img.png";
import img_border from "../../assets/icons/img_border.svg";
import collection_arrow from "../../assets/icons/collection_arrow.svg";
import collection_small_arrow from "../../assets/icons/collection_small_arrow.svg";
import collection_ball from "../../assets/icons/collection_ball.svg";
import collection_img_2 from "../../assets/images/collection_img_2.png";
import left_button from "../../assets/icons/left_button.svg";
import right_button from "../../assets/icons/right_button.svg";


const Collection = () => {
  return (
    <section className="flex items-start  border-b-[1.5px] border-[#0B0B0B]">
      <section className="basis-[47%] border-r-[1.5px] border-[#0B0B0B] pb-[60px] ">
        <article className="mt-7 w-[384px] text-[48px]/[48px] uppercase   text-[#0B0B0B]">
          <p>
            /n<em>e</em>w 2<em>0</em>23
          </p>
          <p className="text-right">
            s<em>u</em>mm<em>e</em>r{" "}
          </p>
          <p>
            c<em>o</em>llection{" "}
          </p>
        </article>
        <article>
          <p className="ml-[auto] mr-[20px] mt-7 w-[403px] text-[12px]/[13px] font-[600]">
            Asis offers a carefully curated collection of stylish and versatile
            clothing pieces that are designed to elevate everyday looks. From
            comfortable essentials to trendy statement pieces, Aisi aims to
            empower individuals to express their unique sense of style with
            confidence.
          </p>
        </article>
        <article className="relative m-[auto]  mt-7 h-[292px] w-[489px]">
          <div className="flex h-[260px] w-[489px] items-center justify-center">
            <img
              src={collection_img}
              alt="collection_img"
              className=" mt-[10px] h-[95%] w-[95%] object-cover object-top"
            />
          </div>
          <img
            src={img_border}
            alt="img_border"
            className="absolute bottom-[27px] right-[0px]"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute top-[5px] rotate-[180deg]"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute right-[0px] top-[5px] rotate-[270deg]"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute bottom-[27px] rotate-[90deg]"
          />
          <p className="absolute bottom-0 text-[12px]/[12px] font-[600] uppercase">
            <em>[asis x nike]</em>
          </p>
        </article>
        <article className="ml-[auto] mr-[20px] flex w-[171px]  cursor-pointer items-center justify-center gap-2 border-[1.5px] border-[#0B0B0B] py-[8px]">
          <p className="text-[16px]/[20px] font-[500] uppercase text-[#0B0B0B]">
            shop now
          </p>
          <img src={collection_arrow} alt="collection_arrow" />
        </article>
      </section>
      <section className="flex basis-[53%] items-center justify-between  ">
        <div className="">
          <section className="w-[319px] border-b-[1.5px]  border-[#0B0B0B]  px-9 py-7">
            <div className="w-[246px]">
              <p className="w-[89%] border-b-[1.5px] border-[#0B0B0B] pb-1 text-[12px]/[18px] font-[600]">
                <span className="mr-[2px]">/</span> ASIS HIGH FASHION ALTE
                HOODIE
              </p>
              <p className="py-2  text-[10px]/[10.5px] ">
                Introducing the Aisi High Fashion Alte Hoodie: A striking blend
                of contemporary style and bold expression. Crafted with
                meticulous a...
              </p>
              <div className=" flex justify-between ">
                <div className="flex items-center gap-1">
                  <p className="text-[7px]/[7px] font-[500]">- Released on</p>
                  <img src={collection_ball} alt="collection_ball" />
                  <p></p>
                  <p className="text-[7px]/[7px] font-[500] text-[#00000080]">
                    <em>13th, Feburary, 2023</em>
                  </p>
                </div>
                <div className="">
                  <img
                    src={collection_small_arrow}
                    alt="collection_small_arrow"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="w-[319px] border-b-[1.5px]  border-[#0B0B0B]  px-9 py-7">
            <div className="w-[246px]">
              <p className="w-[89%] border-b-[1.5px] border-[#0B0B0B] pb-1 text-[12px]/[18px] font-[600]">
                <span className="mr-[2px]">/</span> ASIS HIGH FASHION ALTE
                HOODIE
              </p>
              <p className="py-2  text-[10px]/[10.5px] ">
                Introducing the Aisi High Fashion Alte Hoodie: A striking blend
                of contemporary style and bold expression. Crafted with
                meticulous a...
              </p>
              <div className=" flex justify-between ">
                <div className="flex items-center gap-1">
                  <p className="text-[7px]/[7px] font-[500]">- Released on</p>
                  <img src={collection_ball} alt="collection_ball" />
                  <p></p>
                  <p className="text-[7px]/[7px] font-[500] text-[#00000080]">
                    <em>13th, Feburary, 2023</em>
                  </p>
                </div>
                <div className=""></div>
              </div>
            </div>
          </section>

          <section className="w-[319px] border-b-[1.5px]  border-[#0B0B0B]  px-9 py-7">
            <div className="w-[246px]">
              <p className="w-[89%] border-b-[1.5px] border-[#0B0B0B] pb-1 text-[12px]/[18px] font-[600]">
                <span className="mr-[2px]">/</span> ASIS HIGH FASHION ALTE
                HOODIE
              </p>
              <p className="py-2  text-[10px]/[10.5px] ">
                Introducing the Aisi High Fashion Alte Hoodie: A striking blend
                of contemporary style and bold expression. Crafted with
                meticulous a...
              </p>
              <div className=" flex justify-between ">
                <div className="flex items-center gap-1">
                  <p className="text-[7px]/[7px] font-[500]">- Released on</p>
                  <img src={collection_ball} alt="collection_ball" />
                  <p></p>
                  <p className="text-[7px]/[7px] font-[500] text-[#00000080]">
                    <em>13th, Feburary, 2023</em>
                  </p>
                </div>
                <div className=""></div>
              </div>
            </div>
          </section>
          <section className="w-[319px] px-9  py-7 ">
            <div className="w-[246px]">
              <p className="w-[89%] border-b-[1.5px] border-[#0B0B0B] pb-1 text-[12px]/[18px] font-[600]">
                <span className="mr-[2px]">/</span> ASIS HIGH FASHION ALTE
                HOODIE
              </p>
              <p className="py-2  text-[10px]/[10.5px] ">
                Introducing the Aisi High Fashion Alte Hoodie: A striking blend
                of contemporary style and bold expression. Crafted with
                meticulous a...
              </p>
              <div className=" flex justify-between ">
                <div className="flex items-center gap-1">
                  <p className="text-[7px]/[7px] font-[500]">- Released on</p>
                  <img src={collection_ball} alt="collection_ball" />
                  <p></p>
                  <p className="text-[7px]/[7px] font-[500] text-[#00000080]">
                    <em>13th, Feburary, 2023</em>
                  </p>
                </div>
                <div className=""></div>
              </div>
            </div>
          </section>
        </div>
        <div className="relative bg-slate-600">
          <div className="h-[420px] w-[320px]">
            <img
              src={collection_img_2}
              alt="collection_img_2"
              className="h-[100%] w-[100%] object-cover object-top"
            />
          </div>
          <div className="absolute mt-[20px] flex w-full items-center justify-between">
            <img
              src={left_button}
              alt="left_button"
              className="cursor-pointer"
            />

            <div className="flex items-center gap-2">
              <p className="text-[16px]/[10.5px] font-[500] text-[#000000]">
                1
              </p>
              <div className="h-[2px] w-[78px] rounded-sm bg-[#B0B0B0]"></div>
              <p className="text-[16px]/[10.5px] font-[500] text-[#000000]">
                4
              </p>
            </div>
            <img
              src={right_button}
              alt="right_button"
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Collection;
