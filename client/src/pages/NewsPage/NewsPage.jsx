import React from 'react'
import "./NewsPage.scss"
import Navbar from "../../components/Header/Navbar/Navbar"
import Trending from "../../components/Header/Trending/Trending"
import RecentNews from "../../components/RecentNews/RecentNews"
import Categories from "../../components/Categories/Categories"
import PopularNews from "../../components/PopularNews/PopularNews"
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import Footer from "../../components/Footer/Footer"
import useFetch from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
const NewsPage = () => {
  const location=useLocation()
  const newsId = location.pathname.split('/')[2]
  const{data,loading}=useFetch(`/news/find/${newsId}`)
  return (
    <div className="newsPage">
      <Navbar/>
      <Trending/>
      { loading ? <p>Loading...</p> : 
      <>
        <div className="contentWrapper">
          <div className="newsPageContent">
            <span className="category">
              {data.categories}
              <hr className='cat-hr'/>
            </span>
            <span className="title">{data.title}</span>
            <span className="newsSummary">{data.summary}</span>
            <img src={data.image} alt="newsImage" className='newsImage' />
            <span className="author">By: {data.author}</span>
            <span className="publishedDetails">
              <span>Published at : 9 January, 2024</span>
              <span>Updated at :9 January, 2024 09:29</span>
              <span> {data.location}</span>
            </span>
            <span className="content">{data.content}</span>
            <PopularNews />
          </div>
          <div className='sidebar'>
            <RecentNews />
            <Categories />
            <NewsLetter/>
          </div>
        </div>
        <Footer/>
      </>
      }
    </div>
  )
}

export default NewsPage