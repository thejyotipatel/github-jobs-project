import React from 'react'
import JobsBox from './jobs-box'

const JobsContainer = () => {
  // imgUrl, companyName, jobPos, location, time
  return (
    <div className='jobs-Container'>
      <JobsBox
        imgUrl={''}
        companyName={''}
        jobPos={''}
        location={''}
        time={2}
      />
      <JobsBox
        imgUrl={''}
        companyName={''}
        jobPos={''}
        location={''}
        time={2}
      />
      <JobsBox
        imgUrl={''}
        companyName={''}
        jobPos={''}
        location={''}
        time={1}
      />
      <JobsBox
        imgUrl={''}
        companyName={''}
        jobPos={''}
        location={''}
        time={2}
      />
    </div>
  )
}

export default JobsContainer
