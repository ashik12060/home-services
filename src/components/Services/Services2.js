import React from "react";

// ✅ Import images
import s1_help_icon1 from "../../images/s1_help_icon1.png";
import s1_help_icon2 from "../../images/s1_help_icon2.png";
import s1_help_icon3 from "../../images/s1_help_icon3.png";
import s1_help_icon4 from "../../images/s1_help_icon4.png";
import s1_help_icon5 from "../../images/s1_help_icon5.png";
import iconhandyman from "../../images/handyman.png";
import iconhomewarranty from "../../images/iconhomewarranty.svg";
import s1_help_icon6 from "../../images/s1_help_icon6.png";
import s1_help_icon7 from "../../images/s1_help_icon7.png";
import s1_help_icon10 from "../../images/s1_help_icon10.png";
import viewallicon from "../../images/viewallicon.svg";
import btnArrow from "../../images/btn_arw.png";

// ✅ Service data array
const services = [
  { key: "roofing", label: "Roofing", icon: s1_help_icon1 },
  { key: "window", label: "Windows", icon: s1_help_icon2 },
  { key: "solar", label: "Solar", icon: s1_help_icon3 },
  { key: "hvac", label: "HVAC", icon: s1_help_icon4 },
  { key: "bathroom", label: "Bathroom", icon: s1_help_icon5 },
  { key: "handyman", label: "Handyman", icon: iconhandyman },
  { key: "homewarranty", label: "Home Warranty", icon: iconhomewarranty },
  { key: "kitchen", label: "Kitchen", icon: s1_help_icon6 },
  { key: "gutter", label: "Gutter", icon: s1_help_icon7 },
  { key: "walktub", label: "Walk-In Tubs", icon: s1_help_icon10 },
  { key: "allservices", label: "And Much More", icon: viewallicon },
];

const Services2 = () => {
  // ✅ Redirect function
  const redirectToCategory = (category) => {
    console.log("Redirect to:", category);
    // Example: navigate to another page
    // window.location.href = `/services/${category}`;
  };

  return (
    <div className="section_1">
      <div className="container">
        {/* Section Title */}
        <p className="s1_text font-weight-bold">
          <i className="bi bi-tools"></i> Services We Provide
        </p>
        <p>
          No matter the size of the Job, Our Pros are up for it. We cover a
          broad range of services tailored to your home's unique needs.
        </p>

        {/* Services Grid */}
        <div className="s1_help_box">
          {services.map((service) => (
            <div className="s1_help_box_col" key={service.key}>
              <div
                className="hlp_img_box"
                onClick={() => redirectToCategory(service.key)}
              >
                <img
                  src={service.icon}
                  width="200"
                  height="200"
                  alt={service.label}
                />
                <p>{service.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="clearall"></div>

        {/* Call-to-Action Button */}
       
      </div>
    </div>
  );
};

export default Services2;
