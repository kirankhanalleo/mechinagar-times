import React from 'react'
import "./RecentNews.scss"
import { CiClock1 } from "react-icons/ci";
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import truncateText from "../../utils/truncateText"
const RecentNews = () => {
    const navigate = useNavigate()
    const{data,loading,error}=useFetch("/news?latest=true")
    const handleClick=(newsId)=>{
        navigate(`/news/${newsId}`);
    }
  return (
    <div className="recentNews">
        <div className="recentNewsContents">
            <div className="header">
                <span className="recent active">Recent</span>
                <span className="popular">Popular</span>
            </div>
            { loading ? <p>Loading...</p>:
                <>
                {data.map(news=>(
                <div className="newsContent" key={news._id} onClick={()=>handleClick(news._id)}>
                    <div className="left">
                        <img src={news.image} alt="newsImg" />
                    </div>
                    <div className="right">
                        <span className="headline">{truncateText(news.title,5)}</span>
                        <span className="publishedDate">
                            <CiClock1 className='icon'/>
                            <span>9 January, 2024</span>
                        </span>
                    </div>
                </div>
                ))}
                </>
            }
            
        </div>
    </div>
  )
}

export default RecentNews