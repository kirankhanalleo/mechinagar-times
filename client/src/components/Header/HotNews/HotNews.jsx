import React from 'react'
import "./HotNews.scss"
import { CiClock1 } from "react-icons/ci";
import { FaAngleLeft,FaAngleRight  } from "react-icons/fa";
const HotNews = () => {
  return (
    <div className='hotNews'>
        <div className="hotNewsContents">
            <div className="title">
                <h1>HOT NEWS</h1>
            </div>
            <div className="newsCarousel">
                <div className="leftContent">
                    <img src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=" alt="news_img" className='newsImage' />
                </div>
                <div className="rightContent">
                    <span className="newsTitle">Nepal's Historic Temple Undergoes</span>
                    <span className="publishedDate">
                        <CiClock1/>
                        7 January, 2024
                    </span>
                </div>
            </div>
            <div className="newsCarousel">
                <div className="leftContent">
                    <img src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=" alt="news_img" className='newsImage' />
                </div>
                <div className="rightContent">
                    <span className="newsTitle">Nepal's Historic Temple Undergoes</span>
                    <span className="publishedDate">
                        <CiClock1/>
                        7 January, 2024
                    </span>
                </div>
            </div>
            <div className="newsCarousel">
                <div className="leftContent">
                    <img src="https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=" alt="news_img" className='newsImage' />
                </div>
                <div className="rightContent">
                    <span className="newsTitle">Nepal's Historic Temple Undergoes</span>
                    <span className="publishedDate">
                        <CiClock1/>
                        7 January, 2024
                    </span>
                </div>
            </div>
            <div className="switchRight">
                <span className="left"><FaAngleLeft/></span>
                <span className="right"><FaAngleRight/></span>
            </div>
        </div>
    </div>
  )
}

export default HotNews