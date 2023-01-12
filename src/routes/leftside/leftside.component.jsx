import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <div id='left-sidebar' className='sidebar'>
        <button type="button" className="btn btn-xs btn-link btn-toggle-fullwidth">
            <span className="sr-only">Toggle Fullwidth</span>
            <i className="fa fa-angle-left"></i>
        </button>
        <div className="sidebar-scroll">
            <nav id="left-sidebar-nav" className="sidebar-nav">
                <ul id="main-menu" className="metismenu">
                    <li className="menu_dashboard"><Link to="/"><i className="lnr lnr-home"></i> <span>Dashboard</span></Link></li>
                    <li className="menu_listuser"><Link to="/"><i className="lnr lnr-users"></i> <span>Employees Details</span></Link></li>
                    <li className="@yield('menu_performance') @yield('menu_training') @yield('menu_attendance') @yield('menu_job') @yield('menu_holiday')">
                        <a href="#uiElements" className="has-arrow" aria-expanded="false"><i className="fa fa-building-o"></i> <span>Company</span></a>
                        <ul>
                            <li className="menu_performance"><Link to="/performance"><i className="lnr lnr-star"></i> <span>Monthly Rating</span></Link></li>
                            <li className="send_performance"><Link to="/"><i className="fa fa-file-word-o"></i> <span>Send Monthly Rating</span></Link></li>
                            <li className="menu_training"><Link to="/"><i className="fa fa-calendar"></i> <span>Events</span></Link></li>
                            <li className="menu_attendance"><Link to="/"><i className="lnr lnr-hourglass"></i> <span>Attendance</span></Link></li>
                            <li className="menu_job"><Link to="/job"><i className="fa fa-file-word-o"></i> <span>Job Description</span></Link></li>
                            <li className="menu_holiday"><Link to="/holiday"><i className="fa fa-file-word-o"></i> <span>Holidays</span></Link></li>
                        </ul>
                    </li>                    
                    <li className="menu_assign_roles"><Link to="/assign-roles"><i className="lnr lnr-users"></i> <span>Assign Roles</span></Link></li>
                    <li><a href="mailto:support@interlynxsystems.com"><i className="lnr lnr-question-circle"></i> <span>Support</span></a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default LeftNav