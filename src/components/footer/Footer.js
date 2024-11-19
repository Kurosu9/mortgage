import React from 'react';
import classes from './Footer.module.css';
import gikai from './img/gikai.png';
import copy from './img/copyright.svg';
import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import twitter from './img/twitter.svg';


export function Footer() {
    return (
        <div className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.footer_inner}>
                    <div className={classes.copyright}>
                        <div className={classes.logo}>
                            <img src={gikai} alt='logo'/>
                        </div>
                        <div className={classes.icon}>
                            <img src={copy} alt='copy'/>
                            <p>Copyright 2023 GikAI</p>
                        </div>
                    </div>
                    <div className={classes.contacts}>
                        <h3>Contact Us</h3>
                        <p>+996 505 787878</p>
                        <p>KG Building, No.10 A</p>
                        <p>gikai@gmail.com</p>
                    </div>
                    <div className={classes.social}>
                        <h3>Social Media</h3>
                        <div className={classes.face}>
                            <img src={facebook} alt='facebook'/>
                            <p>Facebook</p>
                        </div>
                        <div className={classes.twit}>
                            <img src={twitter} alt='twitter'/>
                            <p>Twitter</p>
                        </div>
                        <div className={classes.insta}>
                            <img src={instagram} alt='instagram'/>
                            <p>Instagram</p>
                        </div>
                    </div>
                    <div className={classes.company_info}>
                        <h3>Company Info</h3>
                        <div className={classes.about}>
                            <p>About Us</p>
                            <p>Our partners</p>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}