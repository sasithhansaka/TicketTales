import React from 'react'

function AdminNavbar() {
  return (
    <div className='admin-nav'>
       <p>ADMIN PANEL</p>
       <div style={{width:'40px',height:'40px',borderRadius:'50%',border:"1px solid black",display:'flex',alignItems:'center' ,marginLeft:'20px'}}>
       <i class="fa-solid fa-user" style={{marginLeft:'10px'}}></i>
       </div>
    </div>
  )
}

export default AdminNavbar
