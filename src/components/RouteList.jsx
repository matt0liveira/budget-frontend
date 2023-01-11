import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../pages/SignIn";

export default () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <h1>Hello, World!</h1>
        },

        {
            path: "/signin",
            element: <SignIn />
        }
    ]);
    
    return <RouterProvider router={router} />
};