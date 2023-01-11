import React from 'react'
import { Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-btn">
            {/* <button type="button" className="btn-toggle-offcanvas"><i className="lnr lnr-menu"></i></button> */}
          </div>
          <div className="navbar-brand">
            
          Navigation Here
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation;