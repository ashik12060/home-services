

import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import bannerImg from "../images/hero-main.jpeg";
import Footer from "./Footer";
import Header from "./Shared/Header/Header";

const Contact = () => {
  return (
    <>
      <Header />

      {/* Banner Section */}
      <div
        className="relative h-96 md:h-[500px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${bannerImg})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl font-medium">
            Thank you for choosing our home improvement service! We’re here to help
            transform your house into a space that reflects your vision and lifestyle.
            Let’s work together to create a beautiful, functional, and comfortable home for you.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container max-w-6xl mx-auto py-20 px-4 grid md:grid-cols-2 gap-12 ">
        {/* Contact Info */}
        <div className="flex flex-col justify-start space-y-8 py-10">
          <h3 className="text-3xl font-bold text-blue-900">WE ARE HERE FOR YOU!</h3>
          <p className="text-gray-700 text-lg">
            Empowering you with support and solutions.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 mt-1 w-6 h-6" />
              <p className="text-gray-800">1309 Coffeen Avenue Ste 1200, Sheridan, WY 82801.</p>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-600 mt-1 w-6 h-6" />
              <p className="text-gray-800">service@easyhomeservice.com</p>
            </div>
            <div className="flex items-start gap-4">
              <FaPhone className="text-green-600 mt-1 w-6 h-6" />
              <p className="text-gray-800">+1 833-380-9800</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Decorative Circles */}
          <span className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full -translate-x-1/3 -translate-y-1/3"></span>
          <span className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 rounded-full translate-x-1/4 translate-y-1/4"></span>

          <form id="contactForm" method="POST" className="space-y-6 relative z-10">
            <div className="relative">
              <input
                type="text"
                name="name"
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 placeholder-transparent"
                placeholder="Name"
                required
              />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 placeholder-transparent"
                placeholder="Email"
                required
              />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 placeholder-transparent"
                placeholder="Phone"
                required
              />
              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
                Phone
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message"
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-600 outline-none py-3 resize-none placeholder-transparent"
                placeholder="Message"
                rows="4"
                required
              ></textarea>
              <label className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base">
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-4 rounded-2xl hover:bg-blue-700 transition-colors font-semibold shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
