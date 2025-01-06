
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/login//register.png'
import SocialIcon from '../../components/SocialLogin/SocialLogin';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContent } from '../../Provider/AuthProvider';
import { IoCloseSharp } from "react-icons/io5";


const Login = () => {
    const { loginUser } = useContext(AuthContent);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const checked = form.checked.checked;

        loginUser(email, password)
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
        <div className='bg-white dark:bg-gray-900 dark:text-white'>
            <div className='md:flex gap-28 max-w-[1200px] mx-auto' >
                <div className='md:w-1/2 md:flex items-center justify-center'>
                    <form onSubmit={handleLogin} className="bg-[#F5F5F5] dark:text-black px-6 py-12 space-y-6 w-full">
                        <div>
                            <div className='flex justify-between items-center'>
                                <h6 className='font-bold text-2xl'>Welcome Back!</h6>
                                <Link to='/'>
                                    <IoCloseSharp className='text-2xl hover:text-red-500 cursor-pointer'></IoCloseSharp>
                                </Link>
                            </div>
                            <p className='text-[#707070] font-medium'>Enter your Credentials to access your account</p>
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Email address*" className="input rounded-md py-7 input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <input type={`${show ? 'text' : 'password'}`} name='password' placeholder="Password*" className="input rounded-md py-7 input-bordered" required />
                            <div className='absolute top-5 right-5'>
                                <div onClick={() => setShow(!show)}>
                                    {
                                        show ? <FaEyeSlash className='text-xl'></FaEyeSlash> : <FaEye className='text-xl'></FaEye>

                                    }
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center gap-1'>
                            <input type="checkbox" name="checked" required id="" />
                            <p className='font-medium'>I agree to the Terms & Policy</p>
                        </div>
                        <div>
                            <button className="w-full py-4 rounded-md font-semibold bg-[#000000] text-white">Login</button>
                        </div>
                        <div className="divider">or </div>
                        <SocialIcon></SocialIcon>
                        <div>
                            <p className='font-medium text-center'>Are you new? <Link className='text-blue-600' to='/register'>Register</Link></p>
                        </div>
                    </form>
                </div>
                <div className='md:w-1/2 h-screen flex items-center text-center bg-cover bg-center text-white p-4 opacity-90' style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className='text-center'>
                        <h2 className='font-bold text-[40px] text-center'>Crowd<span className='text-blue-500'>Cube</span></h2>
                        <p className='font-medium text-center'>Be the reason someone smiles today—your donation can turn dreams into reality and hardships into happiness.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;