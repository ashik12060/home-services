import React from 'react';

const TestimonialCard = ({ quote, name, location, links }) => (
  <div className="col-md-4 mb-5">
    <div className="card snip1533 position-relative text-center mx-auto">
      <div className="quote-icon position-absolute border-t-4 border-indigo-500 top-0 start-50 translate-middle">
        <i className="bi bi-quote"></i>
      </div>
      <div className="card-body border-t-4 border-indigo-500">
        <blockquote className="blockquote mb-4">
          <p>
            {quote.split(" ").map((word, index) =>
              links[word.toLowerCase()] ? (
                <a key={index} href={links[word.toLowerCase()]} target="_blank" className="link-new">
                  {word}
                </a>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </p>
        </blockquote>
        <h3>{name}</h3>
        <h4>{location}</h4>
      </div>
    </div>
  </div>
);

const WhatOurClientsSay = () => {
  const links = {
    windows: "https://easyhomeservice.com/window",
    gutter: "https://easyhomeservice.com/gutter",
    painting: "https://easyhomeservice.com/painting",
    plumbing: "https://easyhomeservice.com/plumbing"
  };

  const testimonials = [
    {
      quote: "We needed multiple repairs done before listing our house, and Easy Home repair Service helped us find trustworthy professionals for everything — windows, Gutter repair, painting, and minor plumbing. Huge time saver.",
      name: "Tina & Marcus D.",
      location: "Tempe, AZ"
    },
    {
      quote: "Our roof suddenly started leaking and we had no idea what to do. I found the site and figured I’d give it a shot. Honestly, I wasn’t expecting much, but I got connected to a local roofer that same day. Lifesaver!",
      name: "Rachel P.",
      location: "Kansas City, M"
    },
    {
      quote: "I submitted a request for some small home fixes — it took a couple of days to coordinate, but once the handyman arrived, he took care of everything in one go. Great experience overall.",
      name: "George W.",
      location: "Sacramento, CA"
    }
  ];

  return (
    <div className="section_4 pb-0">
      <div className="container">
        <p className="common_heading text-center text-3xl font-semibold mb-6">What Our Clients Say</p>
        <div className="row justify-content-center pt-5 ">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
              links={links}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatOurClientsSay;
