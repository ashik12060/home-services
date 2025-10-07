import React from "react";
import { FaLock } from "react-icons/fa";
import bannerImg from "../../images/inr-s1-img1_about.jpg"; // update path if needed
import btnArrow from "../../images/btn_arw.png";
import lockIcon from "../../images/lock.png";

import bannerBg from '../../images/about_banner.jpg'
// Service Icons
import roofingIcon from "../../images/roofing-img-1.jpg";
import windowIcon from "../../images/windows.svg";
import solarIcon from "../../images/solar.svg";
import hvacIcon from "../../images/hvac.svg";
import bathroomIcon from "../../images/bathroom.svg";
import kitchenIcon from "../../images/kitchen.svg";
import gutterIcon from "../../images/gutter.svg";
import sidingIcon from "../../images/nav-siding.svg";
import walktubIcon from "../../images/walk.svg";
import handymanIcon from "../../images/handyman.png";
import Header from "../../components/Shared/Header/Header";
import Footer from "../../components/Footer";

const services = [
  { name: "Roofing", desc: "Elevate your home's protection and aesthetic appeal with our expert roofing solutions – where quality meets durability, and style meets resilience.", icon: roofingIcon, link: "/roofing" },
  { name: "Windows", desc: "Let natural light and elegant design seamlessly merge in your space with our premium window solutions, crafted to enhance both aesthetics and functionality.", icon: windowIcon, link: "/window" },
  { name: "Solar", desc: "With our state-of-the-art solar solutions, you can embrace sustainability and light up your home while cutting down on carbon emissions.", icon: solarIcon, link: "/solar" },
  { name: "HVAC", desc: "Experience year-round comfort with our advanced HVAC systems, combining efficiency and technology to create the perfect climate.", icon: hvacIcon, link: "/hvac" },
  { name: "Bathroom", desc: "Elevate your bathroom into a luxurious haven with our crafted designs, ensuring a perfect blend of functionality and style.", icon: bathroomIcon, link: "/bathroom" },
  { name: "Kitchen", desc: "Upgrade your kitchen with our custom solutions, merging innovative design, premium materials, and expert artistry.", icon: kitchenIcon, link: "/kitchen" },
  { name: "Gutter", desc: "Protect your home with our durable gutter systems, designed to manage water effectively and enhance property appeal.", icon: gutterIcon, link: "/gutter" },
  { name: "Siding", desc: "Renew your home's exterior with our siding solutions — durable, aesthetic, and built to impress.", icon: sidingIcon, link: "/siding" },
  { name: "Walk-In Tubs", desc: "Enjoy comfort and safety with our stylish walk-in tubs, blending accessibility with luxury.", icon: walktubIcon, link: "/walktub" },
  { name: "Handyman", desc: "Reliable solutions for all your home repairs and improvements by our skilled handyman team.", icon: handymanIcon, link: "/handyman" },
];

const About = () => {
  return (
    <>
    <Header />
    {/* <div className="text-gray-800">
      <section
  className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
  style={{ backgroundImage: `url(${bannerBg})` }}
>
  <div className="absolute inset-0 bg-black/50"></div> 

  <div className="relative container mx-auto px-6 md:px-20 text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Easy Home Service</h1>
    <p className="text-lg md:w-3/4 leading-relaxed">
      Welcome to our home improvement service! We take pride in assisting people with transforming their homes into spaces that reflect their vision and lifestyle.
      At EHS, we believe in creating environments that are both beautiful and functional.
    </p>
  </div>
</section>

      <div  className="bg-gradient-to-r from-green-50 via-white to-green-50">
        <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
              We help people on <br /> Home Improvement Services
            </h2>
            <p className="mb-6 text-gray-700">
              Whether you're looking to revamp a single room or undergo a complete home transformation,
              we provide the expertise and dedication needed to achieve your goals.
            </p>
            <img src={bannerImg} alt="Home improvement experts" className="rounded-2xl shadow-lg w-full" />
          </div>

          <div>
            <p className="mb-4">
              At Easy Home Service, your dependable partner in turning houses into homes. With years of experience,
              our expert team ensures that every project stands out with quality, innovation, and precision.
            </p>
            <p className="mb-6">
              We are driven by the purpose of improving living environments through passion, craftsmanship, and customer focus.
            </p>

            <ul className="list-disc ml-6 mb-6 space-y-2">
              <li>Passionate Craftsmanship</li>
              <li>Comprehensive Services</li>
              <li>Customer-Centric Approach</li>
              <li>Seamless Transformations</li>
            </ul>

            <div className="bg-gray-100 p-6 rounded-2xl shadow-md text-center">
              <p className="text-sm font-semibold text-blue-700 mb-2">Just Takes 2 Minutes</p>
              <button
                onClick={() => (window.location.href = "/allservices")}
                className="bg-blue-800 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto gap-2 hover:bg-blue-900 transition"
              >
                Get Free Quote <img src={btnArrow} alt="arrow" className="w-4" />
              </button>
              <p className="mt-3 text-xs text-gray-600 flex items-center justify-center gap-2">
                <img src={lockIcon} alt="lock" className="w-4" /> Your information is 100% secure & confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-bold mb-12 text-center">What can we help you with?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <a
                href={service.link}
                key={service.name}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center"
              >
                <img src={service.icon} alt={service.name} className="mx-auto mb-4 w-24 h-24 object-contain" />
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">It Works in Just 3 Simple Steps!</h2>
          <p className="text-gray-600 mb-12">
            Watch your dream space come to life with our skilled professionals. Realize your design dreams in a personalized consultation.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
           
            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <h4 className="text-2xl font-semibold mb-3">Step 1</h4>
              <p className="text-white mb-4">
                Tell us about your home improvement needs – whether it's upgrading a{" "}
                <a href="/kitchen" className="underline text-green-400">kitchen</a>, refinishing{" "}
                <a href="/flooring" className="underline text-green-400">floors</a>, or enhancing outdoor spaces.
              </p>
              <div className="bg-white text-black rounded-xl py-4 px-6">
                <p className="font-medium">Enter Your Zip Code</p>
                <button className="border-2 border-blue-900 text-blue-900 w-full mt-3 py-2 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition">
                  Enter Zip
                </button>
              </div>
            </div>

            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <h4 className="text-2xl font-semibold mb-3">Step 2</h4>
              <p className="text-white mb-4">
                Let certified vendors compete to provide the best solution that fits your budget and needs.
              </p>
              <div className="bg-white text-black rounded-xl py-6 px-6 shadow-lg">
                <p className="font-semibold mb-2">Best Match Found</p>
                <div className="flex justify-center items-center">
                  <img src="/images/matthew.jpg" alt="Provider" className="w-16 h-16 rounded-full border-2 border-green-400 mr-3" />
                  <p className="text-sm font-medium text-gray-800">Home Warranty Service Provider</p>
                </div>
              </div>
            </div>

      
            <div className="bg-blue-900 text-white rounded-2xl p-8">
              <h4 className="text-2xl font-semibold mb-3">Step 3</h4>
              <p className="mb-6">
                Save big on seamless home improvement — turning your design into reality without breaking your budget.
              </p>
              <div className="bg-white rounded-xl text-center p-6 shadow-md">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-500 text-2xl">✓</span>
                </div>
                <p className="text-green-600 font-semibold text-lg">Request Submitted!</p>
                <p className="text-gray-500 text-sm">We will contact you soon!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div> */}

      {/* ===== Main Wrapper with global color ===== */}
      <div className="text-gray-800  bg-gradient-to-r from-green-50 via-white to-green-50">

        {/* ===== Banner ===== */}
        <section
          className="relative bg-cover bg-center bg-no-repeat py-20 md:py-28"
          style={{ backgroundImage: `url(${bannerBg})` }}
        >
          <div className="absolute inset-0 bg-blue-900/60"></div>
          <div className="relative container mx-auto px-6 md:px-20 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Easy Home Service</h1>
            <p className="text-lg md:w-3/4 leading-relaxed">
              Welcome to our home improvement service! We take pride in assisting people with transforming their homes into spaces that reflect their vision and lifestyle.
              At EHS, we believe in creating environments that are both beautiful and functional.
            </p>
          </div>
        </section>

        {/* ===== Section 1 ===== */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 leading-snug">
                We help people on <br /> Home Improvement Services
              </h2>
              <p className="mb-6 text-gray-700">
                Whether you're looking to revamp a single room or undergo a complete home transformation,
                we provide the expertise and dedication needed to achieve your goals.
              </p>
              <img src={bannerImg} alt="Home improvement experts" className="rounded-2xl shadow-xl w-full" />
            </div>

            <div>
              <p className="mb-4">
                At Easy Home Service, your dependable partner in turning houses into homes. With years of experience,
                our expert team ensures that every project stands out with quality, innovation, and precision.
              </p>
              <p className="mb-6">
                We are driven by the purpose of improving living environments through passion, craftsmanship, and customer focus.
              </p>

              <ul className="list-disc ml-6 mb-6 space-y-2 text-gray-700">
                <li>Passionate Craftsmanship</li>
                <li>Comprehensive Services</li>
                <li>Customer-Centric Approach</li>
                <li>Seamless Transformations</li>
              </ul>

              <div className="bg-blue-50 p-6 rounded-2xl shadow-md text-center">
                <p className="text-sm font-semibold text-blue-700 mb-2">Just Takes 2 Minutes</p>
                <button
                  onClick={() => (window.location.href = "/allservices")}
                  className="bg-blue-900 text-white px-6 py-3 rounded-full flex items-center justify-center mx-auto gap-2 hover:bg-blue-800 transition"
                >
                  Get Free Quote <img src={btnArrow} alt="arrow" className="w-4" />
                </button>
                <p className="mt-3 text-xs text-gray-600 flex items-center justify-center gap-2">
                  <img src={lockIcon} alt="lock" className="w-4" /> Your information is 100% secure & confidential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Services Grid ===== */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-6 md:px-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-900">What can we help you with?</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <a
                  href={service.link}
                  key={service.name}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 hover:border-blue-200 transition text-center"
                >
                  <img src={service.icon} alt={service.name} className="mx-auto mb-4 w-24 h-24 object-contain" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">{service.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Steps Section ===== */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">It Works in Just 3 Simple Steps!</h2>
            <p className="text-gray-600 mb-12">
              Watch your dream space come to life with our skilled professionals. Realize your design dreams in a personalized consultation.
            </p>

            <div className="grid md:grid-cols-3 gap-10">
              {/* Step 1 */}
              <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-semibold mb-3">Step 1</h4>
                <p className="mb-4">
                  Tell us about your home improvement needs – whether it's upgrading a{" "}
                  <a href="/kitchen" className="underline text-green-400">kitchen</a>, refinishing{" "}
                  <a href="/flooring" className="underline text-green-400">floors</a>, or enhancing outdoor spaces.
                </p>
                <div className="bg-white text-black rounded-xl py-4 px-6">
                  <p className="font-medium">Enter Your Zip Code</p>
                  <button className="border-2 border-blue-900 text-blue-900 w-full mt-3 py-2 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition">
                    Enter Zip
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-semibold mb-3">Step 2</h4>
                <p className="mb-4">
                  Let certified vendors compete to provide the best solution that fits your budget and needs.
                </p>
                <div className="bg-white text-black rounded-xl py-6 px-6 shadow-md">
                  <p className="font-semibold mb-2">Best Match Found</p>
                  <div className="flex justify-center items-center">
                    <img src="/images/matthew.jpg" alt="Provider" className="w-16 h-16 rounded-full border-2 border-green-400 mr-3" />
                    <p className="text-sm font-medium text-gray-800">Home Warranty Service Provider</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-blue-900 text-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-semibold mb-3">Step 3</h4>
                <p className="mb-6">
                  Save big on seamless home improvement — turning your design into reality without breaking your budget.
                </p>
                <div className="bg-white rounded-xl text-center p-6 shadow-md">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-green-500 text-2xl">✓</span>
                  </div>
                  <p className="text-green-600 font-semibold text-lg">Request Submitted!</p>
                  <p className="text-gray-500 text-sm">We will contact you soon!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    <Footer />
    </>
  );
};

export default About;
