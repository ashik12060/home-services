import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import star from "../../../images/star.png";
import lock from "../../../images/lock.png";
import bnr_rev_people from "../../../images/bnr_rev_people.png";
import herobg from "../../../images/hero-main.jpeg";
import "../../PlumbingForm/PlumbingForm";
import FormSubmit from "../../FormSubmit/FormSubmit";

const RoofingHero = () => {
  const formRef = useRef();
  const [submitText, setSubmitText] = useState("Book Appointment");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set hidden tracking fields & get IP/location
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    form.lead_id.value =
      "PLUMB-" + Date.now() + "-" + Math.floor(Math.random() * 100000);
    form.timestamp.value = new Date().toISOString();
    form.user_agent.value = navigator.userAgent;
    form.referrer.value = document.referrer;
    form.page_url.value = window.location.href;

    const urlParams = new URLSearchParams(window.location.search);
    form.utm_source.value = urlParams.get("utm_source") || "";
    form.utm_medium.value = urlParams.get("utm_medium") || "";
    form.utm_campaign.value = urlParams.get("utm_campaign") || "";

    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((data) => {
        form.ip_address.value = data.ip;
        form.location.value = `${data.city}, ${data.region}, ${data.country}`;
      })
      .catch((err) => console.error("IP lookup failed:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitText("Sending...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        alert("✅ Lead submitted successfully!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("❌ Failed to send. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
        setSubmitText("Book Appointment");
      });
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative py-12"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className=" py-12" id="top_form">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">

          <div className="flex flex-col justify-left">
            <p className="mb-4 flex items-left gap-2">
              <img src={star} className="w-24" alt="star" />
              Helped 22,400 Customers Find Top Contractors
              <img src={bnr_rev_people} className="w-24" alt="reviews" />
            </p>


            <h1 className="text-5xl font-bold mb-6">
              Work With The Best Roofing
Experts <br />  Near You
            </h1>

            <div className="flex items-center gap-3">
              <img src={lock} alt="lock" className="w-12 h-12" />
              <p className="text-gray-700">
                Your information is 100% secure & confidential.
              </p>
            </div>
          </div>
          {/* Left Form */}
          {/* <form
            ref={formRef}
            className="bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Request Plumbing Service
            </h2>

            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="service" className="block font-medium mb-1">
                Service Needed
              </label>
              <select
                name="service"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              >
                <option value="">-- Select Service --</option>
                <option value="leak">Leak Repair</option>
                <option value="drain">Drain Cleaning</option>
                <option value="waterheater">Water Heater Repair</option>
                <option value="install">New Installation</option>
              </select>
            </div>

            <div className="mb-4 text-sm text-gray-600">
              <label className="flex items-start">
                <input type="checkbox" name="consent" className="mr-2 mt-1" />
                By clicking submit, I acknowledge and consent to being contacted
                regarding this inquiry. Your information will be used solely to
                respond to your inquiry.
              </label>
            </div>

          
            <input type="hidden" name="lead_id" />
            <input type="hidden" name="timestamp" />
            <input type="hidden" name="user_agent" />
            <input type="hidden" name="ip_address" />
            <input type="hidden" name="location" />
            <input type="hidden" name="referrer" />
            <input type="hidden" name="page_url" />
            <input type="hidden" name="utm_source" />
            <input type="hidden" name="utm_medium" />
            <input type="hidden" name="utm_campaign" />

            <button
              type="submit"
              className={`w-full py-3 rounded text-white font-semibold ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              disabled={isSubmitting}
            >
              {submitText}
            </button>
          </form> */}
          <FormSubmit />

          {/* Right Banner */}

          
        </div>
      </div>
    </div>
  );
};

export default RoofingHero;
