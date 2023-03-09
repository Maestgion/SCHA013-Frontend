import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state';
import { useNavigate } from "react-router";

import Cookies from 'js-cookie'
import { Link } from "react-router-dom";


function LoginComp() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { setUser } = bindActionCreators(actionCreators, dispatch);
  const handleLogin = () => {
    const data = {
      email,
      password,
    }
    console.log(data)
    setUser(data)
    // axios.post(`${API_URI}/auth/login`, data)
    //   .then(res => {
    //     console.log(res.data)
    //     setUser(res.data.data)
    //     Cookies.set('uid', res.data.data.id)
    //     toast.success(`Login Successful`)
    //     navigate('/')
    //   }).catch(err => {
    //     console.log(err)
    //     toast.error(`Login Failed`)
    //   })
  }

  return <div className="">
    <div className="">
      <h2>
        SRM HUB Mobile Interface coming soon... <br></br>
        To use the application open it in desktop or tablet.
      </h2>
    </div>
    <div className="">
      <div>
        <div className="">
          {/* <img src={Logo1} className="" /> */}
        </div>
        <h1>
          Welcome to the<br></br>SRM HUB
        </h1>
      </div>
    </div>
    <form className="" onSubmit={(e) => { e.preventDefault(); handleLogin() }} >
      <h1>Login</h1>
      <div className="">
        <p>Enter the credentials to access the portal</p>
      </div>
      <div className="">
        <div className="">
          <label>Email</label>
          <input type="email" placeholder="Ex. John Doe" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="">
          <Link to="/forgotpassword">Forgot Password?</Link><br></br>
          <Link to="/signup">Request Access?</Link>
        </div>
      </div>
      <div className="">
        <button type={'submit'}>Login</button>
      </div>
    </form>
  </div>
}

export default LoginComp;
