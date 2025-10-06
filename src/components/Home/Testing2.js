import React, { useState } from "react";
// import './Testing.css'
import './Testing2.css'
export default function Testing2() {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans">


        {/* <!--top_strip--> */}
    <div class="top_strip">
        <div class="container">
            <p class="top_strip_text mb-0 text-center">Your Go-To for Complete Home Solutions and Trusted Excellence</p>
        </div>
    </div>



<div className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="https://easyhomeservice.com" className="flex items-center">
          <img
            src="/images/easyhomeservice.svg"
            alt="Easyhomeservice"
            className="h-12 w-auto"
          />
        </a>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          {/* Call Bell */}
          <p className="text-sm">
            <span className="inline-block animate-[ring_1s_infinite]">
              <i className="fa fa-bell"></i>
            </span>{" "}
            Need Help?
            <br />
            <a id="header_call" href="/" className="text-green-600 font-semibold">
              Call Us
            </a>
          </p>

          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = "/allservices?clickid=&source=")}
            className="hidden md:inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Get Quote Now
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center bg-gray-100 py-2">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-green-600">Home</a>
          </li>
          <li className="relative group">
            <a href="#" className="flex items-center">
              Services <img src="/images/down-arrow.png" alt="" className="w-4 ml-1" />
            </a>
            {/* Dropdown */}
            <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block">
              <li>
                <a href="/roofing" className="flex items-center px-4 py-2 hover:bg-gray-50">
                  <img src="/images/roofing.svg" alt="" className="w-6 h-6 mr-2" /> Roofing
                </a>
              </li>
              <li>
                <a href="/window" className="flex items-center px-4 py-2 hover:bg-gray-50">
                  <img src="/images/windows.svg" alt="" className="w-6 h-6 mr-2" /> Windows
                </a>
              </li>
              {/* Repeat for other services */}
            </ul>
          </li>
          <li><a href="/about" className="hover:text-green-600">About</a></li>
          <li><a href="/blog" className="hover:text-green-600">Blog</a></li>
          <li><a href="/contact" className="hover:text-green-600">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 px-4 py-4">
          <ul className="space-y-2">
            <li><a href="/about" className="block hover:text-green-600">About</a></li>
            <li><a href="/blog" className="block hover:text-green-600">Blog</a></li>
            <li><a href="/contact" className="block hover:text-green-600">Contact</a></li>
          </ul>
        </nav>
      )}
    </div>


    {/* ................................................................end............. */}
      {/* ===== Header / Navbar ===== */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-green-600">
            EasyHomeService
          </a>
          <nav className="space-x-6 hidden md:flex">
            <a href="#services" className="hover:text-green-600">Services</a>
            <a href="#how" className="hover:text-green-600">How It Works</a>
            <a href="#why" className="hover:text-green-600">Why Us</a>
            <a href="#faq" className="hover:text-green-600">FAQ</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </nav>
          <button className="hidden md:block px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
            Get Quote
          </button>
        </div>
      </header>

      {/* ===== Hero Section ===== */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32 text-center text-white"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="text-sm">Helped 22,400 Customers Find Top Contractors</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Connecting Homeowners with Trusted Home Improvement Experts
          </h1>
          <p className="mt-4 text-lg">
            Need help with Roofing, Windows, Solar, HVAC, Bathroom, Kitchen, Gutter, etc.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            Get A Quote Now
          </button>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Services We Provide</h2>
          <p className="mt-2 text-gray-600">
            Explore a wide range of home improvement services from trusted experts.
          </p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Roofing", "Windows", "Solar", "HVAC", "Bathroom", "Kitchen", "Gutters", "Remodeling"].map((svc, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
                <img src={`/images/${svc.toLowerCase()}.svg`} alt={svc} className="h-12 mx-auto" />
                <h3 className="mt-4 font-semibold">{svc}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How It Works ===== */}
      <section id="how" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="font-semibold">1. Tell Us What You Need</h3>
              <p className="mt-2 text-gray-600">Enter your zip code & project details.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="font-semibold">2. We Match You</h3>
              <p className="mt-2 text-gray-600">Get connected to local trusted pros.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow">
              <h3 className="font-semibold">3. Book & Relax</h3>
              <p className="mt-2 text-gray-600">Schedule your project with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us ===== */}
      <section id="why" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose EasyHomeService?</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">✅ Trusted Pros</div>
            <div className="p-6 bg-white rounded-lg shadow">✅ No Hidden Fees</div>
            <div className="p-6 bg-white rounded-lg shadow">✅ Fast Local Matches</div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">How does this work?</h3>
              <p className="text-gray-600">We connect you with trusted service providers in your area.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">Is it free?</h3>
              <p className="text-gray-600">Yes, requesting a quote is completely free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} EasyHomeService. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
