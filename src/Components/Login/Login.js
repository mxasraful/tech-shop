import React from 'react';
import { useState } from 'react';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import logo from './../../logo/logo-bg-white.jpg'

const Login = () => {
    
    const [signin, setSignin] = useState(true)


    return (
        <div className="container login-page-main">
            <div className="d-flex justify-content-center">
                <div className="card col-md-3 mt-5">
                    <div class="form-signin card-body" pb-autologin="true" autocomplete="off">
                        <div className=' text-center'>
                            <img class="mb-4" src={logo} alt="" width="150"/>
                        </div>
                        {
                            signin ?
                                <Signin setSignin={setSignin}/>
                                :
                                <Signup setSignin={setSignin}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;