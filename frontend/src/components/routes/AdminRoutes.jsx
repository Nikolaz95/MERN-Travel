import DashBoard from "../page/BackendPage/AdminPage/DashBoardSection/DashBoard";
import DataFact from "../page/BackendPage/AdminPage/DataFact/DataFact";
import ListOfUsers from "../page/BackendPage/AdminPage/ListOfUsersSection/ListOfUsers";




export const AdminRoutes = [
    {
        path: "/admin/dashBoard",
        element: (
            <DashBoard />
        )
    },
    {
        path: "/admin/listOfUsers",
        element: (
            < ListOfUsers />
        )
    },
    {
        path: "/admin/dataFacts",
        element: (
            <DataFact />
        )
    },

]