import React, {ChangeEvent, useState} from 'react';

interface IProps {

};

const Login = (props: IProps) => {

    const [email, setEmail] = useState('');
    let onChangeEmail=((e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    });

    const [password, setPassword] = useState('');
    let onChangePassword=((e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    });

    return (
        <div>
            <h1> SignIn </h1>
            <form>
                <span> e-mail </span> <input onChange={onChangeEmail} value={email} />
                <div>
                    <span> password </span> <input type='password' onChange={onChangePassword} value={password} />
                </div>
                <a href='/forgot'> Forgot password</a>
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