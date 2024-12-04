import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContent = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const info = {
        user,
        loading,
        createUser,

    }
    return (
        <AuthContent.Provider value={info}>
            {children}
        </AuthContent.Provider>
    );
};

export default AuthProvider;