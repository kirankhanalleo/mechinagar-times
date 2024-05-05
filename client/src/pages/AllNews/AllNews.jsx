import React from 'react'
import "./AllNews.scss"
import Navbar from '../../components/Header/Navbar/Navbar'
import Trending from '../../components/Header/Trending/Trending'
import NewsList from '../../components/NewsList/NewsList'
const AllNews = () => {
  return (
    <div className='allNews'>
        <Navbar/>
        <Trending/>
        <NewsList/>
    </div>
  )
}

export default AllNews