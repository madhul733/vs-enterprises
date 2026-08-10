import React from "react";
import { motion } from "framer-motion";

import hero from "../assets/logo.jpg";
import WhoWeAre from "../pages/WhoWeAre";

import proprietor from "../assets/mma.png";
import director from "../assets/boss.png";
import marketing from "../assets/madhul.png";
import sales from "../assets/rajni mam .png";

const team = [
  {
    image: proprietor,
    name: "Vandana Sharma",
    role: "Proprietor",
  },
  {
    image: director,
    name: "Saurabh Sharma",
    role: "Managing Director",
  },
  {
    image: marketing,
    name: "Madhul Sharma",
    role: "Marketing Executive",
  },
  {
    image: sales,
    name: "Rajni Mehra",
    role: "Finance Manager",
  },
];

export default function AboutUs() {
  return (
    <>

      {/* WHO WE ARE */}

      <WhoWeAre />

      {/* TEAM */}

      <section className="py-24 bg-[#F8FBFD]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center">

            <span className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">

              Leadership Team

            </span>

            <h2 className="mt-5 text-5xl font-black text-[#07192E]">

              Meet Our Team

            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-8">

              Our experienced professionals are committed
              to delivering genuine products and exceptional
              customer service.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
            {team.map((member, index) => (

  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="
      bg-white
      rounded-[28px]
      overflow-hidden
      shadow-lg
      hover:shadow-2xl
      transition-all
      duration-300
    "
  >

    {/* Image */}

    <div className="overflow-hidden bg-[#F8FBFD]">

      <img
        src={member.image}
        alt={member.name}
        className="
          w-full
          h-[330px]
          object-cover
          object-top
          transition-all
          duration-500
          hover:scale-105
        "
      />

    </div>

    {/* Content */}

    <div className="px-6 py-7 text-center">

      <h3 className="text-[23px] font-bold text-[#07192E]">

        {member.name}

      </h3>

      <div className="w-14 h-[3px] bg-cyan-500 rounded-full mx-auto mt-3"></div>

      <p className="mt-4 text-cyan-600 font-semibold text-[15px]">

        {member.role}

      </p>

      <p className="mt-4 text-gray-600 text-[14px] leading-7">

        Dedicated to delivering reliable industrial
        automation solutions with professionalism,
        innovation and customer satisfaction.

      </p>

    </div>

  </motion.div>

))}
          </div>

        </div>

      </section>
      {/* VISION & MISSION */}

{/* VISION & MISSION */}

<section className="py-24 bg-gradient-to-b from-white to-[#F8FBFD]">

  <div className="max-w-7xl mx-auto px-6 lg:px-8">

    {/* Heading */}

    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 rounded-full bg-cyan-50 text-cyan-600 uppercase tracking-[3px] text-sm font-semibold">
        Vision & Mission
      </span>

      <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#07192E]">

        Driving Innovation,
        <br />
        Building Industrial Excellence

      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">

        Our vision and mission reflect our commitment to delivering
        world-class industrial automation solutions while building
        lasting relationships through quality, innovation and trust.

      </p>

    </div>

    {/* Cards */}

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Vision */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
        relative
        bg-white
        rounded-[32px]
        p-10
        shadow-lg
        hover:shadow-[0_25px_60px_rgba(0,0,0,.12)]
        border
        border-gray-100
        overflow-hidden
        "
      >

        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>

        <div className="w-20 h-20 rounded-3xl bg-cyan-50 flex items-center justify-center text-4xl">

          👁️

        </div>

        <h3 className="mt-8 text-3xl font-bold text-[#07192E]">

          Our Vision

        </h3>

        <p className="mt-6 text-gray-600 leading-8 text-lg">

          To become one of India's most trusted industrial automation
          partners by delivering innovative technologies, genuine
          Siemens products and sustainable automation solutions that
          empower industries to achieve operational excellence.

        </p>

      </motion.div>

      {/* Mission */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className="
        relative
        bg-[#07192E]
        rounded-[32px]
        p-10
        shadow-lg
        hover:shadow-[0_25px_60px_rgba(0,0,0,.18)]
        overflow-hidden
        "
      >

        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400"></div>

        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-4xl">

          🎯

        </div>

        <h3 className="mt-8 text-3xl font-bold text-white">

          Our Mission

        </h3>

        <p className="mt-6 text-gray-300 leading-8 text-lg">

          To deliver genuine industrial automation products, expert
          engineering support and dependable customer service while
          helping industries improve productivity, efficiency and
          long-term business growth through reliable automation
          solutions.

        </p>

      </motion.div>

    </div>

  </div>

</section>

    </>
  );
}