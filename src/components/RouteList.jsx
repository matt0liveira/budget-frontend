import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export default () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <h1>Hello, World!</h1>
        },
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "/signup",
            element: <SignUp />
        }
    ]);
    
    return <RouterProvider router={router} />
};