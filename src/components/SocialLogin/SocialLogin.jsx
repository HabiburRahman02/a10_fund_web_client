import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import googleImg from '../../assets/login/google.png'
import { useContext } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
// import appleImg from '../../../assets/icons/apple.png'

const SocialIcon = () => {
    const { googleLogin } = useContext(AuthContent);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "User login successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    position: "top-center",
                    icon: "warning",
                    title: `${error.message}`,
                    showConfirmButton: true,
                });
            })
    }



    return (
        <div className="lg:flex gap-6 justify-between">
            <Link onClick={handleGoogleLogin} className="flex items-center gap-2 font-semibold border-2 rounded-md p-4 w-full">
                <img src={googleImg} alt="" />
                <p >Sign in with Google</p>
            </Link>
            <Link className="flex mt-3 cursor-not-allowed md:mt-0 items-center gap-2 font-semibold border-2 rounded-md p-4 w-full">
                <FaGithub className="text-2xl"></FaGithub>
                <p>Sign in with Github</p>
            </Link>
        </div>
    );
};

export default SocialIcon;