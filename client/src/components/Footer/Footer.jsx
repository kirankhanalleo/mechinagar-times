import React from 'react'
import "./Footer.scss"
import { CiMail, CiPhone } from "react-icons/ci";
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContents">
            <div className="row">
                <div className="col">
                    <img src="https://1.bp.blogspot.com/-1wY2JD-FvIw/XurdhizGhwI/AAAAAAAACWo/OhB5smnBYPYQsHxpoQ9lvQBFT804VnBegCK4BGAYYCw/s1060/main%2Blogo%2Bmechinagartimes.png" alt="" className='footerLogo'/>
                    <span className='companyName'>Mechinagar Times Media Pvt Ltd.</span>
                    <span className='companyAddress'>Kakarvitta Road, Bahundangi, Mechinagar Municipality -04, Jhapa, Koshi Province, Nepal</span>
                    <span className='mail'>
                        <CiMail className='icon'/>
                        mechinagartimes@gmail.com
                    </span>
                    <span className="phone">
                        <CiPhone className='icon'/>
                        9823456789
                    </span>
                </div>
                <div className="col">
                    <div className="footerLinks">
                        <span className="link">About Us</span>
                        <span className="link">Contact Us</span>
                        <span className="link">Our History</span>
                        <span className="link">Join Team</span>
                        <span className="link">Be a Member</span>
                        <span className="link">Terms & Conditions</span>
                        <span className="link">Privacy Policy</span>
                    </div>
                </div>
                <div className="col">
                    <div className="footerLinks">
                        <span className="link">Ukraine War</span>
                        <span className="link">Gaza War</span>
                        <span className="link">Asia</span>
                        <span className="link">Europe</span>
                        <span className="link">America</span>
                        <span className="link">Australia</span>
                        <span className="link">Africa</span>
                    </div>
                </div>
                <div className="col">
                    <div className="footerLinks">
                        <span className="link">Politics</span>
                        <span className="link">Business</span>
                        <span className="link">Technology</span>
                        <span className="link">Education</span>
                        <span className="link">Science</span>
                        <span className="link">Literature</span>
                        <span className="link">Sports</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer