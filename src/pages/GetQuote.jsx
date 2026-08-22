import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileUpload,
} from "react-icons/fa";

const products = [
  "Siemens PLC",
  "HMI Panels",
  "AC Drives",
  "Servo Drives",
  "ET200 Modules",
  "PLC Panels",
  "Power Supplies",
  "Other / Complete Solution",
];

export default function GetQuote() {
  // ==========================================
  // FORM STATE
  // ==========================================

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    requiredBy: "Not Decided",
    requirement: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  // ==========================================
  // HANDLE INPUT CHANGE
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // ==========================================
  // SUBMIT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const response = await fetch(
    "https://vs-enterprises-api.onrender.com/api/quotes",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong."
        );
      }

      setMessage(
        "Your quote request has been submitted successfully. Our team will contact you soon."
      );

      // Reset form
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        product: "",
        quantity: "",
        requiredBy: "Not Decided",
        requirement: "",
      });

    } catch (err) {
      console.error("Quote submission error:", err);

      setError(
        err.message ||
          "Unable to submit your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative min-h-[55vh] bg-[#07192E] overflow-hidden flex items-center"
        aria-label="Request a quote for industrial automation products and solutions"
      >

        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-cyan-400/10"></div>

        <div className="absolute top-20 right-24 w-[280px] h-[280px] rounded-full border border-cyan-400/10"></div>

        <div className="absolute -bottom-48 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-24">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <span className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold">
              Get A Quote
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05]">

              Let's Discuss
              <br />

              Your
              <span className="text-cyan-400"> Requirement</span>

            </h1>

            <p className="mt-7 max-w-2xl text-lg md:text-xl text-slate-300 leading-9">

              Tell us what you need and our team will help you
              identify the right Siemens and Delta industrial automation
              products and solution for your application in Ludhiana,
              Punjab and across India.

            </p>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          QUOTE SECTION
      ===================================================== */}

      <section
        className="py-24 lg:py-28 bg-[#F8FBFD]"
        aria-label="Request an industrial automation product quote"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-[35%_65%] bg-white rounded-[35px] shadow-xl overflow-hidden">

            {/* =================================================
                LEFT INFORMATION
            ================================================= */}

            <div className="bg-[#07192E] p-10 lg:p-14 text-white">

              <span className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
                Request A Quote
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight">

                Get The Right
                <br />

                Automation
                <br />

                Solution

              </h2>

              <p className="mt-7 text-slate-300 leading-8">

                Whether you need a Siemens or Delta automation product,
                replacement component or a complete industrial automation
                solution, share your requirement with us.

              </p>


              {/* BENEFITS */}

              <div className="mt-10 space-y-5">

                <div className="flex gap-3">

                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />

                  <span>
                    Genuine industrial automation products
                  </span>

                </div>

                <div className="flex gap-3">

                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />

                  <span>
                    Product selection assistance
                  </span>

                </div>

                <div className="flex gap-3">

                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />

                  <span>
                    Application-focused guidance
                  </span>

                </div>

                <div className="flex gap-3">

                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />

                  <span>
                    Dedicated customer support
                  </span>

                </div>

              </div>


              {/* CONTACT */}

              <div className="mt-12 pt-8 border-t border-white/10 space-y-5">

                <a
                  href="tel:+917696799906"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
                >

                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>

                  <span>
                    Call Our Team
                  </span>

                </a>

                <a
                  href="mailto:Saurabh_sharma825@yahoo.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition"
                >

                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <span>
                    Email Us
                  </span>

                </a>


                <div className="flex items-center gap-4 text-slate-300">

                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>

                  <span>
                    Ludhiana, Punjab
                  </span>

                </div>

              </div>

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <div className="p-8 lg:p-14">

              <div className="mb-10">

                <h2 className="text-3xl font-black text-[#07192E]">
                  Tell Us About Your Requirement
                </h2>

                <p className="mt-3 text-gray-600">
                  Please provide a few details so our team can
                  understand your requirement better.
                </p>

              </div>


              <form
                onSubmit={handleSubmit}
                className="space-y-7"
                aria-label="Industrial automation quote request form"
              >

                {/* NAME + COMPANY */}

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block text-sm font-semibold text-[#07192E] mb-2">
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="fullName"
                      autoComplete="name"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="
                      w-full
                      h-14
                      rounded-xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-cyan-500
                      focus:ring-2
                      focus:ring-cyan-100
                      transition
                      "
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-[#07192E] mb-2">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      autoComplete="organization"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="
                      w-full
                      h-14
                      rounded-xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-cyan-500
                      focus:ring-2
                      focus:ring-cyan-100
                      transition
                      "
                    />

                  </div>

                </div>


                {/* EMAIL + PHONE */}

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block text-sm font-semibold text-[#07192E] mb-2">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="
                      w-full
                      h-14
                      rounded-xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-cyan-500
                      focus:ring-2
                      focus:ring-cyan-100
                      transition
                      "
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-[#07192E] mb-2">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="
                      w-full
                      h-14
                      rounded-xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-cyan-500
                      focus:ring-2
                      focus:ring-cyan-100
                      transition
                      "
                    />

                  </div>

                </div>


                {/* PRODUCT */}

                <div>

                  <label className="block text-sm font-semibold text-[#07192E] mb-2">
                    Product / Solution Required *
                  </label>

                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="
                    w-full
                    h-14
                    rounded-xl
                    border
                    border-gray-200
                    px-5
                    bg-white
                    outline-none
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-100
                    transition
                    "
                  >

                    <option value="">
                      Select a product or solution
                    </option>

                    {products.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}

                  </select>

                </div>


                {/* QUANTITY + TIMELINE */}

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block text-sm font-semibold text-[#07192E] mb-2">
                      Quantity
                    </label>

                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 5 units"
                      className="
                      w-full
                      h-14
                      rounded-xl
                      border
                      border-gray-200
                      px-5
                      outline-none
                      focus:border-cyan-500
                      focus:ring-2
                      focus:ring-cyan-100
                      transition
                      "
                    />

                  </div>


                  <div>

                    <label className="block text-sm font-semibold text-[#07192E] mb-2">
                      Required By
                    </label>

                    <select
                      name="requiredBy"
                      value={formData.requiredBy}
                      onChange={handleChange}
                      className="
                      w-full
                      h-14
                      rounded-xl
                      border
                      border-gray-200
                      px-5
                      bg-white
                      outline-none
                      focus:border-cyan-500
                      focus:ring-2
                      focus:ring-cyan-100
                      transition
                      "
                    >

                      <option>Not Decided</option>

                      <option>Urgent</option>

                      <option>Within 1 Week</option>

                      <option>Within 1 Month</option>

                      <option>More Than 1 Month</option>

                    </select>

                  </div>

                </div>


                {/* MESSAGE */}

                <div>

                  <label className="block text-sm font-semibold text-[#07192E] mb-2">
                    Requirement Details *
                  </label>

                  <textarea
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    rows="6"
                    required
                    placeholder="Tell us about your application, product requirement, model number, technical specifications or any other details..."
                    className="
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    p-5
                    outline-none
                    focus:border-cyan-500
                    focus:ring-2
                    focus:ring-cyan-100
                    transition
                    resize-none
                    "
                  ></textarea>

                </div>


                {/* FILE */}

                <div>

                  <label className="block text-sm font-semibold text-[#07192E] mb-2">
                    Upload Requirement / Document
                    <span className="font-normal text-gray-400">
                      {" "} (Optional)
                    </span>
                  </label>

                  <label
                    className="
                    flex
                    items-center
                    gap-4
                    w-full
                    rounded-xl
                    border
                    border-dashed
                    border-cyan-400
                    bg-cyan-50/40
                    p-5
                    cursor-pointer
                    hover:bg-cyan-50
                    transition
                    "
                  >

                    <div className="w-11 h-11 rounded-xl bg-white text-cyan-600 flex items-center justify-center shadow-sm">

                      <FaFileUpload />

                    </div>

                    <div>

                      <p className="font-semibold text-[#07192E]">
                        Upload a file
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        Datasheet, specification or requirement document
                      </p>

                    </div>

                    <input
                      type="file"
                      className="hidden"
                    />

                  </label>

                </div>


                {/* SUCCESS MESSAGE */}

                {message && (
                  <div className="rounded-xl bg-green-50 border border-green-200 text-green-700 px-5 py-4 text-sm">
                    {message}
                  </div>
                )}


                {/* ERROR MESSAGE */}

                {error && (
                  <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 px-5 py-4 text-sm">
                    {error}
                  </div>
                )}


                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                  w-full
                  h-14
                  rounded-xl
                  bg-cyan-600
                  hover:bg-cyan-700
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  text-white
                  font-bold
                  flex
                  items-center
                  justify-center
                  gap-3
                  transition-all
                  duration-300
                  "
                >

                  {loading
                    ? "Submitting..."
                    : "Request My Quote"}

                  {!loading && <FaArrowRight />}

                </button>


                <p className="text-center text-sm text-gray-400">
                  Our team will review your requirement and get back to you.
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <section
        className="py-24 bg-white"
        aria-label="How the VS Enterprises quotation process works"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center">

            <span className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">
              Simple Process
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#07192E]">
              From Requirement
              <br />
              To Quote
            </h2>

          </div>


          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              {
                no: "01",
                title: "Share Your Requirement",
                desc: "Tell us about the product, quantity, application or technical requirement.",
              },
              {
                no: "02",
                title: "Our Team Reviews",
                desc: "We review your requirement and identify the appropriate product or solution.",
              },
              {
                no: "03",
                title: "Receive Our Response",
                desc: "Our team gets in touch with the relevant information and quotation.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.no}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                className="
                relative
                bg-[#F8FBFD]
                rounded-[28px]
                p-9
                border
                border-slate-100
                "
              >

                <span className="text-6xl font-black text-cyan-100">
                  {item.no}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#07192E]">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="py-24 bg-[#07192E]"
        aria-label="Contact VS Enterprises for product assistance"
      >

        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <div className="
            rounded-[40px]
            bg-gradient-to-r
            from-cyan-600
            to-[#008FAF]
            p-10
            md:p-16
            text-center
          ">

            <span className="uppercase tracking-[4px] text-cyan-100 text-sm font-semibold">
              Need Help Choosing?
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-white">
              Not Sure Which Product
              <br />
              You Need?
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-cyan-50">

              Share your machine or application details with
              our team and we'll help you identify the right
              Siemens or Delta industrial automation solution.

            </p>

            <a
              href="tel:+91XXXXXXXXXX"
              className="
              inline-flex
              items-center
              gap-3
              mt-9
              bg-white
              text-[#07192E]
              px-8
              py-4
              rounded-full
              font-bold
              hover:bg-slate-100
              transition
              "
            >

              Talk To Our Team

              <FaPhoneAlt />

            </a>

          </div>

        </div>

      </section>
    </>
  );
}