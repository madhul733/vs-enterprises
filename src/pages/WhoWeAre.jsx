import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import companyImg from "../assets/home.png"; // Replace with your image
import { Link } from "react-router-dom";

export default function WhoWeAre() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-cyan-600 uppercase tracking-[3px] text-sm font-semibold mb-4">
              Who We Are
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Empowering Industries Through Smart Automation
            </h2>

            <div className="w-20 h-1 bg-cyan-500 rounded-full mt-6 mb-8"></div>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              VS Enterprises is a trusted supplier of industrial automation
              solutions, helping industries improve productivity, efficiency,
              and operational reliability. Since 2014, we have been delivering
              high-quality automation products from globally recognized brands
              such as Siemens and Delta.
            </p>

            <p className="text-gray-600 text-lg leading-8">
              Our expertise includes PLCs, HMIs, AC Drives, Servo Systems,
              Power Supplies, and complete industrial automation solutions.
              With a commitment to quality, technical excellence, and customer
              satisfaction, we strive to build long-term partnerships through
              dependable products and exceptional service.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <Link to="/products"
            className="h-14 px-8 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold flex items-center gap-3">

              Explore Products

              <FaArrowRight />

            </Link>

 <Link
  to="/contact"
  className="border border-slate-300 hover:border-cyan-600 hover:text-cyan-600 transition px-7 py-3 rounded-xl font-semibold text-slate-700 inline-flex items-center justify-center"
>
  Contact Us
</Link>

            </div>

          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={companyImg}
              alt="VS Enterprises"
              className="w-full rounded-3xl shadow-2xl object-cover"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-cyan-600 text-white px-8 py-5 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm mt-1">Years of Experience</p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}