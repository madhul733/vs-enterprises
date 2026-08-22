import React, { useState } from "react";
import { motion } from "framer-motion";
import hero from "../assets/home.png";
import {
  FaArrowRight,
  FaChartLine,
  FaUsers,
  FaGraduationCap,
  FaAward,
  FaCheckCircle,
  FaBriefcase,
  FaPlus,
} from "react-icons/fa";

const jobs = [
  {
    title: "Marketing Executive",
    type: "Full Time",
    exp: "0–2 Years",
  },
  {
    title: "Sales Executive",
    type: "Full Time",
    exp: "1–3 Years",
  },
  {
    title: "Service Engineer",
    type: "Full Time",
    exp: "2+ Years",
  },
  {
    title: "Automation Engineer",
    type: "Full Time",
    exp: "2–5 Years",
  },
];

const steps = [
  {
    no: "01",
    title: "Apply",
    desc: "Submit your application with an updated resume.",
  },
  {
    no: "02",
    title: "Interview",
    desc: "Discuss your skills, experience and career goals with our team.",
  },
  {
    no: "03",
    title: "Selection",
    desc: "Complete the evaluation and selection process.",
  },
  {
    no: "04",
    title: "Welcome",
    desc: "Begin your professional journey with VS Enterprises.",
  },
];

const faqs = [
  {
    q: "Can freshers apply?",
    a: "Yes. Fresh graduates are welcome to apply for suitable opportunities.",
  },
  {
    q: "Do you provide training?",
    a: "Yes. Team members receive practical guidance, technical exposure and opportunities to learn.",
  },
  {
    q: "What kind of positions are available?",
    a: "Opportunities may be available across marketing, sales, engineering and industrial automation.",
  },
  {
    q: "How can I apply?",
    a: "You can submit your details and resume through the application form on this page.",
  },
];

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // FAQ accordion state
  const [openIndex, setOpenIndex] = useState(null);

  // ==========================================
  // HANDLE INPUT
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // HANDLE RESUME
  // ==========================================

  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    setResume(file || null);
  };

  // ==========================================
  // SUBMIT APPLICATION
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = new FormData();

      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("position", formData.position);
      data.append("message", formData.message);

      if (resume) {
        data.append("resume", resume);
      }

      const response = await fetch(
      "https://vs-enterprises-api.onrender.com/api/career",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong."
        );
      }

      setSuccess(
        "Your application has been submitted successfully. We will contact you soon."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });

      setResume(null);

      // Reset file input
      e.target.reset();
    } catch (err) {
      console.error("Career form error:", err);

      setError(
        err.message ||
          "Unable to submit your application. Please try again."
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
  className="
    relative
    min-h-[72vh]
    overflow-hidden
    flex
    items-center
    bg-cover
    bg-center
  "
  style={{
    backgroundImage: `url(${hero})`,
  }}
  aria-label="Careers at VS Enterprises in industrial automation"
>
  <div className="
  absolute
  inset-0
  bg-gradient-to-r
  from-[#07192E]/90
  via-[#07192E]/70
  to-[#07192E]/40
"></div>
        <div className="absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full border border-cyan-400/10"></div>

        <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full border border-cyan-400/10"></div>

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-8 py-28">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <span className="uppercase tracking-[5px] text-cyan-400 text-sm font-semibold">
              Careers
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white">

              Build Your
              <br />

              Career With
              <br />

              <span className="text-cyan-400">
                VS Enterprises
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-9 text-slate-300">
              Join our growing team at VS Enterprises and build your
              career in industrial automation, technology, sales, marketing
              and engineering while gaining practical industry exposure
              and professional growth.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#openings"
                className="inline-flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                View Openings
                <FaArrowRight />
              </a>

              <a
                href="#apply"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-cyan-400 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Apply Now
              </a>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHY JOIN
      ===================================================== */}

      <section
        className="py-24 lg:py-28 bg-white"
        aria-label="Why join VS Enterprises"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative min-h-[500px] rounded-[35px] bg-[#07192E] overflow-hidden flex items-center"
            >

              <div className="absolute top-0 right-0 w-72 h-72 rounded-full border border-cyan-400/10"></div>

              <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full border border-cyan-400/10"></div>

              <div className="relative z-10 p-10 lg:p-14">

                <span className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
                  Our Culture
                </span>

                <h3 className="mt-5 text-4xl lg:text-5xl font-black text-white leading-tight">
                  People.
                  <br />
                  Progress.
                  <br />
                  Possibilities.
                </h3>

                <p className="mt-7 text-slate-300 leading-8 max-w-md">
                  We believe a strong team creates strong solutions.
                  At VS Enterprises, we encourage collaboration,
                  learning and professional development.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-10">

                  <div>
                    <p className="text-3xl font-black text-cyan-400">
                      Growth
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      Career focused
                    </p>
                  </div>

                  <div>
                    <p className="text-3xl font-black text-cyan-400">
                      Learning
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                      Industry exposure
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <span className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">
                Why Join Us
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#07192E] leading-tight">
                Grow Your Career
                <br />
                With Confidence
              </h2>

              <div className="w-20 h-1 bg-cyan-500 rounded-full mt-7"></div>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                At VS Enterprises, we believe our people are
                an important part of our success. We create an
                environment where individuals can learn,
                contribute and grow professionally.
              </p>

              <div className="grid sm:grid-cols-2 gap-7 mt-10">

                <div className="flex gap-4">

                  <FaChartLine className="text-cyan-600 text-2xl mt-1 flex-shrink-0" />

                  <div>
                    <h4 className="font-bold text-lg text-[#07192E]">
                      Career Growth
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Build a long-term professional career.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <FaGraduationCap className="text-cyan-600 text-2xl mt-1 flex-shrink-0" />

                  <div>
                    <h4 className="font-bold text-lg text-[#07192E]">
                      Learning
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Gain practical knowledge and exposure.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <FaUsers className="text-cyan-600 text-2xl mt-1 flex-shrink-0" />

                  <div>
                    <h4 className="font-bold text-lg text-[#07192E]">
                      Great Team
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Work with experienced professionals.
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <FaAward className="text-cyan-600 text-2xl mt-1 flex-shrink-0" />

                  <div>
                    <h4 className="font-bold text-lg text-[#07192E]">
                      Recognition
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Your contribution is valued and recognized.
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CURRENT OPENINGS
      ===================================================== */}

      <section
        id="openings"
        className="py-24 lg:py-28 bg-[#F8FBFD]"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl">

            <span className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">
              Open Positions
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#07192E]">
              Current Career
              <br />
              Opportunities
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore career opportunities at VS Enterprises in
              industrial automation, sales, marketing, service engineering
              and business operations.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-6 mt-14">

            {jobs.map((job, index) => (

              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-[28px] border border-slate-200 p-8 hover:border-cyan-300 hover:shadow-xl transition-all duration-300"
              >

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <span className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold">
                      {job.type}
                    </span>

                    <h3 className="mt-5 text-2xl md:text-3xl font-black text-[#07192E]">
                      {job.title}
                    </h3>

                    <p className="mt-3 text-gray-500">
                      Experience:{" "}
                      <span className="font-semibold text-gray-700">
                        {job.exp}
                      </span>
                    </p>

                  </div>

                  <div className="w-12 h-12 rounded-full bg-[#07192E] text-white flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                    <FaBriefcase />
                  </div>

                </div>

                <p className="mt-6 text-gray-600 leading-7">
                  Join our growing team and contribute to
                  professional projects while developing
                  your skills and industry experience.
                </p>

                <a
                  href="#apply"
                  className="inline-flex items-center gap-3 mt-7 text-cyan-600 font-bold hover:gap-5 transition-all duration-300"
                >
                  Apply for this position
                  <FaArrowRight />
                </a>

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          HIRING PROCESS
      ===================================================== */}

      <section
        className="py-24 lg:py-28 bg-white"
        aria-label="VS Enterprises hiring process"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <span className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">
              Hiring Process
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black text-[#07192E]">
              Your Journey
              <br />
              Starts Here
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A simple and transparent process to help us
              understand your skills and potential.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {steps.map((step, index) => (

              <motion.div
                key={step.no}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative bg-[#F8FBFD] rounded-[28px] p-8 border border-slate-100"
              >

                <span className="text-6xl font-black text-cyan-100">
                  {step.no}
                </span>

                <h3 className="mt-5 text-2xl font-black text-[#07192E]">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {step.desc}
                </p>

                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-4 text-cyan-300">
                    <FaArrowRight />
                  </div>
                )}

              </motion.div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          APPLY NOW
      ===================================================== */}

      <section
        id="apply"
        className="py-24 lg:py-28 bg-[#F8FBFD]"
        aria-label="Apply for a career at VS Enterprises"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-[38%_62%] bg-white rounded-[35px] shadow-xl overflow-hidden">

            {/* LEFT */}

            <div className="bg-[#07192E] p-10 lg:p-14 text-white">

              <span className="uppercase tracking-[4px] text-cyan-400 text-sm font-semibold">
                Apply Now
              </span>

              <h2 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
                Start Your
                <br />
                Career Journey
              </h2>

              <p className="mt-7 text-slate-300 leading-8">
                Think you can make a difference?
                Send us your details and resume.
                Our team will review your application.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400" />
                  Professional Environment
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400" />
                  Learning Opportunities
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400" />
                  Career Development
                </div>

                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-cyan-400" />
                  Industry Exposure
                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="p-8 lg:p-14">

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-6"
                aria-label="VS Enterprises career application form"
              >

                <div>

                  <label className="block text-sm font-semibold text-[#07192E] mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="fullName"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-cyan-500 transition"
                  />

                </div>


                <div>

                  <label className="block text-sm font-semibold text-[#07192E] mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-cyan-500 transition"
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
                    placeholder="Enter your phone"
                    required
                    className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-cyan-500 transition"
                  />

                </div>


                <div>

                  <label className="block text-sm font-semibold text-[#07192E] mb-2">
                    Position
                  </label>

                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full h-14 rounded-xl border border-gray-200 px-5 outline-none focus:border-cyan-500 transition"
                  >

                    <option value="">
                      Select Position
                    </option>

                    <option value="Marketing Executive">
                      Marketing Executive
                    </option>

                    <option value="Sales Executive">
                      Sales Executive
                    </option>

                    <option value="Service Engineer">
                      Service Engineer
                    </option>

                    <option value="Automation Engineer">
                      Automation Engineer
                    </option>

                  </select>

                </div>


                {/* RESUME */}

                <div className="md:col-span-2">

                  <label className="block text-sm font-semibold text-[#07192E] mb-2">
                    Resume
                  </label>

                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                    required
                    className="w-full rounded-xl border border-dashed border-cyan-400 p-4 bg-cyan-50/30"
                  />

                  {resume && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: {resume.name}
                    </p>
                  )}

                </div>


                {/* MESSAGE */}

                <div className="md:col-span-2">

                  <label className="block text-sm font-semibold text-[#07192E] mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about yourself..."
                    required
                    className="w-full rounded-xl border border-gray-200 p-5 outline-none focus:border-cyan-500 transition resize-none"
                  ></textarea>

                </div>


                {/* SUCCESS */}

                {success && (
                  <div className="md:col-span-2 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm">
                    {success}
                  </div>
                )}


                {/* ERROR */}

                {error && (
                  <div className="md:col-span-2 bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm">
                    {error}
                  </div>
                )}


                {/* BUTTON */}

                <button
                  type="submit"
                  disabled={loading}
                  className="md:col-span-2 inline-flex items-center justify-center gap-3 h-14 rounded-xl bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold transition"
                >

                  {loading
                    ? "Submitting..."
                    : "Submit Application"}

                  {!loading && <FaArrowRight />}

                </button>

              </form>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        className="py-16 md:py-20"
        aria-label="Frequently asked questions about careers at VS Enterprises"
      >

        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* HEADING */}

          <div className="text-center">

            <span className="uppercase tracking-[4px] text-cyan-600 text-sm font-semibold">
              FAQ
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-black text-[#07192E]">
              Frequently Asked
              <br />
              Questions
            </h2>

          </div>


          {/* FAQ LIST */}

          <div className="space-y-4 mt-10 md:mt-14">

            {faqs.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  rounded-[20px]
                  md:rounded-[24px]
                  border
                  border-gray-200
                  overflow-hidden
                  hover:border-cyan-300
                  transition
                "
              >

                {/* QUESTION */}

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-5
                    text-left
                    px-5
                    py-5
                    md:px-7
                    md:py-6
                    bg-white
                  "
                >

                  <h3
                    className="
                      text-base
                      sm:text-lg
                      md:text-xl
                      font-bold
                      text-[#07192E]
                      leading-6
                    "
                  >
                    {item.q}
                  </h3>


                  {/* PLUS ICON */}

                  <span
                    className="
                      flex-shrink-0
                      w-9
                      h-9
                      md:w-10
                      md:h-10
                      rounded-full
                      bg-cyan-50
                      text-cyan-600
                      flex
                      items-center
                      justify-center
                      transition-transform
                      duration-300
                    "
                    style={{
                      transform:
                        openIndex === index
                          ? "rotate(45deg)"
                          : "rotate(0deg)",
                    }}
                  >
                    <FaPlus className="text-sm" />
                  </span>

                </button>


                {/* ANSWER */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >

                  <div className="overflow-hidden">

                    <p
                      className="
                        px-5
                        pb-5
                        md:px-7
                        md:pb-6
                        text-sm
                        md:text-base
                        text-gray-600
                        leading-6
                        md:leading-7
                      "
                    >
                      {item.a}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </>
  );
}