import React from 'react'

const Header = () => {
  return (
    <div className='header-section'>
      <form className='serch-form'>
        <div className='input-control'>
          <span class='material-icons '>work_outline</span>
          <input
            type='text'
            name='serch'
            placeholder='Title, companies, expertise or benefits'
          />
        </div>
        <button type='submit'>
          <span className='search-text'>Search</span>
          <span class='material-icons search-icon'>search</span>
        </button>
      </form>
    </div>
  )
}

export default Header
