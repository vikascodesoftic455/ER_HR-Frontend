import React from 'react'
import {Link}from "react-router-dom";


const Login =()=>{
    return(
        <React.Fragment>
              <div className="main-container">
            <section className="switchable">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-lg-5">
                            <div className="mt--3">
                                <h1>Login</h1>
                                <hr classNam="short"/>
                                <form>
                                    <div class="row">
                                        <div className="col-12"> <input type="email" name="Email" placeholder="Type your username" autoComplete='off'/> </div>
                                        <div className="col-12"> <input type="password" name="Password" placeholder="Type your Password" autoComplete='off'/> </div>
                                        <div className="col-12"> <button type="submit" class="btn btn--primary">LOGIN</button> </div>
                                    </div>
                                </form>
                                 <hr />
                                 <Link to="/signup"><div className="col-12"> <span class="type--fine-print">Create a new account </span> </div></Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5"> <img alt="Image" class="border--round box-shadow-wide" src="img/login-otp-banner.webp"/> </div>
                    </div>
                </div>
            </section>
        </div>
        </React.Fragment>
    )
}
export default Login