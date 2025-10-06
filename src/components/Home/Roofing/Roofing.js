import React from "react";
import roofImg from "../../../images/Affordable Roofing Experts Best Roofers Near You.png";
import roofImg2 from "../../../images/roofing-img-1.jpg";
import btnArrow from "../../../images/btn_arw.png";
import lockIcon from "../../../images/lock.png";
import greenCheck from "../../../images/bnr_chk.png";
import investIcon from "../../../images/investment.png";
import tempIcon from "../../../images/temp.png";
import increaseIcon from "../../../images/increase.png";
import HowWorks from "../../HowWorks";
import Introduction from "../../Introduction";
import ServingStates from "../../ServingStates";
import Faq from "../../Faq";
import Footer from "../../Footer";
import Header from "../../Shared/Header/Header";
import RoofingHero from "./RoofingHero";



// import btnArrow from "../../../images/btn_arw.png";
// import lockIcon from "../../../images/lock.png";
const Roofing = () => {


  const benefits = [
    {
      icon: investIcon,
      title: "To Protect Your Investment",
      description:
        "The best roofing experts stop leaks, mold, and hidden structural damage before they start — keeping your home and family safe from weather-related surprises.",
    },
    {
      icon: tempIcon,
      title: "Repairs Cut Bills, Qualify for Rebates",
      description:
        "Smart homeowners search for affordable housing because timely residential roofing repairs cost far less than full replacements. Catch it early, fix it fast, save big.",
    },
    {
      icon: increaseIcon,
      title: "Increase Home Value: Remodel or Sell",
      description:
        "A professionally upgraded roof improves insulation, lowers utility bills, and increases resale value — especially when installed by the best roofers near you who know your region’s climate.",
    },
  ];


  return (
   <>
   <Header />
    <RoofingHero />
    <section className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-12 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Right Side Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <img
              src={roofImg}
              alt="Affordable Roofing Experts Best Roofers Near You"
              className="rounded-xl shadow-xl transform group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 rounded-xl ring-2 ring-green-200 opacity-50 group-hover:opacity-100 transition"></div>
          </div>
        </div>


        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Residential Roofing Repairs Done Right
            <br />
            <span className="text-green-600">Backed by Trusted Experts</span>
          </h2>

          <p className="text-gray-700 text-base leading-snug">
            Your roof is your home's first line of defense — don’t trust it to just anyone.  
            With certified roofing experts, we deliver permanent solutions, not temporary fixes.  
            Whether it’s storm damage or a simple leak, we’ve got you covered.
          </p>

          <p className="text-base font-semibold text-gray-800 leading-snug">
            Here’s what we can do for your home:
          </p>

          {/* ✅ Services List with Green Check */}
          <ul className="space-y-2">
            {[
              "Emergency Roof Leak Fixes — Available 24/7 in select locations.",
              "Asphalt Shingle Replacement — Multiple colors and grades for every budget.",
              "Storm & Hail Damage Repair — Even light hail can void warranties, get it checked.",
              "Gutter & Flashing Repair — Seamless upgrades for long-term peace of mind.",
              "Skylight Sealing & Leak Repair — We work with all major skylight brands.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start text-gray-700 text-sm leading-snug">
                <img
                  src={greenCheck}
                  alt="check"
                  className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0"
                />
                <span>{item}</span>
              </li>
            ))}

            {/* Nested Normal Bullets */}
            <li className="flex flex-col text-gray-700 text-sm leading-snug">
              <div className="flex items-start font-semibold">
                <img
                  src={greenCheck}
                  alt="check"
                  className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0"
                />
                Full Roof Installation & Upgrades
              </div>
              <ul className="list-disc pl-8 mt-1 space-y-1 text-left text-gray-600 text-sm leading-snug">
                <li>Tailored material suggestions for your location</li>
                <li>Upfront estimates with no surprises</li>
                <li>Complete tear-off and install</li>
                <li>Clean site handover</li>
              </ul>
            </li>
          </ul>

          {/* CTA Box */}
          <div className="bg-green-600 text-white p-5 rounded-xl shadow-md mt-8">
            <p className="text-xs uppercase tracking-wide font-bold opacity-80">
              Just Takes 2 Minutes
            </p>
            <a
              href="roofing-steps?clickid=&source="
              className="inline-flex items-center bg-white text-green-700 font-semibold px-5 py-2.5 rounded-lg shadow mt-2 hover:bg-green-50 transition"
            >
              Talk to a Roofing Expert
              <img src={btnArrow} alt="arrow" className="ml-2 w-3 h-4" />
            </a>
            <p className="flex items-center text-xs mt-3 opacity-90">
              <img src={lockIcon} alt="lock" className="w-4 h-4 mr-2" />
              Your information is 100% secure & confidential.
            </p>
          </div>
        </div>

        
      </div>
    </section>


 <section className="bg-gray-50 py-16 text-left">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Why Regular Roofing Inspections <br />
          <span className="text-green-600">Save You Money</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src={roofImg2}
              alt="Roofing Inspection"
              className="rounded-xl shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 space-y-4 text-gray-700 text-base">
            <p>
              Waiting for visible leaks is like waiting for your ceiling to send an invoice. 
              Most roof issues start quietly — and by the time you notice them, you’re already spending more than you should.
            </p>

            <p>Our best roofing experts recommend at least one inspection per year, especially if:</p>

            {/* <ul className=" space-y-2 text-gray-600 pl-2">
              <li>Your roof is older than 10 years.</li>
              <li>You’ve recently experienced a storm or strong wind.</li>
              <li>You see small signs like stains on ceilings or cracked shingles.</li>
            </ul> */}

            <ul className="space-y-2 pl-4">
  <li className="relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4">
    Your roof is older than 10 years.
  </li>
  <li className="relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4">
    You’ve recently experienced a storm or strong wind.
  </li>
  <li className="relative before:content-[''] before:absolute before:w-2 before:h-2 before:bg-green-600 before:rounded-full before:left-0 before:top-1/2 before:-translate-y-1/2 pl-4">
    You see small signs like stains on ceilings or cracked shingles.
  </li>
</ul>


            <p>Early inspections = smaller repairs, less damage, and longer roof life.</p>

            <p>Need help fast? Search for affordable roofing near me and we’ll match you with a local expert today.</p>

            {/* CTA Box */}
            <div className="bg-green-600 text-white p-5 rounded-xl shadow-md mt-6">
              <p className="text-xs uppercase tracking-wide font-bold opacity-80">
                Just Takes 2 Minutes
              </p>
              <button
                onClick={() => window.location.href='roofing-steps?clickid=&source='}
                className="inline-flex items-center bg-white text-green-700 font-semibold px-5 py-2.5 rounded-lg shadow mt-2 hover:bg-green-50 transition"
              >
                Get a Roof Inspection
                <img src={btnArrow} alt="arrow" className="ml-2 w-3 h-4" />
              </button>
              <p className="flex items-center text-xs mt-3 opacity-90">
                <img src={lockIcon} alt="lock" className="w-4 h-4 mr-2" />
                Your information is 100% secure & confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Benefits of Roofing <br />
          <span className="text-green-600">Installation, Repair & Upgrade</span>
        </h3>

        <p className="text-gray-700 text-base mb-10 max-w-3xl mx-auto lg:mx-0">
          Roofing installation by the best roofing experts protects your home’s structure and prevents weather damage, 
          while timely roofing repairs avoid costly issues. Upgrades from the best roofers improve energy efficiency, 
          curb appeal, and property value.
        </p>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-2 border-blue-900  duration-300 text-left flex flex-col items-center"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12 mb-4" />
              <h4 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-green-600 text-white p-5 rounded-2xl shadow-md mt-10 max-w-md mx-auto lg:mx-0">
          <p className="text-xs uppercase tracking-wide font-bold opacity-80">
            Just Takes 2 Minutes
          </p>
          <button
            onClick={() => window.location.href = "roofing-steps?clickid=&source="}
            className="inline-flex items-center bg-white text-green-700 font-semibold px-5 py-2.5 rounded-lg shadow mt-2 hover:bg-green-50 transition"
          >
            Fix My Leak Now
            <img src={btnArrow} alt="arrow" className="ml-2 w-3 h-4" />
          </button>
          <p className="flex items-center text-xs mt-3 opacity-90">
            <img src={lockIcon} alt="lock" className="w-4 h-4 mr-2" />
            Your information is 100% secure & confidential.
          </p>
        </div>
      </div>
    </section>

    <HowWorks />
    <Introduction />
    <ServingStates />
    <Faq />
    <Footer />


   </>

  );
};

export default Roofing;
