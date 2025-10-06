import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <>
         <footer className=" py-20">
  <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
    {/* Links */}
    <div className="flex flex-wrap justify-center gap-4 text-md">
      <a href="/terms" className="hover:text-green-600 transition">Terms of Use</a>
      <span>|</span>
      <a href="/privacy-policy" className="hover:text-green-600 transition">Privacy Policy</a>
      <span>|</span>
      <a href="/do-not-call-policy" className="hover:text-green-600 transition">DNC Policy</a>
      <span>|</span>
      <a href="/ccpa" className="hover:text-green-600 transition">CCPA</a>
      <span>|</span>
      <a href="/contact" className="hover:text-green-600 transition">Contact</a>
    </div>


      <p className='text-black'>Domain name - Easyhomeservice.com is a free service to assist homeowners in connecting with local service providers. All service provider/providers are independent and easy home service does not warrant or guarantee any work performed. It is the responsibility of the homeowner to verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All persons depicted in a photo or video are actors or models and not service provider listed on easyhomeservice.com - Domain name.</p>

    {/* Social Icons */}
    <div className="flex justify-center gap-6 text-xl mt-2">
      <a
        href="https://www.facebook.com/profile.php?id=61565981943953&sk=about"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="hover:text-green-600 transition"
      >
        <i className="bi bi-facebook"></i>
      </a>
      <a
        href="https://www.linkedin.com/company/easy-home-service-llc"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="hover:text-green-600 transition"
      >
        <i className="bi bi-linkedin"></i>
      </a>
      <a
        href="https://www.instagram.com/easy_home__service/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="hover:text-pink-500 transition"
      >
        <i className="bi bi-instagram"></i>
      </a>
    </div>

  

    {/* Copyright */}
    <p className="text-md mt-2 text-gray-700">
      &copy; {new Date().getFullYear()} Easy Home Service. All Rights Reserved.
     
    </p>
  </div>
  




</footer>
            
        </>
    )
}

export default Footer