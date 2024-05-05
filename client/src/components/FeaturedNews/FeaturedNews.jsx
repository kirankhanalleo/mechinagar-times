import React from 'react'
import "./FeaturedNews.scss"
import { MdOutlineArrowOutward } from "react-icons/md";
import useFetch from '../../hooks/useFetch';
import truncateText from "../../utils/truncateText"
import { useNavigate } from 'react-router-dom';

const FeaturedNews = () => {
    const navigate=useNavigate()
    const{data,loading} = useFetch("/news?isFeatured=true")
    const backgroundImage = data && data.length > 0 ? data[0].image : null;
    const handleClick=(newsId)=>{
        navigate(`/news/${newsId}`);
    }
  return (
    <div className='featuredNews'>
        {loading ? 'Loading' :
            <>
                {data.map(news=>(
                    <div className="featuredNewsContents" style={{ backgroundImage: `url(${backgroundImage})` }} key={news._id}>
                        <div className="innerContents">
                            <h1 className="newsTitle">{news.title}</h1>
                            <span className="newsContent">{truncateText(news.content, 30)}</span>
                            <div className="readPost">
                                <span onClick={()=>handleClick(news._id)}>
                                    Continue Reading
                                    <MdOutlineArrowOutward className='readMoreIcon'/>
                                </span>
                            </div>
                        </div>
                    </div>
                ))} 
            </>
        } 
    </div>
  )
}

export default FeaturedNews