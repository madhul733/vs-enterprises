import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaChevronDown,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import products from "../data/products.json";

import logo from "../assets/vs logo.png";
import siemensLogo from "../assets/siemens logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);

  // ================= SEARCH =================

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const searchResults =
    searchText.trim()
      ? products
          .filter((product) => {
            const search = searchText.toLowerCase();

            return (
              product.name?.toLowerCase().includes(search) ||
              product.mlfb?.toLowerCase().includes(search)
            );
          })
          .slice(0, 8)
      : [];

  return (
    <>
      {/* ================= TOP BAR ================= */}

      <div className="hidden xl:block bg-[#07192E] text-white">

        <div className="max-w-[1380px] mx-auto h-[54px] px-8 grid grid-cols-2">

          {/* LEFT */}

          <div className="flex items-center gap-8">

            <a
              href="tel:+917696016654"
              className="flex items-center gap-2 text-[15px] hover:text-cyan-300 transition"
            >
              <FaPhoneAlt className="text-[13px]" />
              +91 76960 16654
            </a>

            <span className="h-5 w-px bg-gray-500"></span>

            <a
              href="mailto:Saurabh_sharma825@yahoo.com"
              className="flex items-center gap-2 text-[15px] hover:text-cyan-300 transition"
            >
              <FaEnvelope className="text-[13px]" />
              Saurabh_sharma825@yahoo.com
            </a>

          </div>


          {/* RIGHT */}

          <div className="flex items-center justify-end gap-5">

            <span className="text-[13px] tracking-wide font-medium">
              AUTHORIZED CHANNEL PARTNER
            </span>

            <img
              src={siemensLogo}
              alt="Siemens"
              className="h-8 object-contain"
            />

          </div>

        </div>

      </div>


      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50">

        <div className="bg-white shadow-[0_15px_45px_rgba(0,0,0,.08)] rounded-b-[28px]">

          <div className="max-w-[1380px] mx-auto px-8">

            <div
              className="
              grid
              grid-cols-[380px_1fr_280px]
              items-center
              h-[96px]
              "
            >

              {/* ================= LOGO ================= */}

              <div className="h-[96px] overflow-hidden flex items-center gap-7">

                <img
                  src={logo}
                  alt="Logo"
                  className="h-[140px] w-[120px] object-contain -translate-y-1"
                />

                <div className="-ml-6">

                  <h2 className="text-[22px] font-black leading-none text-[#07192E]">
                    VS ENTERPRISES
                  </h2>

                  <p className="mt-2 text-[11px] uppercase tracking-[1.5px] text-gray-500 whitespace-nowrap">
                    Industrial Automation Solutions
                  </p>

                </div>

              </div>


              {/* ================= CENTER MENU ================= */}

              <nav
                className="
                hidden
                xl:flex
                justify-center
                items-center
                gap-10
                "
              >

                {/* HOME */}

                <Link
                  to="/home"
                  className="
                    relative
                    text-[17px]
                    font-semibold
                    text-[#009999]
                    after:absolute
                    after:left-0
                    after:-bottom-[12px]
                    after:w-full
                    after:h-[3px]
                    after:bg-[#009999]
                    after:rounded-full
                  "
                >
                  Home
                </Link>


                {/* ABOUT */}

                <Link
                  to="/about-us"
                  className="font-semibold hover:text-[#009999] transition"
                >
                  About
                </Link>


                {/* PRODUCTS */}

                <div
                  className="relative"
                  onMouseEnter={() => setProductOpen(true)}
                  onMouseLeave={() => setProductOpen(false)}
                >

                  <button className="flex items-center gap-2 font-semibold hover:text-[#009999]">

                    Products

                    <FaChevronDown className="text-xs" />

                  </button>


                  {productOpen && (
                    <div className="absolute top-full left-0 -mt-1 w-[340px] bg-white rounded-2xl border border-gray-100 shadow-[0_18px_45px_rgba(0,0,0,.12)] overflow-hidden z-50">

                      {[
                        "SIMATIC S7-1200 PLC",
                        "SIMATIC S7-1500 PLC",
                        "LOGO! Controllers",
                        "HMI Comfort Panels",
                        "SINAMICS V20 Drives",
                        "SINAMICS G120 Drives",
                      ].map((item) => (

                        <a
                          key={item}
                          href="/products"
                          className="block px-8 py-4 text-[15px] text-[#07192E] hover:bg-[#F5FCFC] hover:text-[#009999] transition"
                        >
                          {item}
                        </a>

                      ))}

                    </div>
                  )}

                </div>


                {/* SOLUTIONS */}

                <Link
                  to="/solutions"
                  className="font-semibold hover:text-[#009999] transition"
                >
                  Solutions
                </Link>


                {/* CAREER */}

                <a
                  href="/career"
                  className="font-semibold hover:text-[#009999] transition"
                >
                  Career
                </a>


                {/* CONTACT */}

                <a
                  href="/contact"
                  className="font-semibold hover:text-[#009999] transition"
                >
                  Contact
                </a>

              </nav>


              {/* ================= RIGHT ACTIONS ================= */}

              <div className="hidden xl:flex items-center justify-end gap-6 pr-2">

                {/* ================= SEARCH ================= */}

                <div className="relative">

                  <button
                    onClick={() => {
                      setSearchOpen(!searchOpen);
                      setSearchText("");
                    }}
                    className="w-[52px] h-[52px]
                    rounded-full
                    border border-gray-200
                    flex items-center justify-center
                    hover:border-[#009999]
                    hover:text-[#009999]
                    transition"
                  >
                    <FaSearch />
                  </button>


                  {/* SEARCH BOX */}

                  {searchOpen && (
                    <div
                      className="
                      absolute
                      right-0
                      top-[62px]
                      w-[400px]
                      bg-white
                      rounded-2xl
                      shadow-2xl
                      border border-gray-100
                      p-4
                      z-[100]
                      "
                    >

                      <input
                        autoFocus
                        type="text"
                        value={searchText}
                        onChange={(e) =>
                          setSearchText(e.target.value)
                        }
                        placeholder="Search products or MLFB..."
                        className="
                        w-full
                        h-12
                        border
                        border-gray-200
                        rounded-xl
                        px-4
                        outline-none
                        focus:border-[#009999]
                        "
                      />


                      {/* SEARCH RESULTS */}

                      {searchText.trim() !== "" && (

                        <div className="mt-3 max-h-[350px] overflow-y-auto">

                          {searchResults.length > 0 ? (

                            searchResults.map((product, index) => (

                              <a
                                key={`${product.mlfb}-${index}`}
                                href={`https://www.google.com/search?q=${encodeURIComponent(
                                  `${product.name} ${product.mlfb || ""} Siemens`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                  setSearchOpen(false);
                                  setSearchText("");
                                }}
                                className="
                                block
                                px-4
                                py-3
                                rounded-xl
                                hover:bg-gray-50
                                border-b
                                border-gray-100
                                last:border-0
                                "
                              >

                                <p className="text-sm font-semibold text-[#07192E]">
                                  {product.name}
                                </p>

                                {product.mlfb && (
                                  <p className="text-xs text-gray-500 mt-1">
                                    MLFB: {product.mlfb}
                                  </p>
                                )}

                              </a>

                            ))

                          ) : (

                            <p className="text-center text-sm text-gray-500 py-5">
                              No products found
                            </p>

                          )}

                        </div>

                      )}

                    </div>
                  )}

                </div>


                {/* GET QUOTE */}

                <Link
                  to="/get-quote"
                  className="h-[54px]
                  px-8
                  rounded-2xl
                  bg-[#009999]
                  hover:bg-[#008888]
                  text-white
                  font-semibold
                  flex items-center gap-3
                  transition"
                >

                  Get Quote

                  <FaArrowRight className="text-sm" />

                </Link>

              </div>


              {/* ================= MOBILE BUTTON ================= */}

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="xl:hidden justify-self-end text-[30px] text-[#07192E]"
              >
                {mobileOpen ? <FaTimes /> : <FaBars />}
              </button>

            </div>

          </div>

        </div>


        {/* ================= MOBILE MENU ================= */}

        {mobileOpen && (

          <div className="xl:hidden bg-white border-t border-gray-100 shadow-2xl">

            <div className="px-6 py-7">

              <div className="flex items-center gap-4 mb-8">

                <img
                  src={logo}
                  alt="VS Enterprises"
                  className="h-14 w-auto"
                />

                <div>

                  <h2 className="text-xl font-black text-[#07192E]">
                    VS ENTERPRISES
                  </h2>

                  <p className="text-[10px] uppercase tracking-[2px] text-gray-500">
                    Industrial Automation Solutions
                  </p>

                </div>

              </div>


              <div className="flex justify-center mb-6">

                <img
                  src={siemensLogo}
                  alt="Siemens"
                  className="h-8 object-contain"
                />

              </div>


              <nav className="flex flex-col">

                <a
                  href="/"
                  className="py-4 border-b border-gray-100 font-semibold"
                >
                  Home
                </a>

                <a
                  href="/about"
                  className="py-4 border-b border-gray-100"
                >
                  About
                </a>

                <a
                  href="/products"
                  className="py-4 border-b border-gray-100"
                >
                  Products
                </a>


                <a
                  href="/contact"
                  className="py-4 border-b border-gray-100"
                >
                  Contact
                </a>

              </nav>


              <button
                className="
                mt-8
                w-full
                h-14
                rounded-xl
                bg-[#009999]
                hover:bg-[#008585]
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                transition
                "
              >

                Get Quote

                <FaArrowRight />

              </button>

            </div>

          </div>

        )}

      </header>

    </>
  );
}