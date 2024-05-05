import React from 'react'
import "./Trending.scss"
const Trending = () => {
  return (
    <div className='trending'>
        <div className="trendingContents">
            <div className="trendingLinks">
                <span className="link active">Home</span>
                <span className="link">SAARC Summit</span>
                <span className="link">Brics Summit</span>
                <span className="link">BBIN</span>
                <span className="link">Gaja War</span>
                <span className="link">Ukraine War</span>
                <span className="link">Asia</span>
                <span className="link">Europe</span>
                <span className="link">America</span>
                <span className="link">Middle East</span>
                <span className="link">Australia</span>
            </div>
        </div>
    </div>
  )
}

export default Trending