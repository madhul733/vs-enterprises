import React from "react";
import girl from "../assets/whyvs.png";

const features = [
  {
    no: "01",
    title: "Genuine Siemens Products",
    desc: "Authorized supplier of Siemens Industrial Automation products.",
  },
  {
    no: "02",
    title: "Technical Expertise",
    desc: "Experienced engineers providing complete automation solutions.",
  },
  {
    no: "03",
    title: "Fast Delivery",
    desc: "Reliable delivery across India with dedicated customer support.",
  },
  {
    no: "04",
    title: "After Sales Support",
    desc: "Installation, troubleshooting and long-term technical assistance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 overflow-hidden">

      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[40%_60%]
            items-center
            gap-10
            lg:gap-6
          "
        >

          {/* ================= LEFT ================= */}

          <div className="w-full max-w-[420px] mx-auto lg:mx-0">

            <span
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-cyan-50
                text-cyan-600
                text-xs
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Why VS Enterprises
            </span>


            <h2
              className="
                mt-4
                sm:mt-5
                text-[27px]
                sm:text-[32px]
                lg:text-[36px]
                font-bold
                leading-tight
                text-[#0F8FB5]
              "
            >
              Why Industries
              <br />
              Trust VS Enterprises
            </h2>


            <p
              className="
                mt-4
                text-[13px]
                sm:text-[14px]
                leading-6
                text-gray-600
                max-w-[380px]
              "
            >
              We provide genuine Siemens Industrial Automation
              products backed by engineering expertise, fast
              delivery and complete after-sales technical support.
            </p>


            {/* ================= FEATURES ================= */}

            <div className="mt-7 flex flex-col gap-4">

              {features.map((item, index) => (

                <div
                  key={item.no}
                  className="flex items-start gap-4"
                >

                  {/* TIMELINE */}

                  <div className="flex flex-col items-center flex-shrink-0">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-cyan-50
                        border
                        border-cyan-200
                        text-cyan-600
                        text-sm
                        font-bold
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {item.no}
                    </div>


                    {index !== features.length - 1 && (
                      <div
                        className="
                          w-[2px]
                          h-7
                          bg-cyan-300
                          mt-2
                          rounded-full
                        "
                      />
                    )}

                  </div>


                  {/* TEXT */}

                  <div className="flex-1 pb-2 min-w-0">

                    <h3
                      className="
                        text-[15px]
                        sm:text-[16px]
                        font-semibold
                        text-[#111827]
                        leading-5
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[12px]
                        sm:text-[13px]
                        leading-5
                        text-gray-600
                      "
                    >
                      {item.desc}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* ================= RIGHT IMAGE ================= */}

          <div
            className="
              flex
              items-center
              justify-center
              lg:justify-end
              mt-4
              lg:mt-0
            "
          >

            <div
              className="
                relative
                w-full
                h-[320px]
                sm:h-[400px]
                lg:h-[450px]
                flex
                justify-center
                lg:justify-end
                items-end
                overflow-visible
              "
            >

              {/* BACKGROUND GLOW */}

              <div
                className="
                  absolute
                  bottom-4
                  left-1/2
                  -translate-x-1/2
                  lg:left-auto
                  lg:right-8
                  lg:translate-x-0
                  w-[210px]
                  sm:w-[260px]
                  h-[210px]
                  sm:h-[260px]
                  rounded-full
                  bg-cyan-50
                  blur-3xl
                  opacity-70
                "
              />


              {/* IMAGE */}

              <img
                src={girl}
                alt="Why VS Enterprises"
                className="
                  relative
                  z-10
                  h-[330px]
                  sm:h-[410px]
                  lg:h-[500px]
                  w-auto
                  max-w-[95%]
                  object-contain
                  translate-y-4
                  sm:translate-y-6
                  lg:translate-y-6
                  lg:scale-110
                  drop-shadow-[0_20px_40px_rgba(0,0,0,.15)]
                "
                draggable="false"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}