// import React from 'react';
// import logo from '.././../images/easyhomeservice.svg'
// import herobg from '../../images/hero-main.jpeg'
// import roofing from '../../images/roofing.svg'
// import kitchen from '../../images/kitchen.svg'
// import gutter from '../../images/gutter.svg'
// import walk from '../../images/walk.svg'
// import window from '../../images/windows.svg'
// import hvac from '../../images/hvac.svg'
// import bathroom from '../../images/bathroom.svg'
// import home from '../../images/Homewarranty.svg'

// export default function Test() {
//   return (
//     <div className="font-sans text-gray-800">
//       {/* Navbar / Header */}
//       <header className="bg-white shadow-md">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//           <div className="logo">
//             {/* Logo image */}
//             <img src={logo} alt="Easy Home Service" className="h-8" />
//           </div>
//           <nav className="hidden md:flex space-x-6">
//             <a href="#services" className="hover:text-green-600">Services</a>
//             <a href="#about" className="hover:text-green-600">About</a>
//             <a href="#blog" className="hover:text-green-600">Blog</a>
//             <a href="#contact" className="hover:text-green-600">Contact</a>
//           </nav>
//           <button className="hidden md:block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Get Quote Now</button>
//           {/* Mobile menu button here */}
//         </div>
//       </header>

 
//       {/* Hero / Hero Banner */}
// <section
//   className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32 text-center"
//   style={{ backgroundImage: `url(${herobg})` }} // replace with your image path
// >
//   {/* Overlay for contrast */}
//   <div className="absolute inset-0 bg-black/50"></div>

//   {/* Content */}
//   <div className="relative max-w-4xl mx-auto px-6 text-white">
//     <p className="text-sm">Helped 22,400 Customers Find Top Contractors</p>
//     <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
//       Connecting Homeowners with Trusted Home Improvement Experts
//     </h1>
//     <p className="mt-4 text-lg">
//       Need help with Roofing, Windows, Solar, HVAC, Bathroom, Kitchen, Gutter, etc.
//     </p>
//     <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
//       Get A Quote Now
//     </button>
//   </div>
// </section>


//       {/* Services Section */}
//       <section id="services" className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">Services We Provide</h2>
//           <p className="mt-2 text-gray-600">No matter the size of the job, our pros are ready.</p>
//           <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
//             {/* Map through services list */}
//             {[
//               { name: "Roofing", img: roofing },
//               { name: "Bathroom", img: bathroom },
//               { name: "Gutter", img: gutter },
//               { name: "HVAC", img: hvac },
//               { name: "Kitchen", img: kitchen },
//               { name: "Walk-In Tubs", img:walk  },
//               { name: "Window", img: window },
//               { name: "Home Warranty", img: home },
//             ].map((svc, idx) => (
//               <div key={idx} className="flex flex-col items-center space-y-2">
//                 <img src={svc.img} alt={svc.name} className="h-12 w-12 object-contain" />
//                 <span className="font-medium">{svc.name}</span>
//               </div>
//             ))}
//           </div>
//           {/* “View More / All Services” or similar */}
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">How It Works in Just 3 Simple Steps</h2>
//           <div className="mt-8 space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="text-xl font-semibold">Tell us what you need</h3>
//               <p className="mt-2 text-gray-600">Enter your Zip code, pick a service, and give us a quick idea of the job. Simple. Fast.</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="text-xl font-semibold">We match you with trusted pros</h3>
//               <p className="mt-2 text-gray-600">Get connected to top rated local experts who are ready to go. Clear info, honest pricing & zero pressure.</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="text-xl font-semibold">Book & relax</h3>
//               <p className="mt-2 text-gray-600">Your time is valuable. Once you book, we handle the rest — seamlessly and professionally.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About / Intro */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">Easy Home Service: Your Gateway to Trusted Home Solutions</h2>
//           <p className="mt-4 text-gray-600">In the home improvement industry, homeowners often face high prices, unreliable contractors, ... (more text)...</p>
//           <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Get Free Quote</button>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">Why Choose Us</h2>
//           <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="font-semibold">Verified Pros, No Guesswork</h3>
//               <p className="mt-2 text-gray-600">Every expert on our platform is vetted, so you can hire with confidence.</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="font-semibold">Fast, Local Matches</h3>
//               <p className="mt-2 text-gray-600">Tell us what you need — we’ll connect you with top-rated pros in your area, fast.</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="font-semibold">Real Reviews. Real Results.</h3>
//               <p className="mt-2 text-gray-600">No fluff, just honest feedback from real customers, so you know what to expect.</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="font-semibold">No Hidden Fees</h3>
//               <p className="mt-2 text-gray-600">What you see is what you pay. No surprises. No shady upsells.</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="font-semibold">All Services, One Platform</h3>
//               <p className="mt-2 text-gray-600">From plumbing to roofing, we’ve got every job covered — all in one place.</p>
//             </div>
//             <div className="p-6 bg-white rounded-lg shadow">
//               <h3 className="font-semibold">Support That Actually Supports</h3>
//               <p className="mt-2 text-gray-600">Questions? Concerns? We’re here for you, with real people ready to help.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">What Our Clients Say</h2>
//           <div className="mt-8 space-y-8 md:grid md:grid-cols-3 md:gap-8">
//             {/* Example testimonials */}
//             <figure className="p-6 bg-gray-50 rounded-lg shadow">
//               <blockquote>
//                 “We needed multiple repairs… Easy Home Service helped us find trustworthy professionals for everything … Huge time saver.”
//               </blockquote>
//               <figcaption className="mt-4 font-semibold">Tina & Marcus D. — Tempe, AZ</figcaption>
//             </figure>
//             <figure className="p-6 bg-gray-50 rounded-lg shadow">
//               <blockquote>
//                 “Our roof suddenly started leaking … I got connected to a local roofer that same day. Lifesaver!”
//               </blockquote>
//               <figcaption className="mt-4 font-semibold">Rachel P. — Kansas City, MO</figcaption>
//             </figure>
//             <figure className="p-6 bg-gray-50 rounded-lg shadow">
//               <blockquote>
//                 “Submitted a request for some small home fixes … Great experience overall.”
//               </blockquote>
//               <figcaption className="mt-4 font-semibold">George W. — Sacramento, CA</figcaption>
//             </figure>
//           </div>
//         </div>
//       </section>

//       {/* States We Serve */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold">States We Serve</h2>
//           <p className="mt-2 text-gray-600">Our extensive network covers most of the United States …</p>
//           <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {[
//               "Alabama","Alaska","Arizona","Arkansas","California","Colorado",
//               "Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho",
//               "Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
//               "Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi",
//               "Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey",
//               "New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma",
//               "Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
//               "Tennessee","Texas","Utah","Vermont","Virginia","Washington",
//               "West Virginia","Wisconsin","Wyoming"
//             ].map((state, i) => (
//               <span key={i} className="px-2 py-1 bg-white rounded shadow text-sm">{state}</span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
//           <div className="mt-8 space-y-4">
//             {[
//               { q: "How does homeowner get a call?", a: "… The process is simple: Enter your zip code …" },
//               { q: "What types of home services do you offer?", a: "We cover a wide range including roofing, HVAC, etc." },
//               { q: "Are the service providers vetted?", a: "Yes, thoroughly vetted …" },
//               { q: "How much does it cost to use Easy Home Service?", a: "It’s free for homeowners …" },
//               { q: "Can I get a quote or free estimates before committing …", a: "Absolutely! …" },
//             ].map((faq, i) => (
//               <div key={i} className="border rounded-lg p-4">
//                 <h3 className="font-semibold">{faq.q}</h3>
//                 <p className="mt-2 text-gray-600">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-6">
//             <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">Get A Quote Now</button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
//           <div className="flex justify-center space-x-4">
//             <a href="/terms" className="hover:underline">Terms of Use</a>
//             <a href="/privacy" className="hover:underline">Privacy Policy</a>
//             <a href="/contact" className="hover:underline">Contact</a>
//           </div>
//           <p className="text-sm">&copy; {new Date().getFullYear()} Easy Home Service. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
