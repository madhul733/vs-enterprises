import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#031220] text-white">

      {/* Top Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black tracking-wide">
              VS ENTERPRISES
            </h2>

            <div className="w-16 h-1 bg-cyan-500 rounded-full mt-5 mb-6"></div>

            <p className="text-gray-400 leading-8 text-[15px]">

              VS Enterprises is a trusted supplier of Industrial
              Automation Solutions specializing in Siemens PLCs,
              HMIs, AC Drives, Servo Systems and complete
              automation products backed by quality service
              and technical expertise.

            </p>

            {/* Social */}

            <div className="flex gap-4 mt-8">

              <a
                href="/"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="/"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="/"
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-600 hover:border-cyan-600 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-2xl font-bold">
              Quick Links
            </h3>

            <div className="w-12 h-1 bg-cyan-500 rounded-full mt-4 mb-6"></div>

            <ul className="space-y-4">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-2xl font-bold">
              Our Products
            </h3>

            <div className="w-12 h-1 bg-cyan-500 rounded-full mt-4 mb-6"></div>

            <ul className="space-y-4 text-gray-400">

              <li>Siemens PLC</li>

              <li>HMI Panels</li>

              <li>AC Drives</li>

              <li>Servo Drives</li>

              <li>Power Supplies</li>

              <li>Industrial Automation</li>

            </ul>

          </div>

               {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold">
              Contact Info
            </h3>

            <div className="w-12 h-1 bg-cyan-500 rounded-full mt-4 mb-6"></div>

            <div className="space-y-5">

              <div>

                <h5 className="text-white font-semibold">
                  Office
                </h5>

                <p className="text-gray-400 mt-2 leading-7">
                  Ludhiana,
                  <br />
                  Punjab, India
                </p>

              </div>

              <div>

                <h5 className="text-white font-semibold">
                  Phone
                </h5>

                <a
                  href="tel:+917696016654"
                  className="block mt-2 text-gray-400 hover:text-cyan-400 transition"
                >
                  +91 76960 16654
                </a>

              </div>

              <div>

                <h5 className="text-white font-semibold">
                  Email
                </h5>

                <a
                  href="mailto:SaurabhSharma825@yahoo.com"
                  className="block mt-2 text-gray-400 hover:text-cyan-400 transition"
                >
               SaurabhSharma825@yahoo.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">

            © {new Date().getFullYear()} VS Enterprises. All Rights Reserved.

          </p>

          <p className="text-gray-500 text-sm text-center">

            Designed & Developed by
            <span className="text-cyan-400 ml-1">
              VS Enterprises
            </span>

          </p>

        </div>

      </div>

    </footer>
  );
}