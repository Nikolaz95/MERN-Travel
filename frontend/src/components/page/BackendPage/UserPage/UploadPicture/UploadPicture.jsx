import React from 'react'
import titleName from '../../../../hooks/useTitle';


//import css
import "./UploadPicture.css"

//import images
import { AvatarDefault, CancelUpdate, SaveUpdate, UploadCamera } from '../../../../../assets/Icons';


import DashBoardLayout from '../../AdminPage/DashBoardSection/DashboardLayout/DashBoardLayout';
import UserInfoLayout from '../Layouts/UserInfoLayout';
import Button from '../../../../layouts/Buttons/Button';
import Image from '../../../../layouts/Images/Image';

const UploadPicture = () => {
    titleName(`Upload Picture`);
    return (
        <DashBoardLayout>
            <h1>Upload Picture</h1>
            <UserInfoLayout>
                <section className='userUploadContent'>
                    <form action="" className="userUpload-info" /* onSubmit={submitHandler} */>
                        <div className="userUpload-top">
                            <Image variant="icon" src={AvatarDefault} alt="avatar Default" className='userUpload-Profileimg' />
                            <input type="file" name='file' id='file' accept="images/*"/*  onChange={onChange} */ />
                            <label htmlFor="file" className='userUpload-BtnUplFile'>
                                <Image src={UploadCamera} variant="icon" title='Change picture' alt="chose a picture" className='userUpload-camera' />
                            </label>
                        </div>
                        <div className="userUpload-Btns">
                            <Button >
                                <Image variant="icon" src={SaveUpdate} className="iconBtns" />
                                Save Upload
                                {/* {isLoading ? "Uploading..." : "Save Upload"} */}
                            </Button>
                            <Button >
                                <Image variant="icon" src={CancelUpdate} className="iconBtns" />
                                Cancel
                            </Button>
                        </div>
                    </form>
                </section>

            </UserInfoLayout>

        </DashBoardLayout>
    )
}

export default UploadPicture