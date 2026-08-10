import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroBg from "../assets/home.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[850px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#021322]/70" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021322] via-[#021322]/85 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center px-6 lg:px-10">

        <div className="max-w-2xl">

          {/* Tag */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md px-5 py-2"
          >

            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>

            <span className="text-cyan-300 uppercase tracking-[3px] text-xs font-semibold">
              Siemens Authorized Partner
            </span>

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .2 }}
            className="mt-8 text-white font-black leading-none"
          >

            <span className="block text-5xl lg:text-7xl">
              Industrial
            </span>

            <span className="block text-5xl lg:text-7xl mt-2">
              Automation
            </span>

            <span className="block text-cyan-400 text-5xl lg:text-7xl mt-2">
              Solutions
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-8 text-lg text-gray-300 leading-9 max-w-xl"
          >
            We deliver world-class Siemens Industrial Automation
            solutions including PLCs, HMIs, AC Drives, Servo
            Systems and complete factory automation for every
            modern industry.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
            className="flex gap-5 mt-10 flex-wrap"
          >

            <Link to="/products"
            className="h-14 px-8 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold flex items-center gap-3">

              Explore Products

              <FaArrowRight />

            </Link>

           <Link
            to="/contact"
            className="border border-slate-300 hover:border-cyan-600 hover:text-cyan-600 transition px-7 py-3 rounded-xl font-semibold text-white inline-flex items-center justify-center"
          >
            Contact Us
          </Link>

          </motion.div>

        </div>

      </div>

 {/* ================= RIGHT SIDE ================= */}

<div className="hidden lg:flex absolute inset-y-0 right-0 w-[48%] items-center justify-center z-20">

  <div className="relative w-[520px] h-[520px]">

    {/* Glow */}

    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[120px]" />

    {/* Circle Border */}

    <div className="absolute inset-10 rounded-full border border-white/10"></div>

    <div className="absolute inset-24 rounded-full border border-cyan-400/20"></div>

    {/* Main Glass Card */}

    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: .5 }}
      className="absolute top-16 right-0 w-72 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-7 shadow-2xl"
    >
      <p className="text-cyan-300 uppercase tracking-[4px] text-xs">
        Industrial Automation
      </p>

      <h3 className="mt-4 text-white text-3xl font-bold leading-tight">
        Smart Factory
        <br />
        Solutions
      </h3>

      <p className="mt-5 text-gray-300 leading-7">
        PLC, HMI, Servo Drives, Motion Control &
        Complete Industrial Automation Systems.
      </p>
    </motion.div>

    {/* Projects Card */}

    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: .8 }}
      className="absolute left-0 bottom-20 w-60 rounded-2xl bg-[#0b243d]/90 backdrop-blur-xl border border-white/10 p-6"
    >
      <h2 className="text-cyan-400 text-5xl font-black">
        500+
      </h2>

      <p className="mt-3 text-gray-300">
        Successful Industrial Projects
      </p>
    </motion.div>

    {/* Support Card */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="absolute right-6 bottom-0 rounded-2xl bg-cyan-500 px-8 py-6 shadow-2xl"
    >
      <h2 className="text-4xl font-black text-white">
        24/7
      </h2>

      <p className="text-white/90 mt-2">
        Technical Support
      </p>
    </motion.div>

    {/* Floating Dots */}

    <div className="absolute top-6 left-28 w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>

    <div className="absolute right-20 top-72 w-2 h-2 rounded-full bg-white"></div>

    <div className="absolute bottom-40 left-44 w-4 h-4 rounded-full bg-cyan-300"></div>

  </div>

</div>

{/* Bottom Gradient */}

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#021322] via-[#021322]/70 to-transparent"></div>

{/* ================= TRUSTED BRANDS ================= */}

<div className="absolute bottom-0 left-0 w-full z-30">

  <div className="bg-[#061a2f]/85 backdrop-blur-xl border-t border-white/10">

    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-7">

      <div className="flex flex-wrap items-center justify-between gap-8">

        <div>
          <p className="text-gray-400 uppercase tracking-[4px] text-xs">
            Trusted Technology Partners
          </p>

          <h3 className="text-white text-xl font-semibold mt-2">
            Delivering World-Class Automation Solutions
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-10 text-white/80 font-semibold text-lg">

          <span className="hover:text-cyan-400 transition">
            SIEMENS
          </span>

          <span className="hover:text-cyan-400 transition">
            DELTA
          </span>

          <span className="hover:text-cyan-400 transition">
            ABB
          </span>

          <span className="hover:text-cyan-400 transition">
            SCHNEIDER
          </span>

        </div>

      </div>

    </div>

  </div>

</div>

{/* ================= SCROLL INDICATOR ================= */}

<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="hidden lg:flex absolute bottom-44 left-1/2 -translate-x-1/2 flex-col items-center z-30"
>

  <span className="text-white/70 uppercase tracking-[4px] text-xs">
    Scroll
  </span>

  <div className="mt-3 h-14 w-[2px] rounded-full bg-gradient-to-b from-cyan-400 to-transparent"></div>

</motion.div>

    </section>
  );
}