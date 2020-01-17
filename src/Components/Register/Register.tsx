import React, { useState, ChangeEvent } from 'react';
import s from './Register.module.css'

interface IProps {

}

const Register = (props: IProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const onChangePass = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    return (<div className={s.wrapper}>
        <div>Register</div>
        <input value={email} onChange={onChangeEmail}></input>
        <input type='password' value={password}></input>
        <input type='password' value={password}></input>
        <button>Register</button>
        <a href="#/sign-in">Sign In</a>
    </div>)
};

export default Register