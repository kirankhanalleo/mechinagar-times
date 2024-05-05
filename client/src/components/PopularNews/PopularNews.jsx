import React from 'react'
import "./PopularNews.scss"
import { CiClock1 } from "react-icons/ci";
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
const PopularNews = () => {
    const navigate = useNavigate()
    const{data,loading,error}=useFetch("/news?popular=true");
    const handleClick=(newsId)=>{
        navigate(`/news/${newsId}`);
    }
  return (
    <div className='popularNews'>
        <div className="popularNewsContents">
            <div className="header">
                <h1>Popular</h1>
                <span className="viewAll">View All</span>
            </div>
            <div className="newsContentWrapper">
                { loading?<p>Loading...</p> :
                <>
                {data.map(news=>(
                    <div className="newsContent" key={news._id} onClick={()=>handleClick(news._id)}>
                        <div className="imageContainer">
                            <img src={news.image} alt="newsImg" srcset="" />
                        </div>
                        <div className="newsContainer">
                            <span className="publishedDate">
                                <CiClock1 className='icon'/>
                                9 January, 2024
                            </span>
                            <span className="headline">{news.title}</span>
                        </div>
                    </div>
                ))}
                </>
                }
                
            </div>
        </div>
    </div>
  )
}

export default PopularNews