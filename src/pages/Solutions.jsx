import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/home.png";

import {
  FaArrowRight,
  FaMicrochip,
  FaDesktop,
  FaBolt,
  FaCogs,
  FaProjectDiagram,
  FaChartLine,
  FaCheckCircle,
  FaIndustry,
  FaTools,
} from "react-icons/fa";

import { Link } from "react-router-dom";


// =====================================================
// SOLUTIONS
// =====================================================

const solutions = [
  {
    icon: FaMicrochip,
    number: "01",
    title: "PLC Automation",
    subtitle: "Control. Automate. Perform.",
    desc:
      "Reliable PLC-based automation solutions for machine control, process automation and industrial applications using Siemens automation technology.",
  },

  {
    icon: FaDesktop,
    number: "02",
    title: "HMI Solutions",
    subtitle: "Visualize Every Process.",
    desc:
      "Industrial HMI solutions that provide operators with clear process visualization, monitoring and intuitive machine control.",
  },

  {
    icon: FaBolt,
    number: "03",
    title: "Drive & Motion Control",
    subtitle: "Power. Precision. Performance.",
    desc:
      "AC drives, variable frequency drives and servo solutions designed for precise speed, torque and motion control.",
  },

  {
    icon: FaCogs,
    number: "04",
    title: "Industrial Control Panels",
    subtitle: "Engineered For Reliability.",
    desc:
      "Industrial electrical and automation control panels designed for safe, reliable and efficient machine and process control.",
  },

  {
    icon: FaProjectDiagram,
    number: "05",
    title: "Industrial Automation",
    subtitle: "Connect Every Layer.",
    desc:
      "Complete automation solutions combining PLCs, HMIs, drives, controllers and industrial components for connected operations.",
  },

  {
    icon: FaChartLine,
    number: "06",
    title: "Process Monitoring",
    subtitle: "See. Monitor. Improve.",
    desc:
      "Automation and monitoring solutions that help businesses improve visibility, productivity and operational efficiency.",
  },
];


// =====================================================
// ADVANTAGES
// =====================================================

const advantages = [
  {
    icon: FaIndustry,
    title: "Industrial Expertise",
    desc:
      "Solutions designed around real-world industrial automation requirements.",
  },

  {
    icon: FaCheckCircle,
    title: "Genuine Products",
    desc:
      "Access to genuine Siemens industrial automation products through an authorized channel.",
  },

  {
    icon: FaTools,
    title: "Technical Support",
    desc:
      "Professional assistance for product selection, application requirements and automation solutions.",
  },

  {
    icon: FaChartLine,
    title: "Performance Focused",
    desc:
      "Technology solutions focused on reliability, efficiency and long-term performance.",
  },
];


// =====================================================
// PAGE
// =====================================================

export default function Solutions() {
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
        aria-label="VS Enterprises industrial automation solutions"
      >

        {/* =================================================
            DECORATIVE ELEMENTS
        ================================================= */}

        <div
          className="
            absolute
            -top-48
            -right-48
            w-[650px]
            h-[650px]
            rounded-full
            border
            border-cyan-400/10
          "
        ></div>


        <div
          className="
            absolute
            top-24
            right-24
            w-[320px]
            h-[320px]
            rounded-full
            border
            border-cyan-400/10
          "
        ></div>


        <div
          className="
            absolute
            -bottom-40
            -left-40
            w-[500px]
            h-[500px]
            rounded-full
            bg-cyan-500/5
            blur-3xl
          "
        ></div>


        {/* =================================================
            BACKGROUND FADE
        ================================================= */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#07192E]/90
            via-[#07192E]/70
            to-[#07192E]/40
          "
        ></div>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className="
            relative
            z-10
            max-w-7xl
            mx-auto
            w-full
            px-6
            lg:px-8
            py-28
          "
        >

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-4xl"
          >

            <span
              className="
                uppercase
                tracking-[5px]
                text-cyan-400
                text-sm
                font-semibold
              "
            >
              Our Solutions
            </span>


            <h1
              className="
                mt-6
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                text-white
                leading-[1.05]
              "
            >

              Industrial Automation

              <br />

              <span className="text-cyan-400">
                Smarter Solutions
              </span>

              <br />

              For Industry

            </h1>


            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                md:text-xl
                leading-9
                text-slate-300
              "
            >
              From Siemens PLC automation and HMI systems to AC drives,
              servo solutions and industrial control panels, VS Enterprises
              delivers reliable industrial automation solutions in Ludhiana,
              Punjab and across India.
            </p>


            <div className="flex flex-wrap gap-4 mt-10">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-cyan-600
                  hover:bg-cyan-700
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Discuss Your Requirement

                <FaArrowRight />

              </Link>


              <Link
                to="/products"
                className="
                  inline-flex
                  items-center
                  gap-3
                  border
                  border-white/25
                  hover:border-cyan-400
                  text-white
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                "
              >
                Explore Products

              </Link>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          CHALLENGES
      ===================================================== */}

      <section
        className="py-24 lg:py-28 bg-white"
        aria-label="Industrial automation challenges"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
            >

              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-cyan-600
                  text-sm
                  font-semibold
                "
              >
                Industrial Challenges
              </span>


              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-black
                  text-[#07192E]
                  leading-tight
                "
              >
                Turning Automation

                <br />

                Challenges Into

                <br />

                Better Performance
              </h2>


              <div
                className="
                  w-20
                  h-1
                  bg-cyan-500
                  rounded-full
                  mt-7
                "
              ></div>


              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-gray-600
                "
              >
                Modern industrial operations demand better control,
                greater reliability and improved productivity. The right
                automation technology, including PLCs, HMIs, drives and
                control systems, can help businesses achieve consistent
                and efficient operations.
              </p>

            </motion.div>


            {/* RIGHT */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
              }}
              viewport={{
                once: true,
              }}
              className="
                grid
                sm:grid-cols-2
                gap-5
              "
            >

              {[
                "Manual and inefficient processes",
                "Limited machine visibility",
                "Unreliable control systems",
                "Increasing productivity demands",
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    group
                    rounded-[24px]
                    border
                    border-slate-200
                    p-7
                    hover:border-cyan-300
                    hover:shadow-lg
                    transition-all
                    duration-300
                  "
                >

                  <div
                    className="
                      text-4xl
                      font-black
                      text-cyan-100
                      group-hover:text-cyan-200
                      transition
                    "
                  >
                    0{index + 1}
                  </div>


                  <p
                    className="
                      mt-5
                      text-lg
                      font-bold
                      text-[#07192E]
                      leading-7
                    "
                  >
                    {item}
                  </p>

                </div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHAT WE DELIVER
      ===================================================== */}

      <section
        className="py-24 lg:py-28 bg-[#07192E]"
        aria-label="Industrial automation solutions and services"
      >

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="
            grid
            lg:grid-cols-[40%_60%]
            gap-16
            items-center
          ">

            {/* LEFT */}

            <div>

              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-cyan-400
                  text-sm
                  font-semibold
                "
              >
                What We Deliver
              </span>


              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-black
                  text-white
                  leading-tight
                "
              >
                Automation Built

                <br />

                Around Your

                <br />

                Requirements
              </h2>


              <p
                className="
                  mt-7
                  text-lg
                  leading-8
                  text-slate-300
                "
              >
                We help businesses select and implement the right
                Siemens and Delta industrial automation products and
                solutions for their specific applications, with a focus
                on reliable machine control and efficient operations.
              </p>


              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
                  mt-9
                  text-cyan-400
                  font-bold
                  hover:gap-5
                  transition-all
                "
              >
                Talk To Our Team

                <FaArrowRight />

              </Link>

            </div>


            {/* RIGHT */}

            <div className="
              grid
              sm:grid-cols-2
              gap-5
            ">

              {[
                "Reliable automation architecture",
                "Scalable industrial solutions",
                "Genuine automation products",
                "Technical product guidance",
                "Improved machine control",
                "Long-term operational reliability",
              ].map((item, index) => (

                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    flex
                    gap-4
                    items-start
                    p-6
                    rounded-2xl
                    bg-white/5
                    border
                    border-white/10
                    hover:bg-white/10
                    transition
                  "
                >

                  <FaCheckCircle
                    className="
                      text-cyan-400
                      mt-1
                      flex-shrink-0
                    "
                  />


                  <p className="
                    text-slate-200
                    leading-7
                  ">
                    {item}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR ADVANTAGES
      ===================================================== */}

      <section
        className="
          py-24
          lg:py-28
          bg-[#F8FBFD]
        "
        aria-label="VS Enterprises industrial automation advantages"
      >

        <div className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
        ">

          <div className="
            text-center
            max-w-3xl
            mx-auto
          ">

            <span
              className="
                uppercase
                tracking-[4px]
                text-cyan-600
                text-sm
                font-semibold
              "
            >
              Our Advantages
            </span>


            <h2
              className="
                mt-5
                text-4xl
                md:text-5xl
                font-black
                text-[#07192E]
              "
            >
              From Industrial Potential

              <br />

              To Better Performance
            </h2>


            <p
              className="
                mt-6
                text-lg
                leading-8
                text-gray-600
              "
            >
              We combine product knowledge, technical understanding
              and customer-focused service to deliver dependable
              industrial automation solutions for businesses in Ludhiana,
              Punjab and across India.
            </p>

          </div>


          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            mt-16
          ">

            {advantages.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="
                    bg-white
                    rounded-[28px]
                    border
                    border-slate-200
                    p-8
                    hover:border-cyan-300
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-cyan-50
                    text-cyan-600
                    flex
                    items-center
                    justify-center
                    text-xl
                  ">

                    <Icon />

                  </div>


                  <h3
                    className="
                      mt-7
                      text-xl
                      font-black
                      text-[#07192E]
                    "
                  >
                    {item.title}
                  </h3>


                  <p
                    className="
                      mt-4
                      text-gray-600
                      leading-7
                    "
                  >
                    {item.desc}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR SOLUTIONS
      ===================================================== */}

      <section
        className="
          py-24
          lg:py-28
          bg-white
        "
        aria-label="Industrial automation solutions offered by VS Enterprises"
      >

        <div className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
        ">

          <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-8
          ">

            <div>

              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-cyan-600
                  text-sm
                  font-semibold
                "
              >
                Our Solutions
              </span>


              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  font-black
                  text-[#07192E]
                "
              >
                Building Smarter

                <br />

                Industrial Operations
              </h2>

            </div>


            <p
              className="
                max-w-xl
                text-lg
                leading-8
                text-gray-600
              "
            >
              Explore our core industrial automation solutions,
              including PLC automation, HMI systems, drive and motion
              control, industrial control panels and process monitoring,
              designed to improve control, efficiency and operational
              performance.
            </p>

          </div>


          <div className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            mt-16
          ">

            {solutions.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[30px]
                    border
                    border-slate-200
                    bg-white
                    p-8
                    min-h-[360px]
                    hover:-translate-y-2
                    hover:border-cyan-300
                    hover:shadow-2xl
                    transition-all
                    duration-500
                  "
                >

                  {/* NUMBER */}

                  <div
                    className="
                      absolute
                      top-6
                      right-7
                      text-6xl
                      font-black
                      text-slate-100
                      group-hover:text-cyan-50
                      transition
                    "
                  >
                    {item.number}
                  </div>


                  {/* ICON */}

                  <div
                    className="
                      relative
                      z-10
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#07192E]
                      text-cyan-400
                      flex
                      items-center
                      justify-center
                      text-2xl
                      group-hover:bg-cyan-600
                      group-hover:text-white
                      transition-all
                      duration-300
                    "
                  >
                    <Icon />
                  </div>


                  <div className="
                    relative
                    z-10
                    mt-8
                  ">

                    <h3
                      className="
                        text-2xl
                        font-black
                        text-[#07192E]
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        mt-2
                        text-cyan-600
                        font-semibold
                        text-sm
                      "
                    >
                      {item.subtitle}
                    </p>


                    <p
                      className="
                        mt-5
                        text-gray-600
                        leading-7
                      "
                    >
                      {item.desc}
                    </p>

                  </div>


                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-1
                      w-0
                      bg-cyan-500
                      group-hover:w-full
                      transition-all
                      duration-500
                    "
                  ></div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section
        className="
          py-24
          bg-[#07192E]
        "
        aria-label="Contact VS Enterprises for industrial automation requirements"
      >

        <div className="
          max-w-6xl
          mx-auto
          px-6
          lg:px-8
        ">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              overflow-hidden
              rounded-[40px]
              bg-gradient-to-r
              from-cyan-600
              to-[#008FAF]
              p-10
              md:p-16
              text-center
            "
          >

            <div className="
              absolute
              -top-24
              -right-24
              w-72
              h-72
              rounded-full
              border
              border-white/20
            "></div>


            <div className="
              absolute
              -bottom-32
              -left-20
              w-80
              h-80
              rounded-full
              border
              border-white/10
            "></div>


            <div className="
              relative
              z-10
            ">

              <span
                className="
                  uppercase
                  tracking-[4px]
                  text-cyan-100
                  text-sm
                  font-semibold
                "
              >
                Let's Build Together
              </span>


              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  font-black
                  text-white
                  leading-tight
                "
              >
                Have An Automation

                <br />

                Requirement?
              </h2>


              <p
                className="
                  mt-7
                  max-w-2xl
                  mx-auto
                  text-lg
                  leading-8
                  text-cyan-50
                "
              >
                Tell us about your application, machine or industrial
                requirement. Our team can help you identify the right
                Siemens and Delta automation products and solution for
                your application.
              </p>


              <Link
                to="/contact"
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
                Request A Consultation

                <FaArrowRight />

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
}