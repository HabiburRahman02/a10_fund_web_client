import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const Location = () => {
    return (
        <div className=" px-4 mt-10 sm:px-6 lg:px-8">
            <div className="mx-auto text-center">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-400">
                            <FaFacebook size={30} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                            <FaTwitter size={30} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-400">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
