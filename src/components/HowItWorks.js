import React, { useState } from 'react'
import howItWorks from '../images/how-it-works-1.png'
import btn_arw from '../images/btn_arw.png'
import s3BoxImg from "../images/s3_box_img.jpg"
import btnArrow from "../images/btn_arw.png";
import roofingIcon from "../images/s1_help_icon1.png";
import windowIcon from "../images/s1_help_icon2.png";
import solarIcon from "../images/s1_help_icon3.png";
import hvacIcon from "../images/s1_help_icon4.png";
import bathroomIcon from "../images/s1_help_icon5.png";
import handymanIcon from "../images/handyman.png";
import warrantyIcon from "../images/iconhomewarranty.svg";
import kitchenIcon from "../images/s1_help_icon6.png";
import gutterIcon from "../images/s1_help_icon7.png";
import walktubIcon from "../images/s1_help_icon10.png";

// import btnArrow from "../images/btn_arw.png";

import { ComposableMap, Geographies, Geography,Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import HowWorks from './HowWorks';
import Introduction from './Introduction';
import Faq from './Faq';
import Footer from './Footer';
import Header from './Shared/Header/Header';
import RoofingHero from './Home/Roofing/RoofingHero';

const geoUrl =
  "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";


const statesList = [
  { name: "Alabama", abbr: "AL" },
  { name: "Alaska", abbr: "AK" },
  { name: "Arizona", abbr: "AZ" },
  { name: "Arkansas", abbr: "AR" },
  { name: "California", abbr: "CA" },
  { name: "Colorado", abbr: "CO" },
  { name: "Connecticut", abbr: "CT" },
  { name: "Delaware", abbr: "DE" },
  { name: "Florida", abbr: "FL" },
  { name: "Georgia", abbr: "GA" },
  { name: "Hawaii", abbr: "HI" },
  { name: "Idaho", abbr: "ID" },
  { name: "Illinois", abbr: "IL" },
  { name: "Indiana", abbr: "IN" },
  { name: "Iowa", abbr: "IA" },
  { name: "Kansas", abbr: "KS" },
  { name: "Kentucky", abbr: "KY" },
  { name: "Louisiana", abbr: "LA" },
  { name: "Maine", abbr: "ME" },
  { name: "Maryland", abbr: "MD" },
  { name: "Massachusetts", abbr: "MA" },
  { name: "Michigan", abbr: "MI" },
  { name: "Minnesota", abbr: "MN" },
  { name: "Mississippi", abbr: "MS" },
  { name: "Missouri", abbr: "MO" },
  { name: "Montana", abbr: "MT" },
  { name: "Nebraska", abbr: "NE" },
  { name: "Nevada", abbr: "NV" },
  { name: "New Hampshire", abbr: "NH" },
  { name: "New Jersey", abbr: "NJ" },
  { name: "New Mexico", abbr: "NM" },
  { name: "New York", abbr: "NY" },
  { name: "North Carolina", abbr: "NC" },
  { name: "North Dakota", abbr: "ND" },
  { name: "Ohio", abbr: "OH" },
  { name: "Oklahoma", abbr: "OK" },
  { name: "Oregon", abbr: "OR" },
  { name: "Pennsylvania", abbr: "PA" },
  { name: "Rhode Island", abbr: "RI" },
  { name: "South Carolina", abbr: "SC" },
  { name: "South Dakota", abbr: "SD" },
  { name: "Tennessee", abbr: "TN" },
  { name: "Texas", abbr: "TX" },
  { name: "Utah", abbr: "UT" },
  { name: "Vermont", abbr: "VT" },
  { name: "Virginia", abbr: "VA" },
  { name: "Washington", abbr: "WA" },
  { name: "West Virginia", abbr: "WV" },
  { name: "Wisconsin", abbr: "WI" },
  { name: "Wyoming", abbr: "WY" },
];


const HowItWorks = () => {

   const redirectToCategory = (category) => {
    window.location.href = `/${category}`;
  };


  const handleStateClick = (geo) => {
    alert(`Clicked on ${geo.properties.name}`);
    // Here you can redirect to state-specific service page
    // window.location.href = `/services/${geo.properties.name.toLowerCase()}`;
  };

  const services = [
    { name: "Roofing", icon: roofingIcon, slug: "roofing" },
    { name: "Windows", icon: windowIcon, slug: "window" },
    { name: "Solar", icon: solarIcon, slug: "solar" },
    { name: "HVAC", icon: hvacIcon, slug: "hvac" },
    { name: "Bathroom", icon: bathroomIcon, slug: "bathroom" },
    { name: "Handyman", icon: handymanIcon, slug: "handyman" },
    { name: "Home Warranty", icon: warrantyIcon, slug: "homewarranty" },
    { name: "Kitchen", icon: kitchenIcon, slug: "kitchen" },
    { name: "Gutter", icon: gutterIcon, slug: "gutter" },
    { name: "Walk-In Tubs", icon: walktubIcon, slug: "walktub" },
  ];




  const faqs = [
  {
    question: "How does homeowner get a call?",
    answer: (
      <>
        <p>The process is simple:</p>
        <ol className="list-decimal ml-5 mt-2 space-y-1">
          <li>Enter your zip code and select the type of service you need.</li>
          <li>Provide details about your project, including the timeline and location.</li>
          <li>Share your contact information for seamless communication.</li>
          <li>Get matched with the best service providers and choose the one that fits your needs.</li>
        </ol>
      </>
    ),
  },
  {
    question: "What types of home services do you offer?",
    answer: (
      <>
        <p>We cover a wide range of affordable home services providers, including:</p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li><a href="https://easyhomeservice.com/plumbing" className="text-green-600 underline">Plumbing</a> and <a href="https://easyhomeservice.com/electrical" className="text-green-600 underline">electrical</a></li>
          <li><a href="https://easyhomeservice.com/roofing" className="text-green-600 underline">Roofing</a>, <a href="https://easyhomeservice.com/hvac" className="text-green-600 underline">HVAC Maintenance</a>, <a href="https://easyhomeservice.com/flooring" className="text-green-600 underline">Flooring</a> & <a href="https://easyhomeservice.com/window" className="text-green-600 underline">Window Installation/Repair</a></li>
          <li>Landscaping and <a href="https://easyhomeservice.com/pestcontrol" className="text-green-600 underline">pest control</a></li>
          <li><a href="https://easyhomeservice.com/kitchen" className="text-green-600 underline">Kitchen</a> and <a href="https://easyhomeservice.com/bathroom" className="text-green-600 underline">Bathroom remodeling</a></li>
          <li>General home improvements</li>
        </ul>
      </>
    ),
  },
  {
    question: "Are the service providers vetted?",
    answer: <p>Yes, we thoroughly vet all our service providers to confirm that they hold licenses, possess experience, and demonstrate reliability. You can trust that you're being connected to top-tier professionals.</p>,
  },
  {
    question: "How much does it cost to use Easy Home Service?",
    answer: <p>Easy Home Service is free for homeowners. The only payment made is to the service provider for the job they do, as negotiated and agreed upon.</p>,
  },
  {
    question: "Can I get a quote or offer free estimates before committing to a service provider?",
    answer: <p>Absolutely! You will receive multiple quotes or free estimates once you provide the details of the project. You can compare the quotes and choose the best home improvement experts according to your needs and budget.</p>,
  },
];


const [openIndex, setOpenIndex] = useState(0); // First FAQ open by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

  
<HowWorks />

    <Introduction />

    {/* sectin 4 */}
   <div className="section_4 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Top-Rated Home Remodeling Experts Near You
            <span className="block text-green-600">
              Quality You Can Trust!
            </span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-green-500 mx-auto rounded"></div>
        </div>

        {/* Description + Services */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              Finding{" "}
              <span className="font-semibold text-gray-900">
                construction home remodeling experts near you
              </span>{" "}
              shouldn’t be stressful or expensive. At{" "}
              <span className="font-semibold text-gray-900">
                Easy Home Service
              </span>
              , we connect you with trusted general contractors and top-rated
              home remodeling experts.
            </p>
            <p>
              Whether you’re planning a{" "}
              <a
                href="https://easyhomeservice.com/blog/the-art-of-sustainable-kitchen-design-balancing-style-and-environmental-impact"
                target="_blank"
                className="text-green-600 hover:text-green-700 underline"
              >
                kitchen remodel
              </a>
              ,{" "}
              <a
                href="https://easyhomeservice.com/bathroom"
                target="_blank"
                className="text-green-600 hover:text-green-700 underline"
              >
                bathroom renovation
              </a>
              ,{" "}
              <a href="#" className="text-green-600 hover:text-green-700 underline">
                window replacement
              </a>
              , or a{" "}
              <a
                href="https://easyhomeservice.com/blog/2025-Home-Improvement-Trends-Upgrades-for-a-Stylish-Home"
                target="_blank"
                className="text-green-600 hover:text-green-700 underline"
              >
                full home upgrade
              </a>
              , our platform makes it simple.
            </p>
            <p>
              Expect{" "}
              <span className="font-semibold text-gray-900">quality work</span>,{" "}
              <span className="font-semibold text-gray-900">transparent pricing</span>, 
              and a{" "}
              <span className="font-semibold text-gray-900">
                stress-free experience
              </span>
              —all just a few clicks away.
            </p>
            <p className="font-medium text-gray-900">
              Start your project today and discover a smarter way to remodel
              your home.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => redirectToCategory(service.slug)}
                className="cursor-pointer bg-white rounded-xl shadow-md p-6 text-center 
                           hover:shadow-xl hover:-translate-y-1 hover:bg-green-50 
                           transition-all duration-300"
              >
                <img
                  src={service.icon}
                  alt={service.name}
                  className="w-14 h-14 mx-auto mb-3"
                />
                <p className="text-gray-800 font-semibold">{service.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => redirectToCategory("allservices")}
            className="px-8 py-4 rounded-xl text-white font-semibold 
                       bg-gradient-to-r from-green-600 to-green-700 
                       shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto 
                       transition-all duration-300"
          >
            Get A Quote Now
            <img src={btnArrow} alt="arrow" className="w-3 h-4" />
          </button>
          <p className="text-gray-600 mt-3 text-sm italic">
            We Just Make it Easier.
          </p>
        </div>
      </div>
    </div>

    <div className="section_4 py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-14 max-w-3xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Why Choose <span className="text-green-600">Easy Home Service</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        A hassle-free and expert-driven home improvement experience — 
        delivering results that exceed expectations every time.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          icon: "fas fa-user-check",
          title: "Verified Pros, No Guesswork",
          desc: "Every expert on our platform is vetted, so you can hire with confidence.",
        },
        {
          icon: "fas fa-bolt",
          title: "Fast, Local Matches",
          desc: "Tell us what you need — we’ll connect you with top-rated pros in your area, fast.",
        },
        {
          icon: "fas fa-star",
          title: "Real Reviews. Real Results.",
          desc: "No fluff, just honest feedback from real customers, so you know what to expect.",
        },
        {
          icon: "fas fa-eye-slash",
          title: "No Hidden Fees",
          desc: "What you see is what you pay. No surprises. No shady upsells.",
        },
        {
          icon: "fas fa-layer-group",
          title: "All Services, One Platform",
          desc: (
            <>
              From{" "}
              <a
                href="https://easyhomeservice.com/plumbing"
                className="text-green-600 underline"
              >
                plumbing
              </a>{" "}
              to{" "}
              <a
                href="https://easyhomeservice.com/roofing"
                className="text-green-600 underline"
              >
                roofing
              </a>
              , we’ve got every job covered — all in one place.
            </>
          ),
        },
        {
          icon: "fas fa-headset",
          title: "Support That Actually Supports",
          desc: "Questions? Concerns? We’re here for you, with real people ready to help.",
        },
      ].map((card, idx) => (
        <div
          key={idx}
          className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
        >
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-600 to-green-400 text-white rounded-full mb-6 shadow-md">
            <i className={`${card.icon} text-2xl`}></i>
          </div>
          {/* Content */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            {card.title}
          </h3>
          <p className="text-gray-600">{card.desc}</p>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-16">
      <button
        onClick={() => redirectToCategory("allservices")}
        className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-800 text-white px-10 py-4 rounded-xl shadow-lg flex items-center gap-3 mx-auto transition transform hover:scale-105"
      >
        Get A Quote Now
        <img src={btnArrow} alt="arrow" className="w-4 h-5" />
      </button>
      <p className="mt-4 text-gray-600 text-sm">
        We Just Make it easier.
      </p>
    </div>
  </div>
</div>


<div className="section_4 py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        What Our <span className="text-green-600">Clients Say</span>
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Real stories from real homeowners who trusted us with their projects.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-3 gap-10">
      {[
        {
          quote:
            "We needed multiple repairs done before listing our house, and Easy Home Service helped us find trustworthy professionals for everything — windows, gutter repair, painting, and minor plumbing. Huge time saver.",
          author: "Tina & Marcus D.",
          location: "Tempe, AZ",
        },
        {
          quote:
            "Our roof suddenly started leaking and we had no idea what to do. I found the site and figured I’d give it a shot. Honestly, I wasn’t expecting much, but I got connected to a local roofer that same day. Lifesaver!",
          author: "Rachel P.",
          location: "Kansas City, MO",
        },
        {
          quote:
            "I submitted a request for some small home fixes — it took a couple of days to coordinate, but once the handyman arrived, he took care of everything in one go. Great experience overall.",
          author: "George W.",
          location: "Sacramento, CA",
        },
      ].map((t, idx) => (
        <div
          key={idx}
          className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-600 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md">
            <i className="bi bi-quote text-xl"></i>
          </div>

          {/* Content */}
          <blockquote className="mt-6 text-gray-700 italic leading-relaxed">
            {t.quote}
          </blockquote>
          <div className="mt-6 text-center">
            <h3 className="font-semibold text-gray-900">{t.author}</h3>
            <p className="text-sm text-gray-500">{t.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>



    <section className="py-16 bg-gradient-to-b from-green-50 to-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10">
          We Serve All Across the <span className="text-green-600">United States</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
       
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-gray-700">
            {statesList.map((state, idx) => (
              <span
                key={idx}
                className="hover:shadow-md hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 hover:text-white transition cursor-pointer"
              >
                {state.name} ({state.abbr})
              </span>
            ))}
          </div>


          <div className="w-full flex justify-center">
            <ComposableMap projection="geoAlbersUsa" className="w-full max-w-xl">
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const centroid = geoCentroid(geo);
                    const state = statesList.find(
                      (s) => s.name === geo.properties.name
                    );

                    return (
                      <g key={geo.rsmKey}>
                        <Geography
                          geography={geo}
                          onClick={() => handleStateClick(geo)}
                          style={{
                            default: { fill: "#8b5cf6", outline: "none" }, 
                            hover: { fill: "#2563eb", outline: "none" }, 
                            pressed: { fill: "#1e40af", outline: "none" },
                          }}
                        />
                        {centroid[0] && centroid[1] && state && (
                          <Marker coordinates={centroid}>
                            <text
                              y={2}
                              textAnchor="middle"
                              style={{ fontFamily: "Arial", fontSize: 10, fill: "#fff", fontWeight: "bold" }}
                            >
                              {state.abbr}
                            </text>
                          </Marker>
                        )}
                      </g>
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>

      
        <div className="hidden">
          {statesList.map((state, idx) => (
            <span key={idx} data-state={state.name}></span>
          ))}
        </div>
      </div>
    </section>

<Faq />

<Footer />


    </>
  )
}

export default HowItWorks;