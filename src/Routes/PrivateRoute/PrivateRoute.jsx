import { useContext } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContent);
    const location = useLocation();

    if (loading) {
        return <div className="mx-auto text-center my-20">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' ></Navigate>


};

export default PrivateRoute;