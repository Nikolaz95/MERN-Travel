import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';

//import css
import "./UpdatePassword.css"

//import images
import SaveUpdate from "../../../../../assets/icons/iconUpdate.png"


import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import UserInfoLayout from '../Layouts/UserInfoLayout';
import Button from '../../../../layouts/Buttons/Button';
import Image from '../../../../layouts/Images/Image';


const UpdatePassword = () => {
    titleName(`Update Password`);

    const user = {
        name: "John Doe",
        email: "n@gmail.com",
        createdAt: "2025-11-04",
        role: "admin"
    };

    const [oldPassword, setOldPassword] = useState("");
    const [password, setPassword] = useState("");
    return (
        <DashBoardLayout>
            <h1>Update Password</h1>

            <UserInfoLayout>

                <section className="updatePasswordSection">
                    <h1>Update Password:</h1>
                    <form className="formUpdatePassword" /* onSubmit={submitHandler} */>
                        <label htmlFor="name_field" className="form-label">Old Password:</label>
                        <input
                            type="password"
                            id="name_field"
                            placeholder='user password'
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="form-control"
                            name="name" />
                        <label htmlFor="email_field" className="form-label">New Password:</label>
                        <input
                            type="password"
                            id="email_field"
                            placeholder='user new password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            name="email" />
                        <Button
                            variant="updatePassword" /* disabled={isLoading} */>
                            <Image variant="icon" src={SaveUpdate} className="iconBtns" />
                            Update Password

                            {/*  {isLoading ? "Updating..." : "Update Password"} */}
                        </Button>
                    </form>
                </section>

            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default UpdatePassword