
import { Link } from 'react-router-dom';
import bgImg from '../../assets/login/register.png'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContent } from '../../Provider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContent);
    const [show, setShow] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const photoUrl = form.email.value;
        const email = form.email.value;
        const password = form.password.value;
        const checked = form.checked.checked;
        const user = { name, photoUrl, email, password, checked }

        // create a user
    }

    return (
        <div className='md:flex gap-28 max-w-[1200px] mx-auto' >
            <div className='md:w-1/2 md:flex items-center justify-center'>
                <form onSubmit={handleRegister} className="bg-[#F5F5F5] px-6 py-12 space-y-6 w-full">
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
    );
};

export default Register;
