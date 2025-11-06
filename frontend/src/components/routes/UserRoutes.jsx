import DeleteAccount from "../page/BackendPage/UserPage/DeleteAccount/DeleteAccount";
import UpdatePassword from "../page/BackendPage/UserPage/UpdatePassword/UpdatePassword";
import UpdateProfile from "../page/BackendPage/UserPage/UpdateProfile/UpdateProfile";
import UploadPicture from "../page/BackendPage/UserPage/UploadPicture/UploadPicture";
import UserProfileInfo from "../page/BackendPage/UserPage/UserProfileInfo/UserProfileInfo";
import UserTravel from "../page/BackendPage/UserPage/UserTravel/UserTravel";
import ProtectRoute from "./ProtectRoute";



export const UserRoutes = [
    {
        path: "/user/settings-Profile",
        element:
            <ProtectRoute>
                <UserProfileInfo />
            </ProtectRoute>
    },

    {
        path: "/user/update-Profile",
        element:
            <ProtectRoute>
                <UpdateProfile />
            </ProtectRoute>

    },

    {
        path: "/user/update-Picture",
        element:
            <ProtectRoute>
                <UploadPicture />
            </ProtectRoute>
    },

    {
        path: "/user/update-Password",
        element:
            <ProtectRoute>
                <UpdatePassword />
            </ProtectRoute>

    },
    {
        path: "/user/delete-Account",
        element:
            <ProtectRoute>
                <DeleteAccount />
            </ProtectRoute>
    },
    {
        path: "/user/yourTravel",
        element:
            <ProtectRoute>
                <UserTravel />
            </ProtectRoute>
    },
]