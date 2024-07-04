import React from 'react'
import './styles.css'

function Sidebar() {
  return (
    <div className='bg-white sidebar p-2'>
      <div className='m-2'>
        <i className='bi bi-person-fill me-3 fs-4'></i>
        <span className='brand-name fs-4'>Admin Tahir</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <a className='list-group-item py-2' href='/'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span>Dashboard</span>
        </a>
        <a className='list-group-item py-2 ' href='/'>
          <i className='bi bi-house fs-5 me-3'></i> <span>Home</span>
        </a>
        <a className='list-group-item py-2' href='Student'>
          <i className='bi bi-table fs-5 me-3'></i> <span>Student Cards</span>
        </a>
        <a className='list-group-item py-2' href='VpnRequest'>
          <i className='bi bi-people fs-5 me-3'></i> <span>VPN Request</span>
        </a>
        <a className='list-group-item py-2' href='WifiRequest'>
          <i className='bi bi-people fs-5 me-3'></i> <span>Wifi Request</span>
        </a>
        <a className='list-group-item py-2' href='Login'>
          <i className='bi bi-power fs-5 me-3'></i> <span>Login</span>
        </a>
        <a className='list-group-item py-2' href='Registration'>
          <i className='bi bi-power fs-5 me-3'></i> <span>Registration</span>
        </a>
      </div>
    </div>
  )
}
export default Sidebar
