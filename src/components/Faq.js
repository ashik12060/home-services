import React, { useState } from 'react'

const Faq = () => {
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
    <div>
            <section className="py-12 bg-gradient-to-b from-green-50 to-green-50">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10">
      Frequently <br className="block md:hidden" /> Asked Questions
    </h2>

    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-green-600 hover:border-green-600 transition-all"
        >
          <button
            onClick={() => toggleFAQ(idx)}
            className="w-full flex justify-between items-center py-3 px-4 font-medium text-gray-900 hover:bg-gradient-to-r hover:from-green-600 hover:to-green-600 hover:text-white transition"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-600 hover:text-white transition">
                {openIndex === idx ? (
                  <i className="bi bi-dash-circle-fill"></i>
                ) : (
                  <i className="bi bi-plus-circle-fill"></i>
                )}
              </span>
              {faq.question}
            </div>
          </button>

          <div
            className={`px-4 pb-3 text-gray-700 text-sm transition-all duration-300 overflow-hidden ${
              openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-8">
      <button
        onClick={() => alert("Redirect to all services")}
        className="bg-gradient-to-r from-green-600 to-green-600 hover:from-green-600 hover:to-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition hover:scale-105"
      >
        Get A Quote Now
      </button>
      <p className="mt-2 text-gray-600 text-sm">We Just Make it easier.</p>
    </div>
  </div>
</section>

    </div>
  )
}

export default Faq;