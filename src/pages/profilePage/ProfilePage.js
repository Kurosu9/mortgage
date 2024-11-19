import React from 'react';
import classes from './ProfilePage.module.css';

export function ProfilePage() {
    return (
        <div className={classes.profile}>
            <div className={classes.container}>
                <div className={classes.profile_inner}>
                    <h1>Passport Details</h1>
                    <hr/>
                    <form action=''>
                        <div className={classes.form_one}>
                            <div className={classes.var}>
                                <label>INN: </label>
                                <input type='text' placeholder='Enter your INN' name='inn'/>
                            </div>
                            <div className={classes.var}>
                                <label>Name: </label>
                                <input type='text' placeholder='Enter your INN' name='name'/>
                            </div>
                            <div className={classes.var}>
                                <label>Surname: </label>
                                <input type='text' placeholder='Enter your INN' name='surname'/>
                            </div>
                            <div className={classes.var}>
                                <label>Patronymic: </label>
                                <input type='text' placeholder='Enter your patronymic (Optional field)' name='patronymic'/>
                            </div>
                            <div className={classes.var}>
                                <label>Date of birth: </label>
                                <input type='date' placeholder='dd.mm.yyyy' name='date'/>
                            </div>
                            <div className={classes.var}>
                                <label>Sex: </label>
                                <select id='sex' name='sex'>
                                    <option>Man</option>
                                    <option>Woman</option>
                                </select>
                            </div>
                        </div>
                        <hr/>
                        <div className={classes.form_two}>
                            <div className={classes.var}>
                                <label>Document type: </label>
                                <select id='documents' name='document'>
                                    <option>ID</option>
                                    <option>AN</option>
                                </select>
                            </div>
                            <div className={classes.var}>
                                <label>Document number: </label>
                                <input type='number' placeholder='' name='number'/>
                            </div>
                            <div className={classes.var}>
                                <label>Date of issue: </label>
                                <input type='date' placeholder='dd.mm.yyyy' name='date'/>
                            </div>
                            <div className={classes.var}>
                                <label>Issued: </label>
                                <input type='text' placeholder='Who issued the document' name='issued'/>
                            </div>
                            <button>Save&continue</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
