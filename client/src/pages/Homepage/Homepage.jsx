import React from 'react'
import "./Homepage.scss"
import Navbar from "../../components/Header/Navbar/Navbar"
import Trending from "../../components/Header/Trending/Trending"
import HotNews from "../../components/Header/HotNews/HotNews"
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews"
import LatestNews from "../../components/LatestNews/LatestNews"
import FlashNews from "../../components/FlashNews/FlashNews"
import RecentNews from "../../components/RecentNews/RecentNews"
import PopularNews from "../../components/PopularNews/PopularNews"
import Categories from '../../components/Categories/Categories'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/Footer/Footer'
const Homepage = () => {
  return (
    <div className="homePage">
        <Navbar />
        <Trending />
        <HotNews/>
        <FeaturedNews/>
        <LatestNews/>
        <div className="rowWrapper">
            <div className="firstRow">
                <div className="firstRowColumn1">
                    <FlashNews />
                    <PopularNews/>
                </div>
                <div className="firstRowColumn2">
                    <RecentNews/>
                    <Categories/>
                    <NewsLetter/>
                </div>
            </div>
        </div>
        <Footer/>
    </div> 
  )
}

export default Homepage