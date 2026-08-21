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
    alt: "Siemens PLC industrial automation product",
    description:
      "Reliable Siemens PLC solutions for industrial control, automation and efficient machine operations.",
    link: "https://mall.industry.siemens.com/",
  },
  {
    title: "HMI Panels",
    category: "Industrial Automation",
    image: hmi,
    alt: "Siemens HMI panel for industrial automation",
    description:
      "Siemens HMI panels for efficient machine monitoring, visualization and industrial process control.",
    link: "https://mall.industry.siemens.com/",
  },
  {
    title: "AC Drives",
    category: "Industrial Automation",
    image: drive,
    alt: "Siemens AC drive for industrial automation",
    description:
      "High-performance Siemens AC drives for reliable motor control, speed regulation and industrial applications.",
    link: "https://mall.industry.siemens.com/",
  },
  {
    title: "PLC Panels",
    category: "Industrial Automation",
    image: panel,
    alt: "Industrial PLC control panel for automation systems",
    description:
      "Industrial PLC panels designed for dependable control, automation and efficient machine operations.",
    link: "https://mall.industry.siemens.com/",
  },
  {
    title: "V90 Servo",
    category: "Industrial Automation",
    image: servo,
    alt: "Siemens V90 servo drive for industrial automation",
    description:
      "Siemens V90 servo solutions for precise motion control and demanding industrial automation applications.",
    link: "https://mall.industry.siemens.com/",
  },
  {
    title: "ET200 Modules",
    category: "Industrial Automation",
    image: et200,
    alt: "Siemens ET200 modules for industrial automation",
    description:
      "Siemens ET200 modules for flexible industrial I/O, machine control and automation system integration.",
    link: "https://mall.industry.siemens.com/",
  },
];

export default function ProductsSection() {
  return (
    <section
      className="py-24 bg-[#F7FAFC] overflow-hidden"
      aria-label="VS Enterprises Industrial Automation Products"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">

          <div>

            <span className="uppercase tracking-[4px] text-cyan-600 font-semibold text-sm">
              OUR PRODUCTS
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-black text-[#07192E] leading-tight">
              Siemens & Delta
              <br />
              Industrial Automation Products
            </h2>

          </div>

          <p className="max-w-xl mt-6 lg:mt-0 text-gray-600 leading-8">
            Explore our range of industrial automation products and solutions,
            including Siemens PLCs, HMI panels, AC drives, servo systems,
            PLC panels and ET200 modules designed for reliability,
            precision and efficient industrial operations.
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
                      alt={product.alt}
                      loading="lazy"
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
                        {product.description}
                      </p>

                      <button
                        type="button"
                        onClick={() =>
                          window.open(
                            product.link,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        aria-label={`Explore ${product.title}`}
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
                        <FaArrowRight aria-hidden="true" />
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