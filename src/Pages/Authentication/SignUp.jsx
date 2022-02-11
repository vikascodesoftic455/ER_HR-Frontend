import React from "react";
import { Link } from "react-router-dom";


const SignUp =()=>{
    return(
        <React.Fragment>
            <div class="main-container">
            <section class="switchable">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-6 col-lg-5">
                            <div class="mt--3">
                                <h1>Let's Create your account</h1>
                                <hr class="short"/>
                                <form>
                                    <div class="row">
                                        <div class="col-12"> <input type="name" name="name" placeholder="Type your name"/> </div>
                                        <div class="col-12"> <input type="email" name="email" placeholder="Type your Email"/> </div>
                                        <div class="col-12"> <input type="password" name="Password" placeholder="Type your Password"/> </div>
                                        <div class="col-12"> <input type="password" name="confirmPassword" placeholder="Type Your Confirm Password"/> </div>
                                        <div class="col-12"> <button type="submit" class="btn btn--primary">SignUp</button> </div>
                                    </div>
                                </form>
                                <hr />
                                <div class="col-12"> <span class="type--fine-print">By signing up, you agree to the <Link to='/'>Terms of Service</Link></span> </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5"> <img alt="Image" class="border--round box-shadow-wide" style={{height:"100%" ,width:"100%"}} src="img/register-v2.svg"/> </div>
                    </div>
                </div>
            </section>
        </div>
        </React.Fragment>
    )
}

export default SignUp