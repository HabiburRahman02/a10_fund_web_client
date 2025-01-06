import { Fade } from "react-awesome-reveal";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import logo from '../../../assets/logo/money3.png'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Fade>
            <div className="bg-[#1d181f] text-white">
                <footer className="py-16 max-w-[1200px] mx-auto px-6 md:px-0">
                    <div className="sm:flex space-y-12 sm:space-y-0 justify-between">
                        {/* Services Section */}
                        <div>
                            <h6 className="text-lg font-semibold mb-4">Services</h6>
                            <ul className="space-y-2">
                                <li> <Link to='aboutUs' className="hover:text-blue-500 transition-all">About</Link></li>
                                <li> <Link to='contactUs' className="hover:text-blue-500 transition-all">Contact</Link></li>
                                <li> <Link to='allCampaign' className="hover:text-blue-500 transition-all">All Campaign</Link></li>

                            </ul>
                        </div>

                        {/* Company Section */}
                        <div>
                            <h6 className="text-lg font-semibold mb-4">Company</h6>
                            <ul className="space-y-2">
                                <li> <a href='#blogs' className="hover:text-blue-500 transition-all">Blogs</a></li>
                                <li> <a href='#feedback' className="hover:text-blue-500 transition-all">Feedback</a></li>
                                <li> <a href='#team' className="hover:text-blue-500 transition-all">Team</a></li>

                            </ul>
                        </div>

                        {/* Social & Logo Section */}
                        <div className="flex flex-col items-center lg:items-start">
                            <h6 className="text-lg font-semibold mb-4">Social</h6>
                            <div className="flex gap-4 mb-6">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-3xl hover:text-[#1DA1F2] transition-all" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="text-3xl hover:text-[#0077B5] transition-all" />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="text-3xl hover:text-[#1877F2] transition-all" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-3xl hover:text-[#E4405F] transition-all" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-t border-[#444] mt-8 pt-6 flex justify-between items-center text-sm">
                        <div className="flex items-center justify-center mx-auto gap-4">
                            <img src={logo} alt="Logo" className="" />
                            <p>&copy; {new Date().getFullYear()} All Rights Reserved By CrowCube</p>
                        </div>
                    </div>
                </footer>
            </div>
        </Fade>
    );
};

export default Footer;
