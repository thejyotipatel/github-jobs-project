import React from 'react'

const FilterSidebar = () => {
  return (
    <div className='filter-sidebar'>
      <div className='checkbox-controler'>
        <input type='checkbox' name='fullTime' />
        <label htmlFor='fullTime'>Full time</label>
      </div>
      <div className='location-search'>
        <h2>Location</h2>
        <div className='location-form'>
          <span class='material-icons '>public</span>
          <input
            type='text'
            name='location'
            placeholder='City, state, zip code or country'
          />
        </div>

        <div className='location-radio'>
          <input
            type='radio'
            id='New-York'
            name='job_location'
            value='New York'
          />
          <label for='New-York'>Berlin</label>
          <br />

          <input type='radio' id='Berlin' name='job_location' value='Berlin' />
          <label for='Berlin'>Berlin</label>
          <br />
          <input
            type='radio'
            id='Amsterdam'
            name='job_location'
            value='Amsterdam'
          />
          <label for='Amsterdam'>london</label>
          <br />
          <input type='radio' id='london' name='job_location' value='london' />
          <label for='london'>london</label>
          <br />
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
