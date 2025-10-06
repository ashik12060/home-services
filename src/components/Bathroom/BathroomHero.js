
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import star from "../../images/star.png";
import lock from "../../images/lock.png";
import bnr_rev_people from "../../images/bnr_rev_people.png";
import herobg from "../../images/hero-main.jpeg";
import FormSubmit from "../FormSubmit/FormSubmit";

const BathroomHero = () => {
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
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-12 md:pt-16 pb-20"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      <div className="relative container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left Content */}
        <div className="text-blue-900 space-y-6 mt-4 md:mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <img src={star} alt="Star" className="w-20 md:w-24" />
            <p className="text-lg md:text-xl font-medium">
              Helped <span className="font-bold text-orange-500">22,400+</span>{" "}
              Customers Find Top Contractors
            </p>
            <img src={bnr_rev_people} alt="People" className="w-20 md:w-24" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-lg">
            Find & Hire <br /> The Best Bathroom <br /> Experts in No Time!
          </h1>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl w-fit">
            <img src={lock} alt="Lock" className="w-10 h-10" />
            <p className="text-sm md:text-base text-blue-800">
              Your information is{" "}
              <span className="font-semibold text-blue-900">
                100% secure
              </span>{" "}
              & confidential.
            </p>
          </div>

          <button
            onClick={() =>
              document.getElementById("top_form")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md transition-transform duration-200 hover:scale-105"
          >
            Get Free Estimate
          </button>
        </div>

        {/* Right Form Section */}
        <div
          id="top_form"
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 mt-10 md:mt-0"
        >
          <FormSubmit
            formRef={formRef}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitText={submitText}
          />
        </div>
      </div>
    </section>
  );
};

export default BathroomHero;
