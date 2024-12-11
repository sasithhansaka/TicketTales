import React, { useState } from 'react'
import "./AdminHomePage.css";
import AdminHomeComponent from '../Components/AdminComponents/AdminHomeComponent';
import AdminEventComponent from '../Components/AdminComponents/AdminEventComponent';
import AdminUserComponents from '../Components/AdminComponents/AdminUserComponents';

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
           <div className='slider-bar-container'>
              <button onClick={GotoDashBoardView}>DashBoard</button>
              <button onClick={GotoEventView}>EVENTS</button>
              <button onClick={GotoUsersView}>EVENTS</button>
              {/* <button onClick={GotoDashBoardView}>DashBoard</button>
              <button onClick={GotoDashBoardView}>DashBoard</button> */}

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
