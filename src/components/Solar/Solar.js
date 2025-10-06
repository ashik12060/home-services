import React from "react";
import roofImg from "../../images/Screenshot (1).png";
import btnArrow from "../../images/btn_arw.png";
import lockIcon from "../../images/lock.png";
import greenCheck from "../../images/bnr_chk.png";
import investIcon from "../../images/investment.png";
import tempIcon from "../../images/temp.png";
import increaseIcon from "../../images/increase.png";
import Header from "../Shared/Header/Header";
import RoofingHero from "../Home/Roofing/RoofingHero";
import HowWorks from "../HowWorks";
import Introduction from "../Introduction";
import ServingStates from "../ServingStates";
import Faq from "../Faq";
import Footer from "../Footer";
import SolarHero from "./SolarHero";

const Solar = () => {


  const benefits = [
    {
      icon: investIcon,
      title: "Safeguard Your Investment",
      description:
        "Ensure the longevity and resilience of your property with professional services tailored to sustainable energy solutions. Trust us for quality installations, repairs, and upgrades aligned with your unique needs.",
    },
    {
      icon: tempIcon,
      title: "Cut Bills, Qualify for Rebates.",
      description:
        "Maintenance enhances efficiency, lowers costs, and extends your green energy system's life. An economical investment in long-term sustainability, qualify for rebates with our skilled repairs.",
    },
    {
      icon: increaseIcon,
      title: "Eco-Friendly Remodels Boost Value.",
      description:
        "Boost your home’s value by investing in sustainable remodeling. Strategic upgrades not only enhance your living experience but also increase market appeal, providing a competitive edge in the real estate market.",
    },
  ];


  return (
   <>
   <Header />
    <SolarHero />
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
            We Help You Save On All

            <br />
            <span className="text-green-600">Your Solar Installation</span>
          </h2>

          <p className="text-gray-700 text-base leading-snug">
           Unlock savings with our expert solar services—cost-effective solutions without compromising quality, ensuring a seamless transition to sustainable energy for your home.
Transform your property with solar power, navigating toward sustainability and financial savings with our expert guidance.
          </p>

          <p className="text-base font-semibold text-gray-800 leading-snug">
          Empower Your Home with Radiant Energy: Seamless Solar Solutions Tailored to You!
          </p>

          {/* ✅ Services List with Green Check */}
          <ul className="space-y-2">
            {[
              "Tailored Solar Solutions.",
              "Budget-Friendly Transitions..",
              "Expert Solar Services.",
              "Radiant Energy for Your Home.",
              
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



    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Benefits of Solar <br />
          <span className="text-green-600">Installation, Repair & Upgrade</span>
        </h3>

        <p className="text-gray-700 text-base mb-10 max-w-3xl mx-auto lg:mx-0">
         Unlock the advantages of solar energy with our expert services: installation, repair, and upgrades tailored to your needs.
Upgrade to keep your solar system at the forefront of sustainability.
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

export default Solar;
