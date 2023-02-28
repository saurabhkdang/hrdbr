import React from 'react';
import { Link } from 'react-router-dom';
import MetisMenu from '@metismenu/react';
import './leftside.styles.css';

const LeftNav = () => {
  return (
    <div id='left-sidebar' className='sidebar'>
        <button type="button" className="btn btn-xs btn-link btn-toggle-fullwidth">
            <span className="sr-only">Toggle Fullwidth</span>
            <i className="fa fa-angle-left"></i>
        </button>
        <div className="sidebar-scroll">
            <nav id="left-sidebar-nav" className="sidebar-nav">
                <MetisMenu>
                    <li><Link to="/" exact="true"><i className="lnr lnr-home"></i>Dashboard</Link></li>
                    <li><Link to="/" exact="true"><i className="lnr lnr-users"></i>Employee Details</Link></li>
                    <li><Link to="#" className="has-arrow"><i className="fa fa-building-o"></i>Company</Link>
                        <ul>
                            <li><Link to="/performance"><i className="lnr lnr-star"></i> <span>Monthly Rating</span></Link></li>
                            <li><Link to="/"><i className="fa fa-file-word-o"></i> <span>Send Monthly Rating</span></Link></li>
                            <li><Link to="/"><i className="fa fa-calendar"></i> <span>Events</span></Link></li>
                            <li><Link to="/"><i className="lnr lnr-hourglass"></i> <span>Attendance</span></Link></li>
                            <li><Link to="/job"><i className="fa fa-file-word-o"></i> <span>Job Description</span></Link></li>
                            <li><Link to="/holiday"><i className="fa fa-file-word-o"></i> <span>Holidays</span></Link></li>
                        </ul>
                    </li>
                    <li><Link to="/assign-roles" exact="true"><i className="lnr lnr-users"></i>Assign Roles</Link></li>
                    <li><a href="mailto:support@interlynxsystems.com"><i className="lnr lnr-question-circle"></i> <span>Support</span></a></li>
                </MetisMenu>
            </nav>
        </div>
    </div>
  )
}

export default LeftNav