import React from 'react'
import img from '../thumbs/01.jpg'
const JobsBox = ({ imgUrl, companyName, jobPos, location, time }) => {
  return (
    <div className='jobsbox'>
      <div className='desc'>
        <img src={img || imgUrl || 'not found'} alt='company logo' />
        <div className='desc-contant'>
          <p>{'github' || companyName}</p>
          <h1>{'Front-End Software Engineer' || jobPos}</h1>
          <p>full time</p>
        </div>
      </div>
      <div className='location_time'>
        <div className='place_time'>
          <p className=''>
            <span class='material-icons '>public</span> {'new york' || location}
          </p>
          <p className=''>
            <span class='material-icons '>schedule</span> {time || '5'} days ago
          </p>
        </div>
      </div>
    </div>
  )
}

export default JobsBox
