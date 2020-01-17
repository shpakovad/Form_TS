import React from 'react';

interface IProps {

};


const Login = (props: IProps) => {
    return (
        <div>
            <h1> SignIn </h1>
            <form>
                <span> e-mail </span> <input />
                <div>
                    <span> password </span> <input type='password'/>
                </div>
                <a href='#'> Forgot password</a>
                <div>
                    <input type='checkbox'/> <span>Remember me</span>
                </div>
                <button type='submit'>Sign in</button>
                <div>
                    <a href='#'> Registration</a>
                </div>
            </form>
        </div>
    )

};

export default Login