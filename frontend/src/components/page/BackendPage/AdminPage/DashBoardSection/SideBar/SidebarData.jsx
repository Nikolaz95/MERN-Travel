

//import img
import { DashBoard, DataAnalytic, DeleteAccoutn, ListOfUsers, UpdatePassword, UpdateProfile, UploadImg, UserContent, UserIcon, UserSettings, YourTravel } from "../../../../../../assets/Icons"


const SidebarData = [
    {
        id: 0,
        titleName: "Dashboard",
        icon: DashBoard,
        roles: ["admin"],

        dropDownList: [
            {
                title: "Dashboard",
                path: "/admin/dashBoard",
                icon: DashBoard
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