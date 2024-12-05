import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/MAin";
import Home from "../pages/Home/Home/Home";
import AllCampaign from "../pages/AllCampaign/AllCampaign";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddNewCampaign from "../pages/AddNewCampaign/AddNewCampaign";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import MyCampaign from "../pages/MyCampaign/MyCampaign";
import UpdateCampaign from "../components/UpdateCampaign/UpdateCampaign";

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
                loader: () => fetch('http://localhost:5000/campaign')
            },
            {
                path: '/viewDetails/:id',
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaignById/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addNewCampaign',
                element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
            },
            {
                path: '/myCampaign',
                element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
            },
            {
                path: '/updateCampaign/:id',
                element: <PrivateRoute><UpdateCampaign></UpdateCampaign></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/campaignById/${params.id}`)
            },
        ]
    },
]);

export default router;