import React from 'react';

const Signup = ({setSignin}) => {
    return (
        <form action="" className="login-page-signin-form">
            <h1 class="h3 mb-3 font-weight-normal text-center">Please Sign Up</h1>
            <label for="inputName" class="sr-only mt-3">Name</label>
            <input type="text" id="inputName" class="form-control" placeholder="Name" required="" autofocus="" />
            <label for="inputEmail" class="sr-only mt-3">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email" required="" />
            <label for="inputPassword" class="sr-only mt-3">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" />
            <div className='my-3'>Have an account <span className="text-primary" style={{cursor: "pointer"}} onClick={() => setSignin(true)}><u>Sign in</u></span></div>
            <div className="d-flex pb-4">
                <button class="btn btn-primary ms-auto w-100" type="submit" >Sign Up</button>
            </div>
        </form>
    );
};

export default Signup;