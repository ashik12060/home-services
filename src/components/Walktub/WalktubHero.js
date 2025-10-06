
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import star from "../../images/star.png";
import lock from "../../images/lock.png";
import bnr_rev_people from "../../images/bnr_rev_people.png";
import herobg from "../../images/hero-main.jpeg";
import FormSubmit from "../FormSubmit/FormSubmit";

const WalktubHero = () => {
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
      className="bg-cover bg-center bg-no-repeat relative pt-12 md:pt-20 pb-16"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
        {/* LEFT SECTION — TEXT */}
        <div className="flex flex-col justify-start mt-6">
          <p className="mb-4 flex items-center gap-2 text-blue-900">
            <img src={star} className="w-20 md:w-24" alt="star" />
            Helped 22,400 Customers Find Top Contractors
            <img src={bnr_rev_people} className="w-20 md:w-24" alt="reviews" />
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-blue-900">
           


             Find & Hire <br /> The Best Walk Tub <br /> Experts in No Time!
          </h1>

          <div className="flex items-center gap-3 bg-white/80 rounded-xl shadow-md p-3 w-fit">
            <img src={lock} alt="lock" className="w-10 h-10" />
            <p className="text-gray-800 text-sm md:text-base  text-blue-900">
              Your information is <span className="font-semibold">100% secure</span> & confidential.
            </p>
          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="mt-8 md:mt-0">
          <FormSubmit
            formRef={formRef}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitText={submitText}
          />
        </div>
      </div>
    </div>
  );
};

export default WalktubHero;
