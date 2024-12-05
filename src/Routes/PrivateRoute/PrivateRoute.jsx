import { useContext } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContent);


    if (loading) {
        return <div className="mx-auto text-center my-20">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' ></Navigate>


};

export default PrivateRoute;