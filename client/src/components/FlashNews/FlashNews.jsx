import React from 'react'
import "./FlashNews.scss"
import useFetch from '../../hooks/useFetch';
import truncateText from "../../utils/truncateText"
import { useNavigate } from 'react-router-dom';
const FlashNews = () => {
  const navigate = useNavigate()
  const{data,loading}=useFetch("/news?isFlash=true");
  const handleClick=(newsId)=>{
    navigate(`/news/${newsId}`);
  }
  return (
    <div className='flashNews'>
      {
        loading ? <p>Loading...</p>:
        <>
        {data.map(news=>(
          <div className="flashNewsContents" key={news._id}>
              <h1 className="headline">{news.title}</h1>
              <span className="newsImage">
                  <img src={news.image} alt="newsImg" />
              </span>
              <span className="newsSummary">{news.summary}</span>
              <span className="newsContent"><b>{news.location} - </b>{truncateText(news.content,145)}</span>
              <span className="continueReading" onClick={()=>handleClick(news._id)}>Continue Reading</span>
          </div>
        ))}  
        </>
      }
    </div>
  )
}

export default FlashNews