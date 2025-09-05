import React, { useState } from 'react'
import titleName from '../../../hooks/useTitle';

//import css
import "./Register.css";

//import  icon
import Show from "../../../../assets/icons/icon-show.png"
import Hide from "../../../../assets/icons/icon-hide.png"
import LogIn from "../../../../assets/icons/icon-login.png"
import CreateAccount from "../../../../assets/icons/icon-addAccount.png"

//import components
import MainLayout from '../../../layouts/ContentLayout/MainLayout/MainLayout';
import FormLayout from '../../../layouts/ContentLayout/FormLayout/FormLayout';
import Button from '../../../layouts/Buttons/Button';
import { NavLink } from 'react-router';
import Image from '../../../layouts/Images/Image';

const Register = () => {
    titleName('Register');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <MainLayout>
                <FormLayout>
                    <h1 className='titleReg'>Create Accunt</h1>
                    <div className="formContent">
                        <form className='formRegister'>
                            <label htmlFor="name" className="labelTitle" >Your Username:</label>
                            <input type="text" name="name" id='name' className='inputContent'
                                placeholder='username...' />
                            <label htmlFor="mail" className="labelTitle">
                                Your Emai:
                            </label>
                            <input type="email" name="email" id='mail' className='inputContent' placeholder='fake@email.com' />

                            <label htmlFor="pwd" className="labelTitle">
                                Password :
                            </label>
                            <div className="pasword-contentRegister">
                                <input type={showPassword ? "text" : "password"}
                                    name="password" id='pwd' className='inputContent'
                                    placeholder='password...' />
                                <Image title={showPassword ? "Hide password" : "Show password"}
                                    src={showPassword ? Hide : Show} className='imgHideShow'
                                    onClick={() => setShowPassword(prevState => !prevState)} />
                            </div>
                            <section className="bottonForm-Register">
                                <div className="btn-Register">
                                    <Button variant="createAcc">
                                        <p>Create a New Accoutn</p>
                                        <Image src={CreateAccount} variant="icon" />
                                    </Button>
                                </div>
                                <div className="divider-text">
                                    <span className="dividerText">Or:</span>
                                </div>
                                <div className="btn-loginSingIn">
                                    <p className="alrText">You already have account ?</p>
                                    <NavLink to="/signIn" className="singIn">
                                        <Button variant="loginBtn">
                                            <Image src={LogIn} variant="icon" />
                                            <p>Sing In</p>
                                        </Button>
                                    </NavLink>
                                </div>
                            </section>
                        </form>
                    </div>
                </FormLayout>
            </MainLayout>

        </>
    )
}

export default Register