
import { Link, useNavigate } from 'react-router-dom';
import bgImg from '../../assets/login/register.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContent } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContent);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        // const checked = form.checked.checked;


        // validation
        if (password.length < 6) {
            Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Password must be 6 character or longer ",
                showConfirmButton: true,
            });
            return;
        }

        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!regex.test(password)) {
            Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "Password must be One uppercase & one lowercase",
                showConfirmButton: true,
            });
            return;
        }

        // create a user
        createUser(email, password)
            .then(() => {
                // update user profile
                updateUserProfile(name, photoUrl)
                    .then(result => {
                        console.log(result);
                    })

                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Create a user successfully",
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
                    <form onSubmit={handleRegister} className="bg-[#F5F5F5] dark:text-black px-6 py-12 space-y-6 w-full">
                        <div className='mx-auto text-center'>
                            <h6 className='font-bold text-2xl'>Welcome To</h6>
                            <h2 className='font-bold text-[40px]'>Crowd<span className='text-blue-500'>Cube</span></h2>
                        </div>
                        <div className="form-control">
                            <input type="text" name='name' placeholder="Your Name" className="input rounded-md py-7 input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="text" name='photoUrl' placeholder="Photo Url" className="input rounded-md py-7 input-bordered" required />
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
                            <input type="checkbox" required name="checked" id="" />
                            <p className='font-medium'>I agree to the Terms & Policy</p>
                        </div>
                        <div>
                            <button className="w-full py-4 rounded-md font-semibold bg-[#000000] text-white">Register</button>
                        </div>
                        <div className="divider">or </div>

                        <div>
                            <p className='font-medium text-center'>Are you new? <Link className='text-blue-600' to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
                <div className='md:w-1/2 h-screen flex items-center text-center bg-cover bg-center p-24 opacity-90 text-white' style={{ backgroundImage: `url(${bgImg})` }}>
                    <div>

                        <h2 className='font-bold text-[40px]'>Crowd<span className='text-blue-500'>Cube</span></h2>
                        <p className='font-medium'>Your small contribution can bring a huge change, empowering lives and creating hope for a brighter tomorrow</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
