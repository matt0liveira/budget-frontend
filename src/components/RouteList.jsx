import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardGeneral from "../pages/DashboardGeneral";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Transactions from "../pages/Transactions";

export default () => {
    const router = createBrowserRouter([
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/dashboards/general",
            element: <DashboardGeneral />
        },
        {
            path: "/transactions",
            element: <Transactions />
        }
    ]);
    
    return <RouterProvider router={router} />
};