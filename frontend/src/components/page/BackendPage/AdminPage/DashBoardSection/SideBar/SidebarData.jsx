

//import img
import { DashBoard, DataAnalytic, DeleteAccoutn, ListOfUsers, mapImg, UpdatePassword, UpdateProfile, UploadImg, UserIcon, YourTravel } from "../../../../../../assets/Icons"


// Sidebar groups - `roles` limits who sees the group (no roles = everyone)
const SidebarData = [
    {
        id: 0,
        titleName: "Admin",
        roles: ["admin"],
        links: [
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
        titleName: "Account",
        roles: ["user", "admin"],
        links: [
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
        titleName: "Travel",
        links: [
            {
                title: "My trips",
                path: "/user/yourTravel",
                icon: YourTravel
            },
            {
                title: "Travel map",
                path: "/travelMap",
                icon: mapImg
            },
        ]
    },
]



export default SidebarData
