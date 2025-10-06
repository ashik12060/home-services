import React from 'react'
import howItWorks from '../images/how-it-works-1.png'
import btn_arw from '../images/btn_arw.png'

const HowWorks = () => {
  return (
    <div>
          <div class="section_2 lg-bg">
                <div class="container">
                    <h2 class="common_heading">How It Works <br /> In Just 3 Simple Steps</h2>
        
                    <div class="row pt-5 d-flex justify-content-center align-items-center">
                        <div class="col-lg-6">
                            <img src={howItWorks} class="mw-100" alt="Home Improvement Experts"/>
                        </div>
                        <div class="col-lg-6">
        
        
                            <ul class="s2_step_list">
                                <li>
                                    <div class="s2_point">
                                        <div></div>
                                    </div>
        
                                    <span>
                                <div class="di"><i class="bi bi-pencil-square"></i>  Tell us what you need.</div></span>
                                    <p class="myfs">Enter your Zip code, pick a service(<a href="https://easyhomeservice.com/plumbing" target="_blank">Plumbing</a>, <a href="https://easyhomeservice.com/window" target="_blank">Windows</a>, <a href="https://easyhomeservice.com/roofing"
                                            target="_blank">Roofing</a>, etc.) and give us a quick idea of the job. Simple. Fast. No Fluff.</p>
                                </li>
        
                                <li>
                                    <div class="s2_point">
                                        <div></div>
                                    </div>
        
                                    <span>
                                <div class="di"><i class="bi bi-person-check"></i> We match you with trusted pros.</div></span>
                                    <p class="myfs">Get connected to top rated local experts who are ready to go. You’ll see clear info, honest pricing & zero pressure.</p>
                                </li>
        
                                <li>
                                    <div class="s2_point">
                                        <div></div>
                                    </div>
        
        
                                    <span><div class="di"><i class="bi bi-calendar-check"></i> Book & relax.</div></span>
                                    <p class="myfs">Your time is valuable. Once you book, we handle the rest- seamlessly and professionally.</p>
                                </li>
                            </ul>
        
                            <div class="clearall"></div>
                            <div class="btn_box">
                                <a onclick="redirectToCategory('allservices')" class="common_btn-copy">Get A Quote Now<img src={btn_arw} class="btn_arw" width="10" height="18" alt="arrow" /></a>
                                <p class="btn_text">We Just Make it easier.</p>
                            </div>
                        </div>
                    </div>
        
        
        
        
        
                </div>
            </div>
        
    </div>
  )
}

export default HowWorks