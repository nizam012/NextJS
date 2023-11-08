import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'
import {BsTelephoneFill} from 'react-icons/bs'

function Top() {
    return (
        <div>
            <div className="top d-flex justify-content-end  ">
                <a className='top-1 m-2' href="#"><IoLocationSharp />Location</a>
                <a className='top-1 m-2' href="#"><BsTelephoneFill/> +0000000000</a>
            </div>
        </div>
    )
}

export default Top
