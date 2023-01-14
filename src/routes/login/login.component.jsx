import {React, useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/logo.png';
import left from '../../assets/left.png';
import { signInStart, submitOTP } from '../../store/login/login.action';
import { selectToken } from '../../store/login/login.selector';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    email : '',
    otp : '',
}

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, otp} = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value});
    }

    const loginMe = async (event) => {
        event.preventDefault();

        try {
            dispatch(submitOTP(email, otp))
        } catch (error) {
            
        }
    }

    const token = useSelector(selectToken);
    console.log(token);
    
    const handleEmailSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(signInStart(email));
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        if(token!=null)
        navigate("/");
    },[token]);

    return (
        <>
        <div className='body-backround'>
            <div className="sti-logo">
                <img src={logo} style={{"height" : "60px"}} alt='Logo'/>
            </div>
            <div className="login-nsect" style={{"height":"439px"}}>
                <div className="login-lft">
                    <img src={left} alt=''/>
                </div>
                <div className="login-rgt">
                    <div className="logn-head">LOG IN</div>
                    <div className="logn-frm">
                        <br/>
                        <div id="LoginBox">
                            <form method="POST">
                                <div>
                                    <br/>
                                    <div id="div_username">
                                        <label>
                                            <b>Email Id</b>
                                            <span style={{"color":"red"}}>*</span>
                                        </label>
                                        <div title="Username" data-rel="tooltip">
                                            <input type="text" className="form-control" name="email" id="signin-email" placeholder="Email" onChange={handleChange} value={email}/>
                                        </div>
                                        <br/>
                                    </div>
                                    <div id="otp_box">
                                        <label htmlFor="otp"><b>OTP</b><span style={{"color":"red"}}>*</span></label>
                                        <div>
                                            <input type="password" name="otp" id="otp" onChange={handleChange} value={otp}/>
                                        </div>
                                    </div>
                                    <button id="btn_Login" type="submit" onClick={loginMe}>Login</button>
                                    <button id="btn_Login" type="submit" onClick={handleEmailSubmit}>Send OTP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        </div>
        </>
    )
}

export default Login