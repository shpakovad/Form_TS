import React from 'react';
import s from './Register.module.css'

interface IProps {

}

const Register = (props: IProps) => {
    return (<div className={s.wrapper}>
        <div>Register</div>
        <input value="test@email.nya"></input>
        <input type="password" value="test password nya"></input>
        <input type="password" value="test password nya2"></input>
        <button>Register</button>
        <a href="#/sign-in">Sign In</a>
    </div>)
};

export default Register