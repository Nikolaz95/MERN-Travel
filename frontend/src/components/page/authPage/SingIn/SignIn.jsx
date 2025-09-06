import React, { useState } from 'react'
import titleName from '../../../hooks/useTitle';
import { Form, NavLink } from 'react-router';
/* import useNavigateTo from '../../hooks/useNavigateTo'; */


//import css
import "./SignIn.css";

//import  icon
import Show from "../../../../assets/icons/icon-show.png"
import Hide from "../../../../assets/icons/icon-hide.png"
import LogIn from "../../../../assets/icons/icon-login.png"
import CreateAccount from "../../../../assets/icons/icon-addAccount.png"

//import components
import MainLayout from '../../../layouts/ContentLayout/MainLayout/MainLayout';
import Button from '../../../layouts/Buttons/Button';
import Image from '../../../layouts/Images/Image';
import FormLayout from '../../../layouts/ContentLayout/FormLayout/FormLayout';

const SignIn = () => {
    titleName('Sign In');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <MainLayout>
                <FormLayout>
                    <h1 className="titleSingIn">Sign in</h1>
                    <section className="formSection">
                        <div className="lefSingIn">
                            <form className="formSingIn">
                                <label htmlFor="mail" className="titleEmain">
                                    Your Email:
                                </label>
                                <input type="email" id='mail' className="inputContent" placeholder='fake@email...' />
                                <label htmlFor="pwd" className="titlePwd">
                                    Password :
                                </label>
                                <div className="paswordContentSingIn">
                                    <input type={showPassword ? "text" : "password"}
                                        id='pwd' value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="inputContent" placeholder='password...' />
                                    <img title={showPassword ? "Hide password" : "Show password"}
                                        src={showPassword ? Hide : Show} className="imgHideShow"
                                        onClick={() => setShowPassword(prevState => !prevState)} />
                                </div>

                                <div className="bottonForm">
                                    <div className="loginSingIn" >
                                        <Button variant="loginBtn">
                                            <Image src={LogIn} variant="icon" />
                                            Log in
                                        </Button>
                                    </div>
                                    <div className="dividerText">
                                        <span className="registeringText">Or:</span>
                                    </div>
                                    <div className="btnRegistering">
                                        <NavLink to="/registration">
                                            <Button variant="createAcc">
                                                <Image src={CreateAccount} variant="icon" />
                                                <p>Create a New Accoutn</p>
                                            </Button>
                                        </NavLink>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="rightSingIn">
                            <h1 className="registeringTitle">Benefits of your free  account</h1>
                            <p className="registeringText">Personalized Recommendations</p>
                            <h1 className="registeringTitle">Your Watchlist</h1>
                            <p className="registeringText">Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                            <h1 className="registeringTitle">Your Favorit list</h1>
                            <p className="registeringText">Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                        </div>
                    </section>
                </FormLayout>
            </MainLayout>
        </>
    )
}

export default SignIn