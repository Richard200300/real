import React from 'react'
import left from "../assets/icons/left.svg"
import right from "../assets/icons/right.svg"
const Banner = () => {
    return (
        <section className='global bg-[#17A500] h-[48px] flex justify-center mt-5'>
            <div className="flex flex-col justify-center items-center text-[11px]/[16.5px] font-[500] text-[#FFFEF5] w-[289px] relative">
                <div className="bg-[#17A500]">
                    Members: Free Shipping On Orders above 50,000 NGN
                </div>
                <p className='bg-[#17A500] underline cursor-pointer'>Join Now</p>
                <img src={left} alt="left" className='absolute left-[-30px] cursor-pointer' />
                <img src={right} alt="left" className='absolute right-[-30px] cursor-pointer' />

            </div>

        </section>
    )
}

export default Banner;
