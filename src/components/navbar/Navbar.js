import React, { useState } from 'react';
import classes from './Navbar.module.css';
import '../../App.css';
import logo from './img/gikai.png';
import { Login } from '../modals/login/Login';
import {Link} from "react-router-dom";


export function Navbar({ closeModal }) {
    const [activeModal, setActiveModal] = useState(null);
    
    const openLoginModal = () => {
        if (activeModal === null) {
          setActiveModal("login");
        }
    };

    const closeModalHandler = () => {
        setActiveModal(null);
    };

    return (
        <div className={classes.navbar}>
            <div className={classes.container}>
                <div className={classes.navbar_inner}>
                    <div className={classes.logo}>
                        <Link to="/"><img src={logo} alt='logo'/></Link>
                    </div>
                    <div className={classes.sign}>
                        <button onClick={openLoginModal}>Sign in</button>
                        <Link to="/register"><button>Sign up</button></Link>
                    </div>
                </div>
            </div>
            {activeModal === "login" && <Login closeModal={closeModalHandler} />}
        </div>
    );
}