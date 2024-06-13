import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUser ,faLock} from '@fortawesome/free-solid-svg-icons'

function Login() {
  return (
    <>
      <div className="wrapper ">
        <div className="form-box-login ">
          <form className="bg-red-800 shadow-xl  " action="">
            <h1 className="logbtn">Login</h1>
            <div className="username" >
              <input className="nameinput" type="text" placeholder="UserName" required />
               <FontAwesomeIcon className="nameicon" icon={faUser} />
            </div>

            <div className="inputpassword">
              <input className="{passwordinput" type="password" placeholder="Password" required />
              <FontAwesomeIcon className="passwordicon" icon={faLock} />
            </div>

            <div className="remember  my-3">
              <label className="mr-66">
                <input className="mr-2"  type="checkbox"></input>Remember Me
              </label>
              <a className="ml-10 "  href="">Forget Password</a>
            </div>

            <div className="loginbtn">
              <button type="submit">Login</button>
            </div>

            <div className="regester-link">
              <p>
                Don't not have an Account <a href="">Register</a>
              </p>             
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
