import React from 'react';
import classes from './Fpwd.module.css';

export function Fpwd() {
    return (
        <div className={classes.forgot}>
            <div className={classes.forgot_inner}>
                <form action="">
                    <h2>Password reset</h2>
                    <div className={classes.text}>
                        <p>Forgotten your password?</p>
                        <p>We'll send you code an e-mail allowing you to reset it.</p>
                    </div>
                    <label>Email</label>
                    <input type='text' placeholder='Enter your email' name='email'/>
                    <label>Code</label>
                    <input type='text' placeholder='Enter your code' name='code'/>
                    <button>Reset</button>
                </form>
            </div>
        </div>
    );
}