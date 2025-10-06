import React from "react";
import roofImg from "../../images/handymanScreenshot.png";
import btnArrow from "../../images/btn_arw.png";
import lockIcon from "../../images/lock.png";
import greenCheck from "../../images/bnr_chk.png";
import investIcon from "../../images/investment.png";
import tempIcon from "../../images/temp.png";
import increaseIcon from "../../images/increase.png";
import Header from "../Shared/Header/Header";
import RoofingHero from "../Home/Roofing/RoofingHero";
import HowWorks from "../HowWorks";
import Introduction from "../Introduction";
import ServingStates from "../ServingStates";
import Faq from "../Faq";
import Footer from "../Footer";
import faceLogo from '../../images/favicon.svg'
import HandymanHero from "./HandymanHero";

const Handyman = () => {
  const benefits = [
    {
      icon: investIcon,
      title: "Safeguard Your Investment",
      description:
        "Investing in professional handyman services safeguards your property, ensuring longevity, resilience, and added value. Trust us to preserve and enhance your investment with quality installations, repairs, and upgrades tailored to your unique needs.",
    },
    {
      icon: tempIcon,
      title: "Repairs Cut Bills, Qualify for Rebates.",
      description:
        "Timely handyman services not only extend the lifespan of your home but also offer energy efficiency benefits.Furthermore, these repairs often qualify for valuable rebates, making them a smart and cost-effective investment.",
    },
    {
      icon: increaseIcon,
      title: "Increase Home Value: Remodel or Sell.",
      description:
        "Remodeling with handyman services adds value to your home, making it a smart investment for future sales. Strategic upgrades improve both the living experience and market appeal, ensuring a competitive edge in real estate.",
    },
  ];

  return (
    <>
      <Header />
      <HandymanHero />
      <section className="relative bg-gradient-to-r from-green-50 via-white to-green-50 py-12 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Right Side Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <img
                src={roofImg}
                alt="Affordable Roofing Experts Best Roofers Near You"
                className="rounded-xl shadow-xl transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 rounded-xl ring-2 ring-green-200 opacity-50 group-hover:opacity-100 transition"></div>
            </div>
          </div>

          {/* Left Content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
             We Help You Save On All

              <br />
              <span className="text-green-600">
              Your Handyman Installation
              </span>
            </h2>

            <p className="text-gray-700 text-base leading-snug">
       Enhance your comfort and energy efficiency with our skilled handyman services. Rely on us for cost-effective solutions to address your painting, plumbing, or maintainence needs. We guarantee a smooth, budget-friendly transition to a well-regulated environment in your home or business without compromising on quality with our handyman services.
            </p>
            <strong>
Elevate your comfort with our personalized handyman solutions!         </strong>
            <p className="text-base text-gray-800 leading-snug">
          Enhance your comfort with our skilled handyman services, offering customized solutions to meet your specific needs. Our seamless approach guarantees a cost-effective transition to improved conditions without compromising quality.Count on us to enhance the durability and lifespan of your home systems with our handyman expertise, all while keeping it cost-effective.
            </p>

            {/* ✅ Services List with Green Check */}
            <ul className="space-y-2">
              {[
                "Customized Handyman Solutions.",
                "Cost-Effective Comfort.",
                "Skilled Handyman Services.",
                "Premium Atmosphere.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-700 text-sm leading-snug"
                >
                  <img
                    src={greenCheck}
                    alt="check"
                    className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Box */}
            <div className="bg-green-600 text-white p-5 rounded-xl shadow-md mt-8">
              <p className="text-xs uppercase tracking-wide font-bold opacity-80">
                Just Takes 2 Minutes
              </p>
              <a
                href="roofing-steps?clickid=&source="
                className="inline-flex items-center bg-white text-green-700 font-semibold px-5 py-2.5 rounded-lg shadow mt-2 hover:bg-green-50 transition"
              >
               Get A Quote Now!
                <img src={btnArrow} alt="arrow" className="ml-2 w-3 h-4" />
              </a>
              <p className="flex items-center text-xs mt-3 opacity-90">
                <img src={lockIcon} alt="lock" className="w-4 h-4 mr-2" />
                Your information is 100% secure & confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Benefits of Handyman <br />
            <span className="text-green-600">
              Installation, Repair & Upgrade
            </span>
          </h3>

          <p className="text-gray-700 text-base mb-10 max-w-3xl mx-auto lg:mx-0">
           Handyman services, including installation, repair, and upgrades, not only enhance indoor comfort but also contribute to energy savings and improve the overall efficiency of your home or business environment.
          </p>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition border-2 border-blue-900  duration-300 text-left flex flex-col items-center"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4"
                />
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-green-600 text-white p-5 rounded-2xl shadow-md mt-10 max-w-md mx-auto lg:mx-0">
            <p className="text-xs uppercase tracking-wide font-bold opacity-80">
              Just Takes 2 Minutes
            </p>
            <button
              onClick={() =>
                (window.location.href = "roofing-steps?clickid=&source=")
              }
              className="inline-flex items-center bg-white text-green-700 font-semibold px-5 py-2.5 rounded-lg shadow mt-2 hover:bg-green-50 transition"
            >
              Get a Quote Now!
              <img src={btnArrow} alt="arrow" className="ml-2 w-3 h-4" />
            </button>
            <p className="flex items-center text-xs mt-3 opacity-90">
              <img src={lockIcon} alt="lock" className="w-4 h-4 mr-2" />
              Your information is 100% secure & confidential.
            </p>
          </div>
        </div>
      </section>

      
      <div className="section_2 roofing_section_3">
      <div className="container">
        <p className="common_heading inner_common_head">
          It Works
          <br />
          In Just 3 Simple Steps!
        </p>
        <p className="common_text">
          Watch your dream space come to life with our skilled professionals,
          delivering a seamless and satisfying transformation.{" "}
          <br className="hideMob" />
          Realize your design dreams with our expert team in a personalized
          consultation.
        </p>

        {/* Steps */}
        <div className="s2_step_box">
          {/* Step 1 */}
          <div className="s2_step_col s2bg1">
            <p className="step_num">01</p>
            <p className="step_num1">Step-1</p>
            <p className="step_head">Tell us about your home improvement needs</p>
            <p className="common_text">
              Whether it's upgrading a kitchen, refinishing floors, or enhancing outdoor spaces.
            </p>

            <div className="col-12 text-center">
              <div
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "86%",
                  marginBottom: "12%",
                }}
              >
                <div className="text-center text-white p-4"
                  style={{ background: "#14147e", borderRadius: "20px" }}
                >
                  <h4 style={{ color: "white" }}>
                    <span className="steps-qtd">Handyman</span> Quotes
                  </h4>
                  <div
                    className="progress my-3"
                    style={{
                      height: "4px",
                      backgroundColor: "white",
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "14%",
                        borderRadius: "2px",
                        background: "#04d36f",
                      }}
                    ></div>
                  </div>
                  <p style={{ color: "white", fontWeight: 700 }}>1/7</p>
                  <div
                    className="p-3"
                    style={{
                      backgroundColor: "white",
                      color: "black",
                      borderRadius: "15px",
                    }}
                  >
                    <p style={{ fontWeight: 500 }}>Enter Your Zip Code</p>
                    <button
                      className="btn w-100 my-2"
                      style={{
                        border: "2px solid #001f80",
                        borderRadius: "20px",
                        backgroundColor: "white",
                        fontSize: "16px",
                        color: "#001f80",
                      }}
                    >
                      Enter Zip
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="s2_step_col s2bg2">
            <p className="step_num">02</p>
            <p className="step_num1">Step-2</p>
            <p className="step_head">
              Let certified vendors compete for your requirements
            </p>
            <p className="common_text">
             By providing competitive quotes and personalized solutions that fit your needs.
            </p>

            <div className="col-12 text-center">
              <div
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "86%",
                  marginBottom: "12%",
                }}
              >
                <div
                  className="text-center text-white p-4"
                  style={{ borderRadius: "20px", background: "#14147e" }}
                >
                  <h4 style={{ color: "white" }}>Best Match</h4>
                  <div
                    className="progress my-3"
                    style={{
                      height: "4px",
                      backgroundColor: "white",
                      borderRadius: "2px",
                    }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: "100%",
                        borderRadius: "2px",
                        background: "#04d36f",
                      }}
                    ></div>
                  </div>
                  <p style={{ color: "white", fontWeight: 700 }}>7/7</p>

                  <div
                    className="text-center p-4"
                    style={{
                      maxWidth: "400px",
                      background: "white",
                      borderRadius: "10px",
                      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center mb-3">
                      <img
                        src="/images/matthew.jpg"
                        alt="Profile"
                        className="me-2"
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid #00b894",
                        }}
                      />
                      <div>
                        <p
                          className="mb-0"
                          style={{ fontWeight: 500, color: "black" }}
                        >
                          <span className="steps-qtd">Homewarranty</span>{" "}
                          Service Provider
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="s2_step_col s2bg3">
            <p className="step_num">03</p>
            <p className="step_num1">Step-3</p>
            <p className="step_head">Save big on seamless home improvement</p>
            <p className="common_text">
             Turning your innovative design into reality without exceeding your specified budget.
            </p>
            <div className="col-12 text-center">
              <div
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "86%",
                  marginBottom: "12%",
                }}
              >
                <div
                  className="text-center text-white p-4"
                  style={{ backgroundColor: "#14147e", borderRadius: "20px" }}
                >
                  <h4>Congratulations!</h4>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "11px",
                    }}
                  >
                    <div
                      className="card"
                      style={{
                        borderRadius: "15px",
                        padding: "20px",
                        textAlign: "center",
                        background: "#fff",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div
                        className="checkmark"
                        style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#e6fcf5",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "0 auto 10px",
                        }}
                      >
                        {/* <CheckLg style={{ fontSize: "30px", color: "#38c172" }} /> */}
                      </div>
                      <p
                        className="message"
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "#04d36f",
                          margin: 0,
                        }}
                      >
                        Request Submitted!
                      </p>
                      <p
                        className="subtext"
                        style={{
                          fontSize: "14px",
                          color: "#6c757d",
                          marginTop: "5px",
                        }}
                      >
                        We will contact you soon!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="clearall"></div>
        <div className="btn_box">
          <p className="btn_top_text">Just Takes 2 Minutes</p>
          <a
            href="#top_form"
            className="common_btn"
          >
            Get Free Quote
            <img
              src={btnArrow}
              className="btn_arw"
              width="10"
              height="18"
              alt="arrow"
            />
          </a>
          <p className="btn_text inner_btn_text">
            <img
              src={faceLogo}
              className="btn_lock"
              width="50"
              height="67"
              alt="icon"
            />
            Your information is 100% secure & confidential.
          </p>
        </div>
      </div>
    </div>

      <HowWorks />
      <Introduction />
      <ServingStates />
      <Faq />
      <Footer />
    </>
  );
};

export default Handyman;
