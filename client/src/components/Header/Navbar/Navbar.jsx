import React from 'react'
import "./Navbar.scss"
import logo from "../../../assets/images/logo.png"
import { CiSearch  } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate =useNavigate()
    const handleClick=()=>{
        navigate('/')
    }
    const handleLinkClick=(category)=>{
        navigate(`/news/category/${category}`)
    }
    return (
    <div className='navbar'>
       <div className="navbarContents">
        <div className="navbarLogo">
                <img src={logo} alt="mechinagartimes-logo" onClick={handleClick}/>
            </div>
            <div className="navbarLinks">
                <span className="link"  onClick={() => handleLinkClick('Politics')}>Politics</span>
                <span className="link"  onClick={() => handleLinkClick('Business')}>Business</span>
                <span className="link"  onClick={() => handleLinkClick('Technology')}>Technology</span>
                <span className="link"  onClick={() => handleLinkClick('Education')}>Education</span>
                <span className="link"  onClick={() => handleLinkClick('Science')}>Science</span>
                <span className="link"  onClick={() => handleLinkClick('Sports')}>Sports</span>
            </div>
            <div className="navbarRight">
                <span className="navbarSearch">
                    <CiSearch className='searchIcon'/>
                    <input type="text" placeholder='Search News' />
                </span>
                <span className="navbarToggler">
                    <IoMdMenu className='menuIcon'/> 
                </span>
            </div>
       </div>
    </div>
  )
}

export default Navbar