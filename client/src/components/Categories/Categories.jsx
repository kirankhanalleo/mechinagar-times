import React from 'react'
import "./Categories.scss"
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Categories = () => {
    const navigate =useNavigate()
    const handleLinkClick=(category)=>{
        navigate(`/news/category/${category}`)
    }
  return (
    <div className='categories'>
        <div className="categoriesContents">
            <div className="header">Select Category</div>
            <div className="contents">
                <span className="link" onClick={() => handleLinkClick('Politics')}>
                    Politics
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link" onClick={() => handleLinkClick('Business')}>
                    Business
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link" onClick={() => handleLinkClick('Technology')}>
                    Technology
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link" onClick={() => handleLinkClick('Education')}>
                    Education
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link" onClick={() => handleLinkClick('Science')}>
                    Science
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link" onClick={() => handleLinkClick('Literature')}>
                    Literature
                    <FaAngleRight className='icon'/>
                </span>
                <span className="link" onClick={() => handleLinkClick('Sports')}>
                    Sports
                    <FaAngleRight className='icon'/>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Categories