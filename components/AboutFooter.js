import React from 'react'
import logof from '../public/Images/logof.png'
import Payment from '../public/Images/payment.png'
import Image from 'next/image'
import { IoLocationSharp } from 'react-icons/io5'
import { FaCcVisa } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { AiFillYoutube } from 'react-icons/ai'
import { BiLogoPinterestAlt } from 'react-icons/bi'

function AboutFooter() {
    return (
        <div >

            <div className="footercom p-4">
                <div className="top-h d-flex justify-content-between ">
                    <div className="f-content">
                        <h1>Looking for the <span> Business</span> Solution ?  </h1>
                        <p>&apos;Don’t wait make a smart & logical quote here. Its pretty easy.</p>
                    </div>
                    <div className="f-button">
                        <button className='get-button' >Get quate now </button>
                    </div>
                </div>
                <div className="top-h d-flex justify-content-between p-3 ">
                    <div className="top-footer">
                        <div className="logo d-flex ">
                            <Image className='logo-imgfooter' src={logof} alt="logo" />
                            <p className='logof ' >  Kandra Digital</p>
                        </div>
                        <p>An agency &apos;that’s been built with the core purpose of delivering the quality digital marketing in the era where Digital marketing services are just business rather than the value for the business, business owners and their resources/time.</p>
                    </div>
                    <div className="help">
                        <h4>Help?</h4>
                        <ul>
                            <li>AQ</li>
                            <li>Term & conditions</li>
                            <li>Reporting</li>
                            <li>Documentation</li>
                            <li>Support Policy</li>
                            <li>Privacy</li>
                        </ul>

                    </div>
                    <div className="useful-link">
                        <h4>Useful Links</h4>
                        <ul>
                            <li>About</li>
                            <li>News</li>
                            <li>Partners</li>
                            <li>Room Details</li>
                            <li>Gallery</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                    <div className="newsletter">
                        <h4>Signup For newsletter</h4>
                        <p>Sign up for a newsletter, we deliver a value to you and make it a pleasant read! We don't spam and we don't make it unpleasant for you.</p>
                        <input type="email" className='email' placeholder='Enter you Email' />
                        <button className='signup-b' >SIGN UP</button>
                    </div>
                </div>
                <div className="address-footer d-flex justify-content-between">
                    <div className="address ">
                        <div className="office-address d-flex mb-3 ">
                            <h3>OFFICE ADDRESS</h3>
                            <IoLocationSharp className='location-icon' size={25} />
                        </div>
                        <div className="office-address1 d-flex">
                            <p>#40, 2nd floor, Above Lakme Salon, 14th Main Road, Sector 7, HSR layout- 560102, Bangalore</p>
                            <p>Land Mark- Opp Max, 2nd building after Chai Point, close to HSR BDA and Macdonalds.</p>
                        </div>
                    </div>
                    <div className="we-accept">
                        <h3>We Accept</h3>
                        <Image className='paymentimg' src={Payment} alt="payment" />
                    </div>
                </div>
            </div>
            <div className="last-footer d-flex justify-content-between">
                <h6>Copyright 2023 © Kandra Digital Marketing Solutions Pvt Ltd</h6>
                <div className="social-media ">
                    <FaCcVisa className='social-media-icons'  size={30} />
                    <FaXTwitter  className='social-media-icons' size={30} />
                    <AiFillYoutube  className='social-media-icons' size={30} />
                    <BiLogoPinterestAlt  className='social-media-icons' size={30} />
                </div>
            </div>
        </div>
    )
}

export default AboutFooter
