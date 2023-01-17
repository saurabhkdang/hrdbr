import {React, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import LeftNav from '../leftside/leftside.component';
import { signOutStart } from '../../store/login/login.action';
import { selectToken, selectUser } from '../../store/login/login.selector';
import SearchBar from '../../components/search/search.component';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component';

const Navigation = () => {
  document.body.classList.remove('body-backround');
  const items = [
    {
      '/' : [
        {label : 'Home'},
        {label : 'Employee Details'}
      ],
      '/performance' : [
        {'to' : '/', label : 'Home'},
        {'label' : 'Monthly Ratings'},
      ],
      '/send_monthly_rating' : [
        {'to' : '/', label : 'Home'},
        {'label' : 'Send Monthly Ratings'},
      ],
      '/training' : [
        {'to' : '/', label : 'Home'},
        {'label' : 'Events'},
      ],
      '/update_attendance' : [
        {'to' : '/', label : 'Home'},
        {'label' : 'Attendence'},
      ],
      '/job' : [
        {'to' : '/', label : 'Home'},
        { 'label' : 'Job Description'},
      ],
      '/holiday' : [
        {'to' : '/', label : 'Home'},
        {'label' : 'Holidays List'},
      ],
      '/assign-roles' : [
        {'to' : '/', label : 'Home'},
        {'label' : 'Assign Roles'},
      ]
    }
  ]

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
            <Link to="/">
						  <img alt='' style={{"position": "relative","top":"-8px","maxWidth":"60%"}} src={logo} className="img-responsive logo" />
					  </Link>   
          </div>
          <Breadcrumb items={items}/>
          <div className='nav navbar-right'>

            {location.pathname === '/'?<SearchBar/>:""}
            <div id='navbar-menu'>
              <ul className='nav navbar-nav'>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle icon-menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i className="lnr lnr-user"></i>&nbsp;Welcome, {user?user.name:""}<span className="caret"></span></a>
                  <ul className="dropdown-menu user-menu menu-icon">
                    <li className="menu-heading">Welcome, {user?user.name:""}</li>
                    <li>
                      <a to={'/'}>
                        <i className="fa fa-fw fa-user"></i>
                        <span>My Profile</span>
                      </a>
                    </li>
                    <li className="menu-button">
                      <a onClick={logoutHandler} className="btn btn-primary"><i className="fa fa-rocket"></i> Logout</a>
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