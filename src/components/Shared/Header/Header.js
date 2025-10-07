import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import easyhomeservice from '../../../images/easyhomeservice.svg';
import downarrow from '../../../images/down-arrow.png';


import s1_help_icon1 from "../../../images/s1_help_icon1.png";
import s1_help_icon2 from "../../../images/s1_help_icon2.png";
import s1_help_icon3 from "../../../images/s1_help_icon3.png";
import s1_help_icon4 from "../../../images/s1_help_icon4.png";
import s1_help_icon5 from "../../../images/s1_help_icon5.png";
import iconhandyman from "../../../images/handyman.png";
import iconhomewarranty from "../../../images/iconhomewarranty.svg";
import s1_help_icon6 from "../../../images/s1_help_icon6.png";
import s1_help_icon7 from "../../../images/s1_help_icon7.png";
import s1_help_icon10 from "../../../images/s1_help_icon10.png";
import viewallicon from "../../../images/viewallicon.svg";
import btnArrow from "../../../images/btn_arw.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
  { name: "Roofing", href: "/roofing", icon: s1_help_icon1 },
  { name: "Windows", href: "/window", icon: s1_help_icon2 },
  { name: "Solar", href: "/solar", icon: s1_help_icon3 },
  { name: "HVAC", href: "/hvac", icon: s1_help_icon4 },
  { name: "Bathroom", href: "/bathroom", icon: s1_help_icon5 },
  { name: "Kitchen", href: "/kitchen", icon: s1_help_icon6 },
  { name: "Gutter", href: "/gutter", icon: s1_help_icon7 },
  { name: "Walk-In Tubs", href: "/walktub", icon: s1_help_icon10 },
  { name: "Handyman", href: "/handyman", icon: iconhandyman },
  { name: "Home Warranty", href: "/homewarranty", icon: iconhomewarranty },
  { name: "Flooring", href: "/flooring", icon: s1_help_icon3 },
  { name: "Siding", href: "/siding", icon: s1_help_icon4 },
  { name: "View All", href: "/allservices", icon: viewallicon },
];


  return (
    <header className="relative">
      {/* Top Strip */}
      <div className="bg-blue-900 text-white py-2 text-center text-sm">
        Your Go-To for Complete Home Solutions and Trusted Excellence
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to='/'>
            <img
              src={easyhomeservice}
              alt="Easyhomeservice"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center text-xl space-x-6">
            <a href="/" className="text-blue-900 hover:text-green-600">Home</a>

           

            {/* Services Dropdown */}
<div 
  className="relative"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>
  <button
    onClick={() => setServicesOpen(!servicesOpen)}
    className="flex items-center space-x-1 text-blue-900 hover:text-green-600"
  >
    <span>Services</span>
    <img src={downarrow} alt="arrow" className="h-2 w-3" />
  </button>

  {servicesOpen && (
    <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-4 min-w-[400px] grid grid-cols-2 gap-2">
      {services.map((service) => (
        <li key={service.name} className="flex items-center hover:bg-gray-100 rounded-md p-1">
          <a href={service.href} className="flex items-center gap-2">
            <img src={service.icon} alt={service.name} className="w-6 h-6" />
            <span>{service.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )}
</div>


            <a href="/about" className="text-blue-900 hover:text-green-600">About</a>
            <a href="/contact" className="text-blue-900 hover:text-green-600">Contact</a>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Column for Need Help + Phone */}
            <div className="flex flex-col items-start text-blue-900">
              <p className="flex items-center gap-1 font-serif">
                <FaBell className="animate-[ring_1s_infinite]" />
                NEED HELP?
              </p>
              <p className="font-bold text-2xl">+8801317424004</p>
            </div>

            {/* Get Quote Button */}
            <button
              onClick={() => window.location.href="/allservices?clickid=&source="}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Get Quote Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="space-y-1"
            >
              <div className="w-6 h-0.5 bg-gray-700"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col p-4 space-y-2">
              <li><a href="/" className="text-gray-700">Home</a></li>
              <li>
                <button
                  className="flex justify-between w-full text-gray-700"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <span>{mobileServicesOpen ? "-" : "+"}</span>
                </button>
                {mobileServicesOpen && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {services.map((service) => (
                      <li key={service.name}>
                        <a href={service.href} className="flex items-center gap-2 text-gray-600">
                          <img src={service.icon} alt={service.name} className="w-5 h-5" />
                          <span>{service.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li><a href="/about" className="text-gray-700">About</a></li>
              <li><a href="/blog" className="text-gray-700">Blog</a></li>
              <li><a href="/contact" className="text-gray-700">Contact</a></li>
              <li>
                <button
                  onClick={() => window.location.href="/allservices?clickid=&source="}
                  className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
                >
                  Get Quote Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Tailwind Animation for Bell */}
      <style>
        {`
          @keyframes ring {
            0% { transform: rotate(0); }
            15% { transform: rotate(15deg); }
            30% { transform: rotate(-10deg); }
            45% { transform: rotate(10deg); }
            60% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
            100% { transform: rotate(0); }
          }
        `}
      </style>
    </header>
  );
};

export default Header;
