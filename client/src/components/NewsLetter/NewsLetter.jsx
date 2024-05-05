import React from 'react'
import "./NewsLetter.scss"
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
      <div className="newsLetterContents">
        <span className="signUp">Become a Member</span>
        <span className="title">Discover Stories, One Blog at a Time</span>
        <span className="input">
          <input type="text" placeholder='Enter your email'/>
        </span>
        <span className="button">
          <button>Sign Up</button>
        </span>
        <span className="bottom">By signing up, you agree to our <b>Privacy Policy</b></span>
      </div>
    </div>
  )
}

export default NewsLetter