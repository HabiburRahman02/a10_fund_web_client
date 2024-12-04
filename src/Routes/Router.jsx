import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MAin";
import Home from "../pages/Home/Home/Home";
import AllCampaign from "../pages/AllCampaign/AllCampaign";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allCampaign',
                element: <AllCampaign></AllCampaign>,
                // loader: () => fetch('/allCampaign.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;