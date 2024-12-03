import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MAin";
import Home from "../pages/Home/Home/Home";
import AllCampaign from "../pages/AllCampaign/AllCampaign";
import Login from "../pages/Login/Login";

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
                loader: () => fetch('/allCampaign.json')
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
        ]
    },
]);

export default router;