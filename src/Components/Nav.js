import React from 'react'

function Nav({ Toggle }) {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-transparent'>
      <i className='navbar-brand bi bi-justify-left fs-4' onClick={Toggle}></i>
      <button
        className='navbar-toggler d-lg-none'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavId'
        aria-controls='collapsibleNavId'
        aria-expanded='false'
        aria-label='Toggle navigation'>
        <i className='bi bi-justify'></i>
      </button>
      <div className='collapse navbar-collapse' id='collapsibleNavId'>
        <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle text-white'
              href='https://example.com'
              id='dropdownId'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'>
              Yousof
            </a>
            <div className='dropdown-menu' aria-labelledby='dropdownId'>
              <a className='dropdown-item' href='https://example.com'>
                Profile
              </a>
              <a className='dropdown-item' href='https://example.com'>
                Setting
              </a>
              <a className='dropdown-item' href='https://example.com'>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
