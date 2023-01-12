import React from 'react'
import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png';
import LeftNav from '../leftside/leftside.component';

const Navigation = () => {
  return (
    <>
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-btn">
            {/* <button type="button" className="btn-toggle-offcanvas"><i className="lnr lnr-menu"></i></button> */}
          </div>
          <div className="navbar-brand">
            <a href="https://hrdb.interlynxsystems.com/public">
						  <img alt='' style={{"position": "relative","top":"-8px","maxWidth":"60%"}} src={logo} className="img-responsive logo" />
					  </a>   
          </div>
        </div>
      </div>
      <LeftNav/>
      <div id="main-content">
        <div className='container-fluid'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Navigation;