import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

// Images
import plc from "../assets/logo.jpg";
import hmi from "../assets/s7200.jpg";
import drive from "../assets/s71200.jpg";
import panel from "../assets/plc panels.jpg";
import servo from "../assets/v90.jpg";
import et200 from "../assets/et200.jpg";

const products = [
  {
    title: "Siemens PLC",
    category: "Industrial Automation",
    image: plc,
     link: "https://mall.industry.siemens.com/",
  },
  {
    title: "HMI Panels",
    category: "Industrial Automation",
    image: hmi,
     link: "https://mall.industry.siemens.com/",
  },
  {
    title: "AC Drives",
    category: "Industrial Automation",
    image: drive,
     link: "https://mall.industry.siemens.com/",
  },
  {
    title: "PLC Panels",
    category: "Industrial Automation",
    image: panel,
     link: "https://mall.industry.siemens.com/",
  },
  {
    title: "V90 Servo",
    category: "Industrial Automation",
    image: servo,
     link: "https://mall.industry.siemens.com/",
  },
  {
    title: "ET200 Modules",
    category: "Industrial Automation",
    image: et200,
     link: "https://mall.industry.siemens.com/",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-[#F7FAFC] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">

          <div>

            <span className="uppercase tracking-[4px] text-cyan-600 font-semibold text-sm">

              OUR PRODUCTS

            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#07192E] leading-tight">

              Industrial Automation
              <br />
              Products

            </h2>

          </div>

          <p className="max-w-xl mt-6 lg:mt-0 text-gray-600 leading-8">

            Explore our complete range of Siemens
            Industrial Automation products designed
            for reliability, precision and efficiency.

          </p>

        </div>

        {/* Swiper */}

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >

         {products.map((product, index) => (

  <SwiperSlide key={index}>

    <div className="group cursor-pointer">

      <div
        className="
        relative
        h-[450px]
        overflow-hidden
        rounded-[30px]
        bg-white
        border
        border-slate-200
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-500
        hover:shadow-[0_25px_60px_rgba(0,0,0,.18)]
        "
      >

        {/* Category Badge */}

        <div className="absolute top-5 left-5 z-20">

          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#07192E] text-xs font-semibold shadow-md">

            {product.category}

          </span>

        </div>

        {/* Image */}

        <div className="w-full h-full overflow-hidden">

          <img
            src={product.image}
            alt={product.title}
            className="
            w-full
            h-full
            object-contain
            p-10
            transition-all
            duration-700
            group-hover:scale-110
            "
          />

        </div>

        {/* Hover Overlay */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#041324]
          via-[#041324]/60
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          "
        >

          <div className="absolute bottom-8 left-8 right-8">

            <h3 className="text-white text-3xl font-bold">

              {product.title}

            </h3>

            <p className="mt-4 text-gray-200 leading-7">

              High-performance Siemens industrial
              automation solution designed for
              reliability and precision.

            </p>

           <button
  onClick={() => window.open(product.link, "_blank")}
  className="
    mt-8
    flex
    items-center
    gap-3
    text-cyan-600 
    font-semibold
    transition-all
    duration-300
    hover:gap-5
  "
>
  Explore Product
  <FaArrowRight />
</button>

            <div className="mt-6 w-0 h-[3px] bg-cyan-400 group-hover:w-20 transition-all duration-500"></div>

          </div>

        </div>

      </div>

    </div>

  </SwiperSlide>

))}

        </Swiper>
               

        {/* View All Button */}


      </div>

    </section>

  );
}