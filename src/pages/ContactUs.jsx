import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
  // SUBMIT CONTACT FORM
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch(
 "https://vs-enterprises-api.onrender.com/api/contact",
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

      setSuccess(
        "Your message has been sent successfully. We will get back to you soon."
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);

      setError(
        err.message ||
          "Unable to send your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-24 bg-[#F8FBFD]"
      aria-label="Contact VS Enterprises for industrial automation solutions"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-cyan-600 uppercase tracking-[4px] text-sm font-semibold">
            Contact Us
          </span>

          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
            Let's Discuss Your
            <span className="text-cyan-600">
              {" "}Automation Needs
            </span>
          </h1>

          <p className="text-gray-600 mt-6 leading-8">
            Contact VS Enterprises in Ludhiana, Punjab for Siemens and
            Delta automation products, PLCs, HMI panels, AC drives,
            servo systems, technical guidance, and complete industrial
            automation solutions.
          </p>

        </div>


        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-10"
          >

            <div className="space-y-8">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h2 className="font-semibold text-xl">
                    Office Address
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Ludhiana, Punjab, India
                  </p>
                </div>

              </div>


              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h2 className="font-semibold text-xl">
                    Phone
                  </h2>

                  <p className="text-gray-600 mt-2">
                    +91 76960 16654
                  </p>
                </div>

              </div>


              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <FaEnvelope />
                </div>

                <div>
                  <h2 className="font-semibold text-xl">
                    Email
                  </h2>

                  <p className="text-gray-600 mt-2">
                    SaurabhSharma825@yahoo.com
                  </p>
                </div>

              </div>


              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                  <FaClock />
                </div>

                <div>
                  <h2 className="font-semibold text-xl">
                    Business Hours
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>

              </div>

            </div>

          </motion.div>


          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-10"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="VS Enterprises contact form"
            >

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                aria-label="Full Name"
                autoComplete="name"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-cyan-600"
              />


              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                aria-label="Email Address"
                autoComplete="email"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-cyan-600"
              />


              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                aria-label="Phone Number"
                autoComplete="tel"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-cyan-600"
              />


              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                aria-label="Subject"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-cyan-600"
              />


              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="Write your message..."
                aria-label="Message"
                required
                className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-cyan-600"
              ></textarea>


              {/* SUCCESS */}

              {success && (
                <div
                  className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm"
                  role="status"
                >
                  {success}
                </div>
              )}


              {/* ERROR */}

              {error && (
                <div
                  className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-5 py-4 text-sm"
                  role="alert"
                >
                  {error}
                </div>
              )}


              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 disabled:cursor-not-allowed transition text-white py-4 rounded-xl font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}