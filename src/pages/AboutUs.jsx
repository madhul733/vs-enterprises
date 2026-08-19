import React from "react";
import { motion } from "framer-motion";

import WhoWeAre from "../pages/WhoWeAre";

// ==============================
// TEAM IMAGES
// ==============================

import proprietor from "../assets/mma.png";
import director from "../assets/papa.png";
import daughter from "../assets/me.png";
// import sales from "../assets/rajni mam.png";
// import staff2 from "../assets/mehika.png";
// import staff3 from "../assets/ravi.png";
// import staff4 from "../assets/shubam.png";

// ==============================
// OFFICE IMAGES
// Change these filenames if your
// actual office image names are different
// ==============================

import office1 from "../assets/offc.jpeg";
import office2 from "../assets/cabin.jpeg";
import office3 from "../assets/outside.jpeg";
import office4 from "../assets/mandir.jpeg";


// =====================================================
// ABOUT US
// =====================================================

export default function AboutUs() {
  return (
    <>

      {/* =====================================================
          WHO WE ARE
      ===================================================== */}

      <WhoWeAre />


      {/* =====================================================
          OUR TEAM
      ===================================================== */}

      <section className="py-24 bg-[#F8FBFD]">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">


          {/* =================================================
              MAIN HEADING
          ================================================= */}

       


          {/* =================================================
              LEADERSHIP
          ================================================= */}

          <div className="mt-20">


            {/* Leadership Heading */}

            <div className="text-center mb-12">

              <span className="
                text-xs
                uppercase
                tracking-[4px]
                font-bold
                text-cyan-600
              ">
                Leadership
              </span>

              <h3 className="
                mt-3
                text-3xl
                md:text-4xl
                font-black
                text-[#07192E]
              ">
                Our Leadership
              </h3>

              <p className="
                mt-4
                max-w-2xl
                mx-auto
                text-gray-600
                leading-7
              ">
                Guided by experience, commitment and a strong
                vision for industrial automation excellence.
              </p>

            </div>


            {/* =================================================
                3 LEADERS
            ================================================= */}

            <div className="
              grid
              md:grid-cols-3
              gap-8
              max-w-5xl
              mx-auto
            ">


              {/* ==============================
                  BOSS
              ============================== */}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
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

                <div className="
                  h-[390px]
                  overflow-hidden
                  bg-[#07192E]
                ">

                  <img
                    src={director}
                    alt="Saurabh Sharma"
                    className="
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />

                </div>


                <div className="
                  px-6
                  py-7
                  text-center
                ">

                  <h3 className="
                    text-[22px]
                    font-bold
                    text-[#07192E]
                  ">
                    Saurabh Sharma
                  </h3>

                  <div className="
                    w-14
                    h-[3px]
                    bg-cyan-500
                    rounded-full
                    mx-auto
                    mt-3
                  "></div>

                  <p className="
                    mt-4
                    text-cyan-600
                    font-semibold
                  ">
                    Managing Director
                  </p>

                  <p className="
                    mt-3
                    text-sm
                    text-gray-500
                  ">
                    Leading the company with technical expertise,
                    business vision and commitment to customer
                    satisfaction.
                  </p>

                </div>

              </motion.div>


              {/* ==============================
                  PROPRIETOR / WIFE
              ============================== */}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
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

                <div className="
                  h-[390px]
                  overflow-hidden
                  bg-[#07192E]
                ">

                  <img
                    src={proprietor}
                    alt="Vandana Sharma"
                    className="
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />

                </div>


                <div className="
                  px-6
                  py-7
                  text-center
                ">

                  <h3 className="
                    text-[22px]
                    font-bold
                    text-[#07192E]
                  ">
                    Vandana Sharma
                  </h3>

                  <div className="
                    w-14
                    h-[3px]
                    bg-cyan-500
                    rounded-full
                    mx-auto
                    mt-3
                  "></div>

                  <p className="
                    mt-4
                    text-cyan-600
                    font-semibold
                  ">
                    Proprietor
                  </p>

                  <p className="
                    mt-3
                    text-sm
                    text-gray-500
                  ">
                    Supporting the company's growth with
                    dedication, leadership and a strong
                    commitment to excellence.
                  </p>

                </div>

              </motion.div>


              {/* ==============================
                  DAUGHTER
              ============================== */}

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.24,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
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

                <div className="
                  h-[390px]
                  overflow-hidden
                  bg-[#07192E]
                ">

                  <img
                    src={daughter}
                    alt="Madhul Sharma"
                    className="
                      w-full
                      h-full
                      object-cover
                      object-top
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />

                </div>


                <div className="
                  px-6
                  py-7
                  text-center
                ">

                  <h3 className="
                    text-[22px]
                    font-bold
                    text-[#07192E]
                  ">
                    Madhul Sharma
                  </h3>

                  <div className="
                    w-14
                    h-[3px]
                    bg-cyan-500
                    rounded-full
                    mx-auto
                    mt-3
                  "></div>

                  <p className="
                    mt-4
                    text-cyan-600
                    font-semibold
                  ">
                    Director
                  </p>

                  <p className="
                    mt-3
                    text-sm
                    text-gray-500
                  ">
                    Contributing to the company's digital,
                    marketing and business development initiatives.
                  </p>

                </div>

              </motion.div>

            </div>

          </div>


          {/* =================================================
              STAFF MEMBERS
          ================================================= */}

          {/* <div className="mt-24">


            {/* <div className="text-center mb-12">

              <span className="
                text-xs
                uppercase
                tracking-[4px]
                font-bold
                text-cyan-600
              ">
                Our People
              </span>

              <h3 className="
                mt-3
                text-3xl
                md:text-4xl
                font-black
                text-[#07192E]
              ">
                Our Team Members
              </h3>

              <p className="
                mt-4
                max-w-2xl
                mx-auto
                text-gray-600
                leading-7
              ">
                Our dedicated professionals work together to
                provide dependable products, services and
                technical support.
              </p>

            </div> */}


            {/* STAFF */}

       {/* <div className="
  grid
  sm:grid-cols-2
  lg:grid-cols-4
  gap-7
  max-w-5xl
  mx-auto
"> */}

  {/* ================= RAJNI ================= */}

  {/* <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      bg-white
      rounded-[24px]
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
    "
  >

    <div className="
      h-[300px]
      overflow-hidden
      bg-[#07192E]
    ">

      <img
        src={sales}
        alt="Rajni Mehra"
        className="
          w-full
          h-full
          object-cover
          object-top
          transition-transform
          duration-500
          hover:scale-105
        "
      />

    </div>

    <div className="
      px-5
      py-6
      text-center
    ">

      <h4 className="
        text-xl
        font-bold
        text-[#07192E]
      ">
        Rajni Mehra
      </h4>

      <div className="
        w-10
        h-[2px]
        bg-cyan-500
        rounded-full
        mx-auto
        mt-3
      "></div>

      <p className="
        mt-3
        text-cyan-600
        font-semibold
        text-sm
      ">
        Finance Manager
      </p>

    </div>

  </motion.div>


  {/* ================= STAFF 2 ================= */}

  {/* <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.1,
    }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      bg-white
      rounded-[24px]
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
    "
  >

    <div className="
      h-[300px]
      overflow-hidden
      bg-[#07192E]
    ">

      <img
        src={staff2}
        alt="Staff Member"
        className="
          w-full
          h-full
          object-cover
          object-top
          transition-transform
          duration-500
          hover:scale-105
        "
      />

    </div>

    <div className="
      px-5
      py-6
      text-center
    ">

      <h4 className="
        text-xl
        font-bold
        text-[#07192E]
      ">
        Staff Member
      </h4>

      <div className="
        w-10
        h-[2px]
        bg-cyan-500
        rounded-full
        mx-auto
        mt-3
      "></div>

      <p className="
        mt-3
        text-cyan-600
        font-semibold
        text-sm
      ">
        Sales & Support
      </p>

    </div>  */}

  {/* </motion.div>


  {/* ================= STAFF 3 ================= */}

  {/* <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.2,
    }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      bg-white
      rounded-[24px]
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
    "
  >

    <div className="
      h-[300px]
      overflow-hidden
      bg-[#07192E]
    ">

      <img
        src={staff3}
        alt="Staff Member"
        className="
          w-full
          h-full
          object-cover
          object-top
          transition-transform
          duration-500
          hover:scale-105
        "
      />

    </div>

    <div className="
      px-5
      py-6
      text-center
    ">

      <h4 className="
        text-xl
        font-bold
        text-[#07192E]
      ">
        Staff Member
      </h4>

      <div className="
        w-10
        h-[2px]
        bg-cyan-500
        rounded-full
        mx-auto
        mt-3
      "></div>

      <p className="
        mt-3
        text-cyan-600
        font-semibold
        text-sm
      ">
        Technical Support
      </p>

    </div>

  </motion.div> */}


  {/* ================= STAFF 4 ================= */}

  {/* <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: 0.3,
    }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    className="
      bg-white
      rounded-[24px]
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
    "
  >

    <div className="
      h-[300px]
      overflow-hidden
      bg-[#07192E]
    ">

      <img
        src={staff4}
        alt="Staff Member"
        className="
          w-full
          h-full
          object-cover
          object-top
          transition-transform
          duration-500
          hover:scale-105
        "
      />

    </div>

    <div className="
      px-5
      py-6
      text-center
    ">

      <h4 className="
        text-xl
        font-bold
        text-[#07192E]
      ">
        Staff Member
      </h4>

      <div className="
        w-10
        h-[2px]
        bg-cyan-500
        rounded-full
        mx-auto
        mt-3
      "></div>

      <p className="
        mt-3
        text-cyan-600
        font-semibold
        text-sm
      ">
        Automation Solutions
      </p>

    </div>

  </motion.div>

</div>
</div> */} 


          {/* ================================================= */}
              {/* OFFICE
          ================================================= */} 

          <div className="mt-24">


            {/* OFFICE HEADING */}

            <div className="text-center mb-12">

              <span className="
                text-xs
                uppercase
                tracking-[4px]
                font-bold
                text-cyan-600
              ">
                Our Workplace
              </span>

              <h3 className="
                mt-3
                text-3xl
                md:text-4xl
                font-black
                text-[#07192E]
              ">
                Our Office
              </h3>

              <p className="
                mt-5
                max-w-2xl
                mx-auto
                text-gray-600
                leading-7
              ">
                A professional workplace where our team works
                together to provide dependable industrial
                automation solutions.
              </p>

            </div>


            {/* OFFICE PHOTOS */}

            <div className="
              grid
              md:grid-cols-2
              gap-6
            ">


              {/* OFFICE 1 */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  h-[280px]
                  md:h-[350px]
                  rounded-[28px]
                  overflow-hidden
                  shadow-lg
                  bg-[#07192E]
                "
              >

                <img
                  src={office1}
                  alt="VS Enterprises Office"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#07192E]/60
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                " />

              </motion.div>


              {/* OFFICE 2 */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  h-[280px]
                  md:h-[350px]
                  rounded-[28px]
                  overflow-hidden
                  shadow-lg
                  bg-[#07192E]
                "
              >

                <img
                  src={office2}
                  alt="VS Enterprises Office"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#07192E]/60
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                " />

              </motion.div>


              {/* OFFICE 3 */}

          <motion.div
  initial={{
    opacity: 0,
    scale: 0.96,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 0.6,
    delay: 0.2,
  }}
  viewport={{ once: true }}
  className="
    group
    relative
    h-[280px]
    md:h-[350px]
    rounded-[28px]
    overflow-hidden
    shadow-lg
    bg-[#07192E]
  "
>

  <img
    src={office3}
    alt="VS Enterprises Office"
    className="
      w-full
      h-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
  />

  <div className="
    absolute
    inset-0
    bg-gradient-to-t
    from-[#07192E]/60
    via-transparent
    to-transparent
    opacity-0
    group-hover:opacity-100
    transition
  " />

</motion.div>


              {/* OFFICE 4 */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  h-[280px]
                  md:h-[350px]
                  rounded-[28px]
                  overflow-hidden
                  shadow-lg
                  bg-[#07192E]
                "
              >

                <img
                  src={office4}
                  alt="VS Enterprises Office"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#07192E]/60
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                " />

              </motion.div>


            </div>

          </div>


    

      </div>
      </section>


      {/* =====================================================
          VISION & MISSION
      ===================================================== */}

      <section className="
        py-24
        bg-gradient-to-b
        from-white
        to-[#F8FBFD]
      ">

        <div className="
          max-w-7xl
          mx-auto
          px-6
          lg:px-8
        ">


          {/* HEADING */}

          <div className="
            text-center
            mb-16
          ">

            <span className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-cyan-50
              text-cyan-600
              uppercase
              tracking-[3px]
              text-sm
              font-semibold
            ">
              Vision & Mission
            </span>

            <h2 className="
              mt-6
              text-4xl
              lg:text-5xl
              font-black
              text-[#07192E]
            ">
              Driving Innovation,
              <br />
              Building Industrial Excellence
            </h2>

            <p className="
              mt-6
              max-w-3xl
              mx-auto
              text-gray-600
              text-lg
              leading-8
            ">
              Our vision and mission reflect our commitment to
              delivering world-class industrial automation
              solutions while building lasting relationships
              through quality, innovation and trust.
            </p>

          </div>


          {/* =================================================
              CARDS
          ================================================= */}

          <div className="
            grid
            lg:grid-cols-2
            gap-10
          ">


            {/* =========================
                VISION
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
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
              whileHover={{
                y: -8,
              }}
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

              <div className="
                absolute
                top-0
                left-0
                w-full
                h-1
                bg-cyan-500
              "></div>


              <div className="
                w-20
                h-20
                rounded-3xl
                bg-cyan-50
                flex
                items-center
                justify-center
                text-4xl
              ">
                👁️
              </div>


              <h3 className="
                mt-8
                text-3xl
                font-bold
                text-[#07192E]
              ">
                Our Vision
              </h3>


              <p className="
                mt-6
                text-gray-600
                leading-8
                text-lg
              ">
                To become one of India's most trusted industrial
                automation partners by delivering innovative
                technologies, genuine Siemens products and
                sustainable automation solutions that empower
                industries to achieve operational excellence.
              </p>

            </motion.div>


            {/* =========================
                MISSION
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 40,
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
              whileHover={{
                y: -8,
              }}
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

              <div className="
                absolute
                top-0
                left-0
                w-full
                h-1
                bg-cyan-400
              "></div>


              <div className="
                w-20
                h-20
                rounded-3xl
                bg-white/10
                flex
                items-center
                justify-center
                text-4xl
              ">
                🎯
              </div>


              <h3 className="
                mt-8
                text-3xl
                font-bold
                text-white
              ">
                Our Mission
              </h3>


              <p className="
                mt-6
                text-gray-300
                leading-8
                text-lg
              ">
                To deliver genuine industrial automation products,
                expert engineering support and dependable customer
                service while helping industries improve productivity,
                efficiency and long-term business growth through
                reliable automation solutions.
              </p>

            </motion.div>


          </div>

        </div>

      </section>

    </>
  );
}