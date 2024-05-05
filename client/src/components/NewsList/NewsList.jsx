import React from 'react'
import "./NewsList.scss"
import { MdOutlineArrowOutward } from "react-icons/md";
import useFetch from '../../hooks/useFetch';
import truncateText from "../../utils/truncateText"
import { useLocation, useNavigate } from 'react-router-dom';
const NewsList = () => {
    const navigate = useNavigate()
    const location =useLocation()
    const category = location.pathname.split('/')[3]
    const{data,loading}=useFetch(`/news?category=${category}`);
    const handleClick=(newsId)=>{
        navigate(`/news/${newsId}`);
    }
    return (
    <div className='newsList'>
        <span className="categoryName">
                {category}
                <hr className='cat-hr'/>
            </span>
        <div className="newsListContent"> 
        <div className="newsContainerWrapper">
            {loading ? "Loading":
            <>
                {data.map(news=>(
                    <div className="newsContainer" key={news._id}>
                        <img src={news.image} alt="newsImage" className='newsImage'/>
                        <h1 className="newsHeadline">{news.title}</h1>
                        <span className="newsContent">{truncateText(news.content,40)}</span>
                        <span className="readMore" onClick={()=>handleClick(news._id)}>
                            Continue Reading
                            <MdOutlineArrowOutward className='readMoreIcon'/>
                        </span>
                    </div>
                ))}
            </>
            }
            </div>
        </div>
    </div>
  )
}

export default NewsList