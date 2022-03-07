import React from 'react'

const Header = () => {
  return (
    <div className='header-section'>
      <div className='header-contant'>
        <form className='serch-form'>
          <div className='input-control'>
            <span class='material-icons '>work_outline</span>
            <input
              type='text'
              name='serch'
              placeholder='Title, companies, expertise or benefits'
            />
          </div>
          <button type='submit'>Search</button>
        </form>
      </div>
    </div>
  )
}

export default Header
