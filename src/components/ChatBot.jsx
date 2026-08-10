import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaPhoneAlt,
  FaQuoteRight,
  FaChevronRight,
} from "react-icons/fa";

const quickQuestions = [
  "What products do you provide?",
  "Tell me about Siemens PLC",
  "What are HMI Panels?",
  "Do you provide AC Drives?",
  "How can I get a quote?",
  "Where are you located?",
];

const getBotReply = (question) => {
  const q = question.toLowerCase();

  if (
    q.includes("product") ||
    q.includes("provide") ||
    q.includes("sell")
  ) {
    return `We provide Siemens industrial automation products including PLCs, HMI Panels, AC Drives, PLC Panels, V90 Servo Systems and ET200 Modules. We can also help with complete industrial automation requirements.`;
  }

  if (
    q.includes("plc") ||
    q.includes("simatic")
  ) {
    return `Siemens PLCs are industrial controllers used to automate machines and production processes. They receive inputs, process control logic and operate outputs. We can help you select the suitable Siemens PLC for your application.`;
  }

  if (
    q.includes("hmi") ||
    q.includes("panel")
  ) {
    return `HMI Panels provide an operator interface for monitoring and controlling industrial machines and processes. Siemens HMI solutions can display machine status, alarms, parameters and process information.`;
  }

  if (
    q.includes("drive") ||
    q.includes("ac drive") ||
    q.includes("v20") ||
    q.includes("g120")
  ) {
    return `Siemens AC Drives are used to control motor speed, torque and operation. They are commonly used in industrial machinery, pumps, conveyors and other motor-driven applications.`;
  }

  if (
    q.includes("servo") ||
    q.includes("v90")
  ) {
    return `Siemens V90 Servo systems are designed for precise motion-control applications. They are suitable where accurate positioning, speed and motion performance are required.`;
  }

  if (
    q.includes("et200") ||
    q.includes("module")
  ) {
    return `Siemens ET200 modules provide distributed I/O solutions for industrial automation systems. They help connect sensors, actuators and field devices with the control system.`;
  }

  if (
    q.includes("price") ||
    q.includes("pricing") ||
    q.includes("cost") ||
    q.includes("rate")
  ) {
    return `Product pricing depends on the exact Siemens model, specification, quantity and application. Please send us your requirement through the Get Quote form and our team will provide the appropriate quotation.`;
  }

  if (
    q.includes("quote") ||
    q.includes("quotation")
  ) {
    return `Sure! You can submit your requirement through our Get Quote form. Please mention the product/model, quantity and your application or requirement.`;
  }

  if (
    q.includes("location") ||
    q.includes("address") ||
    q.includes("office") ||
    q.includes("ludhiana")
  ) {
    return `Our office is located in Ludhiana, Punjab, India.`;
  }

  if (
    q.includes("phone") ||
    q.includes("call") ||
    q.includes("contact")
  ) {
    return `You can contact VS Enterprises at +91 7696016654. Our business hours are Monday to Saturday, 9:00 AM to 6:00 PM.`;
  }

  if (
    q.includes("hour") ||
    q.includes("timing") ||
    q.includes("open")
  ) {
    return `Our business hours are Monday to Saturday, 9:00 AM to 6:00 PM.`;
  }

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey")
  ) {
    return `Hello! 👋 Welcome to VS Enterprises. I can help you with Siemens automation products, quotations and general enquiries.`;
  }

  if (
    q.includes("thank") ||
    q.includes("thanks")
  ) {
    return `You're welcome! 😊 If you need any Siemens automation product or quotation, feel free to ask.`;
  }

  return `I can help you with Siemens PLCs, HMI Panels, AC Drives, PLC Panels, V90 Servo Systems, ET200 Modules, pricing guidance and quotations.

You can also use the Get Quote option below for a detailed requirement.`;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Hello! 👋 I'm the VS Enterprises assistant.

How can I help you today?`,
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = (text = input) => {
    const cleanText = text.trim();

    if (!cleanText) return;

    const userMessage = {
      sender: "user",
      text: cleanText,
    };

    const botMessage = {
      sender: "bot",
      text: getBotReply(cleanText),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* =====================================
          FLOATING CHAT BUTTON
      ====================================== */}

      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open chatbot"
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            w-16
            h-16
            rounded-full
            bg-[#009999]
            hover:bg-[#008888]
            text-white
            shadow-2xl
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
          "
        >
          <FaRobot className="text-2xl" />

          <span
            className="
              absolute
              -top-1
              -right-1
              w-4
              h-4
              bg-green-400
              rounded-full
              border-2
              border-white
            "
          />
        </button>
      )}


      {/* =====================================
          CHAT WINDOW
      ====================================== */}

      {open && (
        <div
          className="
            fixed
            bottom-6
            right-6
            z-[9999]
            w-[380px]
            max-w-[calc(100vw-32px)]
            h-[600px]
            max-h-[calc(100vh-48px)]
            bg-white
            rounded-3xl
            shadow-2xl
            overflow-hidden
            flex
            flex-col
            border
            border-gray-200
          "
        >

          {/* HEADER */}

          <div
            className="
              bg-[#07192E]
              text-white
              px-5
              py-5
              flex
              items-center
              justify-between
            "
          >

            <div className="flex items-center gap-3">

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#009999]
                  flex
                  items-center
                  justify-center
                "
              >
                <FaRobot />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  VS Assistant
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  Online
                </div>
              </div>

            </div>


            <button
              onClick={() => setOpen(false)}
              className="
                w-9
                h-9
                rounded-full
                hover:bg-white/10
                flex
                items-center
                justify-center
              "
            >
              <FaTimes />
            </button>

          </div>


          {/* MESSAGES */}

          <div
            className="
              flex-1
              overflow-y-auto
              p-4
              bg-[#F7FAFC]
              space-y-4
            "
          >

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`
                    max-w-[85%]
                    px-4
                    py-3
                    rounded-2xl
                    text-sm
                    leading-6
                    ${
                      msg.sender === "user"
                        ? "bg-[#009999] text-white rounded-br-md"
                        : "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-md"
                    }
                  `}
                >
                  {msg.text}
                </div>

              </div>

            ))}


            {/* QUICK QUESTIONS */}

            {messages.length === 1 && (
              <div className="pt-2">

                <p className="text-xs text-gray-500 mb-3">
                  Quick questions
                </p>

                <div className="space-y-2">

                  {quickQuestions.map((question) => (

                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                      className="
                        w-full
                        text-left
                        px-4
                        py-3
                        bg-white
                        border
                        border-gray-200
                        rounded-xl
                        text-sm
                        text-[#07192E]
                        hover:border-[#009999]
                        hover:text-[#009999]
                        transition
                        flex
                        items-center
                        justify-between
                        gap-3
                      "
                    >

                      <span>
                        {question}
                      </span>

                      <FaChevronRight className="text-xs" />

                    </button>

                  ))}

                </div>

              </div>
            )}

          </div>


          {/* ACTIONS */}

          <div className="px-4 pt-3 bg-white border-t border-gray-100">

            <div className="grid grid-cols-2 gap-2 mb-3">

              <Link
                to="/get-quote"
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-[#009999]
                  hover:bg-[#008888]
                  text-white
                  py-2.5
                  rounded-xl
                  text-sm
                  font-semibold
                  transition
                "
              >
                <FaQuoteRight />
                Get Quote
              </Link>


              <a
                href="tel:+917696016654"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  border
                  border-[#009999]
                  text-[#009999]
                  hover:bg-[#009999]
                  hover:text-white
                  py-2.5
                  rounded-xl
                  text-sm
                  font-semibold
                  transition
                "
              >
                <FaPhoneAlt />
                Call Us
              </a>

            </div>


            {/* INPUT */}

            <div className="flex gap-2 pb-4">

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about our products..."
                className="
                  flex-1
                  min-w-0
                  border
                  border-gray-200
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  outline-none
                  focus:border-[#009999]
                "
              />

              <button
                onClick={() => sendMessage()}
                className="
                  w-12
                  h-12
                  flex-shrink-0
                  rounded-xl
                  bg-[#009999]
                  hover:bg-[#008888]
                  text-white
                  flex
                  items-center
                  justify-center
                  transition
                "
              >
                <FaPaperPlane />
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}