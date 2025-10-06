

import React from 'react';
import l1 from '../../../assets/Dutch-bangla-bank-ltd.svg.png'
import l2 from '../../../assets/rocket.png'
import l3 from '../../../assets/Bkash-logo.png'
import l4 from '../../../assets/master-card.png'
import l5 from '../../../assets/visa-icon.png'
import l6 from '../../../assets/ok wallet.png'
import l7 from '../../../assets/ssl commerze.png'
import { faSquareFacebook, faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className=" text-gray-700 py-20 px-4 poppins-regular">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold text-green-600 mb-2">ECOMMERCE</h1>
          <p className="text-sm leading-relaxed">
            ECOMMERCE is an online-based Bangladeshi website offering 100% authentic beauty products.
            We seek natural, plant-based items packed with rare ingredients.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">IMPORTANT LINKS</h2>
          <ul className="space-y-2 text-sm">
            {[
              'ABOUT US',
              'HELP CENTER',
              'PRIVACY POLICY',
              'TERMS & CONDITION',
              'REFUND & RETURN POLICY',
              'SHOP NOW',
            ].map((link, i) => (
              <li key={i}>
                <a href="#" className="hover:text-green-600 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">ADDRESS</h2>
          <p className="text-sm">Mirpur 12, Dhaka, Bangladesh</p>

          <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800">FOLLOW US</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-blue-700 text-xl "><FontAwesomeIcon icon={faSquareFacebook} /></a>
            <a href="#" className="text-blue-500 text-xl "><FontAwesomeIcon icon={faSquareTwitter} /></a>
            <a href="#" className="text-pink-700 text-xl "><FontAwesomeIcon icon={faSquareInstagram} /></a>
          </div>
        </div>

        {/* Payments & Verified */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-800">PAYMENT METHODS</h2>
          <div className="flex flex-wrap items-center gap-2">
            <img src={l1} alt="Payment 1" className="h-8" />
            <img src={l2} alt="Payment 2" className="h-8" />
            <img src={l3} alt="Payment 1" className="h-8" />
            <img src={l4} alt="Payment 2" className="h-8" />
            <img src={l5} alt="Payment 2" className="h-8" />
            <img src={l6} alt="Payment 2" className="h-8" />
            <img src={l7} alt="Payment 2" className="h-8" />
            {/* Add more if needed */}
          </div>

          
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ECOMMERCE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
