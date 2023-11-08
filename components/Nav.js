import React from 'react'
import logo from '../public/Images/Vector.png'
import Image from 'next/image'

function Nav() {

  return (
    <div>
            <header>
                <nav className='nav-bar d-flex justify-content-between align-items-center'>
                    <div className="logo d-flex ">
                    <Image className='logo-img' src={logo} alt="logo" />
                    <p className='logo1 ' >  Kandra Digital</p>
                    </div>
                    <div className="middle d-flex  p-0">
                        <ul className="ul-nav d-flex ">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                        <button className='bt-contact'>Contact Us</button>
                    </div>
                    {/* <div className="last p-3">
                        <ul className="ul-nav d-flex justify-content-around" >
                            <li className='search'><input className='search1 p-2' type="text" placeholder="Search" /><BiSearchAlt2 className='sc-icon' fill='rgba(32, 78, 207, 1)' /></li>
                            <button className='button'> <BiSolidShoppingBag fill='black' /></button>
                            <button className='button'><IoMdContact fill='black' /></button>
                            <button className='button' id='menuuu'><AiOutlineMenu fill='black' /></button>
                        </ul>
                    </div> */}
                </nav>
            </header>
        </div>
  )
}

export default Nav
