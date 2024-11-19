import React, { useEffect, useState } from 'react';
import classes from './Login.module.css';
import { Link } from 'react-router-dom';


export function Login({ closeModal }) {
    const [activeModal, setActiveModal] = useState("login");
    useEffect(() => {
        document.body.style.overflow = "hidden";  
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const handleLoginClick = e => {
        e.stopPropagation();
    };
    
    const handleOutsideClick = () => {
        closeModal();
        console.log("Closing modal");
    };

    const handleLinkClick = () => {
        closeModal();
    };

    return (
        <>
            {activeModal === 'login' && (
                <div className={classes.login} onClick={handleOutsideClick}>
                    <div className={classes.login_inner} onClick={handleLoginClick}>
                        <form className={classes.login_form}>
                            <h2>Login</h2>
                            <label htmlFor='email'>Email</label>
                            <input type='text' placeholder='Enter your email' name='emial'/>
                            <label htmlFor='password'>Password</label>
                            <input type='password' placeholder='Enter your password' name='password'/>
                        </form>
                        <Link to='/profile_page' onClick={handleLinkClick}><button>Sign in</button></Link>
                        <div className={classes.login_signup}>
                            <Link to="/register" onClick={handleLinkClick}><a href=''>Sign up</a></Link>
                        </div>
                        <div className={classes.login_fpwd}>
                            <Link to="/forgot_password" onClick={handleLinkClick}><a href=''>Forgot password?</a></Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}