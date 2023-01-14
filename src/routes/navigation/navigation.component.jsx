import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import LeftNav from '../leftside/leftside.component';
import { signOutStart } from '../../store/login/login.action';
import { selectToken, selectUser } from '../../store/login/login.selector';
import SearchBar from '../../components/search/search.component';

const Navigation = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(signOutStart());
  }

  const token = useSelector(selectToken);
  const user = useSelector(selectUser);

  useEffect(() => {
    if(token == null)
    navigate("/login");
  },[token]);


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
          <div className='navbar-right'>
            <SearchBar/>
            <div id="navbar-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown"></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle icon-menu" data-toggle="dropdown">
                    <i className="lnr lnr-alarm"></i>
                    <span className="notification-dot"></span>
                  </a>
                  <ul className="dropdown-menu notifications">
                    <li className="header"><strong>You have 7 new notifications</strong></li>
                    <li>
                      <a href="#">
                        <div className="media">
                          <div className="media-left">
                            <i className="fa fa-fw fa-flag-checkered text-muted"></i>
                          </div>
                          <div className="media-body">
                            <p className="text">Your campaign <strong>Holiday Sale</strong> is starting to engage potential customers.</p>
                            <span className="timestamp">24 minutes ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="footer"><a href="#" className="more">See all notifications</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <span className="dropdown-toggle icon-menu" data-toggle="dropdown" onClick={logoutHandler}>
                    <i className="lnr lnr-user"></i> &nbsp;
                    <strong>Welcome, {user?user.name:""}</strong>
                  </span>
                  <ul className="dropdown-menu user-menu menu-icon">
                    <li className="menu-heading">Welcome, Saurabh Dang</li>
                    <li><a href="#"><i className="fa fa-fw fa-user"></i> <span>My Profile</span></a></li>
                    <li><a href="#"><i className="fa fa-fw fa-key"></i> <span>Change Password</span></a></li>	
                    <li className="menu-button">
                      <a href="https://localhost/hrdb/public/me/logout" className="btn btn-primary"><i className="fa fa-rocket"></i> Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
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