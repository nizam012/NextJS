import React from 'react'
import imgteam from '../public/Images/teamwork.png'
import Image from 'next/image'

function Aboutcore() {
    return (
        <div className="container1 d-flex">
            <div className="left">
                <div className="content-1">
                    <h3> <span>Core</span>  Values</h3>
                    <p>Google is top search engine thats been most used by the internet surfers to quickly search and find what they are looking for and this being the reason it becomes very crucial for businesses being available to the right audiences and for the searches on the Google search engine or the Bing search engine. The beautiful part is Google allows the businesses to make their presence by taking part of the auction using the Google ads platform.</p>
                </div>
                <div className="scroll">
                    <h5>Elevate Your Website&apos;s Visibility</h5>
                    <p>Utilize paid marketing strategies to position your website at the forefront of Google search results</p>
                    <h5>Capitalize on User Searches</h5>
                    <p>Encourage users to click on your Google ads, driving an influx of potential leads and sales</p>
                    <h5>Secure a Significant Market Share</h5>
                    <p>Allocate at least 20-30% of your marketing budget to paid slots, ensuring a substantial presence in search results.</p>
                    <h5>Elevate Your Website&apos;s Visibility</h5>
                    <p>Utilize paid marketing strategies to position your website at the forefront of Google search results</p>
                    <h5>Capitalize on User Searches</h5>
                    <p>Encourage users to click on your Google ads, driving an influx of potential leads and sales</p>
                    <h5>Secure a Significant Market Share</h5>
                    <p>Allocate at least 20-30% of your marketing budget to paid slots, ensuring a substantial presence in search results.</p>
                </div>
                <button className="con-button" >Contact Us</button>

            </div>
            <div className="right">
            <Image className="about-img" src={imgteam} alt="logo" />

            </div>
        </div>
    )
}

export default Aboutcore
