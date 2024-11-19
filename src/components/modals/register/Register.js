import React from 'react';
import classes from './Register.module.css';

export function Register() {
    return (
        <div className={classes.register}>
            <div className={classes.register_inner}>
                <form action=''>
                    <h2>Registration</h2>
                    <label>INN</label>
                    <input type='text' placeholder='Enter your INN' name='inn'/>
                    <label>Email</label>
                    <input type='text' placeholder='Enter your email' name='email'/>
                    <label>Password</label>
                    <input type='password' placeholder='Enter your password' name='password'/>
                    <label>Repeat password</label>
                    <input type='password' placeholder='Repeat your password' name='re_pssword'/>
                    <button>Sign up</button>
                </form>
            </div>
        </div>
    );
}