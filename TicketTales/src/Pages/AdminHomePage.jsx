import React, { useState } from 'react'
import "./AdminHomePage.css";
import AdminHomeComponent from '../Components/AdminComponents/AdminHomeComponent';
import AdminEventComponent from '../Components/AdminComponents/AdminEventComponent';
import AdminUserComponents from '../Components/AdminComponents/AdminUserComponents';
import AdminNavbar from '../Components/AdminComponents/AdminNavbar';

function AdminHomePage() {

    const [step,setstep]=useState(1);

    const GotoDashBoardView = () =>{
        setstep(1)
    }

    const GotoEventView = () =>{
        setstep(2)
    }

    const GotoUsersView = () =>{
        setstep(3)
    }

  return (
    <div>
        <div className='body-container'>
            <AdminNavbar/>
           <div className='slider-bar-container'>
              <button onClick={GotoDashBoardView} className='admin-navbar-button'>DashBoard</button>
              <button onClick={GotoEventView} className='admin-navbar-button'>EVENTS</button>
              <button onClick={GotoUsersView} className='admin-navbar-button'>USERS</button>
              {/* <button onClick={GotoDashBoardView}>DashBoard</button>
              <button onClick={GotoDashBoardView}>DashBoard</button> */}
              <button className='logout-button'>Logout</button>

           </div>
           <div className="navigate-sliders">
            {step===1?(
                <AdminHomeComponent/>
            ):step===2?(
                <AdminEventComponent/>
            ):step===3?(
                <AdminUserComponents/>
            ):(
                <p></p>
            )}


            


           </div>
        </div>
    </div>
  )
}

export default AdminHomePage
