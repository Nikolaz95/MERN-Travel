import React, { useState } from 'react'
import titleName from '../../../../hooks/useTitle';

//import css
import "./UpdateProfile.css"

//import images
import updateImg from '../../../../../assets/icons/iconUpdate.png';


//import components
import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout'
import UserInfoLayout from '../Layouts/UserInfoLayout'
import Button from '../../../../layouts/Buttons/Button';
import Image from '../../../../layouts/Images/Image';



const UpdateProfile = () => {
    titleName(`Update Profile`);
    const user = {
        name: "John Doe",
        email: "n@gmail.com",
        createdAt: "2025-11-04",
        role: "admin"
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (

        <DashBoardLayout>
            <h1>Update Profile</h1>
            <UserInfoLayout>
                <main className='formMain'>
                    <h1>Update Your Profile:</h1>
                    <form className="formContentUpdateProfile" /* onSubmit={submitHandler} */ >
                        <label htmlFor="name_field" className="formLabel">Name:</label>
                        <input type="text" id="name_field"
                            className="form-control" placeholder='fakeUserName'
                            value={name} onChange={(e) => setName(e.target.value)} name="name" />
                        <label htmlFor="email_field" className="form-label">Email:</label>
                        <input type="email" placeholder='fake@email.com' value={email} onChange={(e) => setEmail(e.target.value)}
                            id="email_field" className="form-control" name="email" />
                        <div className="btn-updateProfileSeting">
                            <Button
                                variant="updateProfile" /* disabled={isLoading} */ >
                                <Image variant="icon" src={updateImg} className="iconBtns" />
                                Save Update
                                {/* {isLoading ? "Updating..." : "Save Update"} */}
                            </Button>
                        </div>
                    </form>
                </main>
            </UserInfoLayout>
        </DashBoardLayout>
    )
}

export default UpdateProfile