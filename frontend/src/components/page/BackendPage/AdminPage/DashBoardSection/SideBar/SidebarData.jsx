

//import img
import DashBoardIcon from "../../../../../../assets/icons/icon-dashboard.png"
import ListOfUsers from "../../../../../../assets/icons/iconUsersList.png"
import DataAnalytic from "../../../../../../assets/icons/iconWebAnalytics.png"
import AvatarIcon from "../../../../../../assets/icons/avatar-profile.jpg"
import UpdateProfile from "../../../../../../assets/icons/iconUpdateProfile.png"
import UploadImg from "../../../../../../assets/icons/iconUpload.png"
import UpdatePassword from "../../../../../../assets/icons/iconUpdPass.png"
import DeleteAccoutn from "../../../../../../assets/icons/iconDelAcc.png"
import UserSettings from "../../../../../../assets/icons/iconUserSettings.png"

import UserContent from "../../../../../../assets/icons/iconContent.png"

import YourTravel from "../../../../../../assets/icons/iconTravel.png"
import UserIcon from "../../../../../../assets/icons/icon2-user.png"
import ActorFavorit from "../../../../../../assets/icons/icon-dashboard.png"


const SidebarData = [
    {
        id: 0,
        titleName: "Dashboard",
        icon: DashBoardIcon,
        roles: ["admin"],

        dropDownList: [
            {
                title: "Dashboard",
                path: "/admin/dashBoard",
                icon: DashBoardIcon
            },
            {
                title: "List of Users",
                path: "/admin/listOfUsers",
                icon: ListOfUsers
            },
            {
                title: "Data fact",
                path: "/admin/dataFacts",
                icon: DataAnalytic,
            }
        ]
    },

    {
        id: 1,
        titleName: "User Profile",
        icon: UserSettings,
        roles: ["user", "admin"],
        dropDownList: [
            {
                title: "Profile Info",
                path: "/user/settings-Profile",
                icon: UserIcon
            },
            {
                title: "Update Profile",
                path: "/user/update-Profile",
                icon: UpdateProfile
            },

            {
                title: "Upload Picture",
                path: "/user/update-Picture",
                icon: UploadImg,
            },
            {
                title: "Update Password",
                path: "/user/update-Password",
                icon: UpdatePassword,
            },

            {
                title: "Delete account",
                path: "/user/delete-Account",
                icon: DeleteAccoutn,
            },
        ]
    },

    {
        id: 2,
        titleName: "User Content",
        icon: UserContent,
        dropDownList: [
            {
                title: "Your Visit List",
                path: "/user/yourTravel",
                icon: YourTravel
            },
        ]
    },
]



export default SidebarData