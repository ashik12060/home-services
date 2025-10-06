import React from 'react'
import howItWorks from '../images/how-it-works-1.png'
import btnArrow from '../images/btn_arw.png'
import s3BoxImg from "../images/s3_box_img.jpg"
const Introduction = () => {

      const redirectToCategory = (category) => {
    window.location.href = `/${category}`;
  };


  return (
    <div>
        <div className="section_3  py-12">
              <div className="container mx-auto px-4 ">
                <div className="s3_box  p-6 rounded-lg shadow-lg">
                  <div className="s3_box_inner ">
                    <p className="s3_text flex items-center gap-2 text-sm mb-2 text-black">
                      <i className="bi bi-megaphone text-black"></i> Introducing
                    </p>
                    <h2 className="common_heading text-3xl md:text-4xl font-bold mb-4  text-white">
                      Easy Home Service: <br />
                      Your Gateway to Trusted Home Solutions
                    </h2>
        
                    <img
                      src={s3BoxImg}
                      alt="Easy Home Service"
                      className="block md:hidden w-full h-auto mb-4 rounded-lg"
                    />
        
                    <p className="common_text mb-3 text-xl text-white">
                      In the home improvement industry, homeowners often feel frustrated. They face high prices, unreliable contractors, and a long search for the right professionals. We know this because we have been there for many years.
                    </p>
                    <p className="common_text mb-3  text-white">
                      After years of navigating a broken system, we realized there was a better way. After all, why should homeowners have to battle to find trusted home improvement experts?
                    </p>
                    <p className="common_text mb-3  text-white">
                      Quality service shouldn't come with an inflated price tag and hidden fees. That's why we created Easy Home Service. We want to make home projects easy and stress-free. Our service is affordable and reliable.
                    </p>
                    <p className="common_text mb-3  text-white">
                      Welcome to Easy Home Service. Finding a local home improvement specialist is finally easy.
                    </p>
        
                    <div className="btn_box mt-6 flex flex-col md:flex-row items-start md:items-center gap-2">
                      <button
                        onClick={() => redirectToCategory("allservices")}
                        className="common_btn-copy bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded flex items-center gap-2"
                      >
                        Get Free Quote
                        <img
                          src={btnArrow}
                          alt="arrow"
                          className="w-3 h-4"
                        />
                      </button>
                      <p className="btn_text text-white text-sm mt-2 md:mt-0">
                        We Just Make it easier.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
    </div>
  )
}

export default Introduction