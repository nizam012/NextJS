import React from 'react'

function Aboutbody() {
    return (
        <div className="container">
            <h2>Welcome to  <span className='kd' >Kandra Digital</span></h2>
            <p className='ab-p' >A leading provider of professional course trainings designed to empower individuals and organizations with the knowledge and skills needed to thrive in today's dynamic business landscape. With a focus on excellence and practical application, we are committed to delivering high-quality training programs that drive professional growth and success.</p>
            <div className="box-container d-flex justify-content-around ">
                <div className="box-items  ">
                    <h5>1M</h5>
                    <p>Revenue Generated</p>
                </div>
                <div className="box-items ">
                    <h5>2,000+</h5>
                    <p>Projects Launched</p>
                </div> <div className="box-items  ">
                    <h5>10+</h5>
                    <p>Years of Experiences</p>
                </div>
            </div>
        </div>
    )
}

export default Aboutbody
