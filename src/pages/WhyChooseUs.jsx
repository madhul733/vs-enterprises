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
    <section className="bg-white py-8 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-[40%_60%] items-center gap-6">

          {/* LEFT */}

          <div className="w-full max-w-[420px]">

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 text-cyan-600 text-xs font-semibold uppercase tracking-wider">

              Why VS Enterprises

            </span>

            <h2 className="mt-5 text-[26px] font-bold leading-tight text-[#0F8FB5]">

              Why Industries
              <br />
              Trust VS Enterprises

            </h2>

            <p className="mt-4 text-[12px]
leading-5 text-gray-600 max-w-[340px]">

              We provide genuine Siemens Industrial Automation
              products backed by engineering expertise,
              fast delivery and complete after-sales
              technical support.

            </p>

            <div className="mt-6 flex flex-col gap-4">
              {features.map((item, index) => (

  <div
    key={index}
    className="flex items-start gap-4"
  >

    {/* Timeline */}

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
          h-6
          bg-cyan-300
          mt-2
          rounded-full
          "
        />

      )}

    </div>

    {/* Text */}

    <div className="flex-1 pb-2">

      <h3
        className="
        text-[15px]
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

          {/* RIGHT */}

         <div className="flex items-start justify-end -mt-4">

            <div
  className="
  relative
  w-full
  h-[450px]
  flex
  justify-end
  items-end
  overflow-visible

"
>

              {/* Background Glow */}

              <div
                className="
                absolute
                bottom-4
                w-[260px]
                h-[260px]
                rounded-full
                bg-cyan-50
                blur-3xl
                opacity-70
                "
              />

              <img
                src={girl}
                alt="Why VS Enterprises"
             className="
h-[450px]
lg:h-[500px]
w-auto
max-w-none
object-contain
translate-y-6
scale-110
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