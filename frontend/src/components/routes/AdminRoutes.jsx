import DashBoard from "../page/BackendPage/AdminPage/DashBoardSection/DashBoard";
import DataFact from "../page/BackendPage/AdminPage/DataFact/DataFact";
import ListOfUsers from "../page/BackendPage/AdminPage/ListOfUsersSection/ListOfUsers";
import ProtectRoute from "./ProtectRoute";




export const AdminRoutes = [
    {
        path: "/admin/dashBoard",
        element: (
            <ProtectRoute admin>
                <DashBoard />
            </ProtectRoute>
        )
    },
    {
        path: "/admin/listOfUsers",
        element: (
            <ProtectRoute admin>
                <ListOfUsers />
            </ProtectRoute>
        )
    },
    {
        path: "/admin/dataFacts",
        element: (
            <ProtectRoute admin>
                <DataFact />
            </ProtectRoute>
        )
    },

]
