import React from 'react';
import classes from './HomePage.module.css';
import info from './img/info.jpeg';

export function HomePage() {
    return (
        <div className={classes.home}>
            <div className={classes.home_inner}>
                <div className={classes.container}>
                    <div className={classes.home_header}>
                        <div className={classes.header_text}>
                            <p>A mortgage is a loan specifically designed for purchasing property or 
                                real estate. The borrower agrees to repay the loan in monthly installments 
                                over a set period, including principal and interest, while the property serves 
                                as collateral. Mortgages typically have fixed or variable interest rates and 
                                are crucial for individuals looking to own homes or invest in real estate.</p>
                        </div>
                    </div>
                    <div className={classes.home_info}>
                        <img src={info} alt='info'/>
                        <div className={classes.info_text}>
                            <h2><i>Easy to do!</i></h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Nulla amet lectus proin lacus. 
                            Arcu in eget sed integer dui ornare gravida amet. Habitasse vel id est 
                            lorem quam sollicitudin. Etiam nunc commodo sed risus odio massa aenean. 
                            Ipsum sed tempus volutpat blandit quis facilisi quis fringilla dolor. 
                            Consectetur sit tempus dui aliquam tincidunt placerat dignissim. Egestas 
                            tincidunt in cras neque. Consectetur semper lectus sed purus ac vitae blandit. 
                            Volutpat a iaculis fermentum aenean posuere amet odio. Faucibus amet faucibus suspendisse 
                            ullamcorper aliquet hendrerit a mi. Maecenas et posuere ante sit in viverra cursus. 
                            Nunc ac id vel cursus a accumsan feugiat. Ut a suscipit eget auctor. Vulputate volutpat orci 
                            venenatis praesent non sem. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}