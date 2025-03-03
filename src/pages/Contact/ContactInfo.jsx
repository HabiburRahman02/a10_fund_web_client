import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

import contactImg from '../../assets/contact/img.jpeg'
import { Fade, Zoom } from "react-awesome-reveal";

const ContactInfo = () => {
    return (
        <div className="md:w-2/5 mb-6 rounded-2xl p-4">
            <Zoom duration={1000} triggerOnce>
                <img className="rounded-lg h-64 w-full object-cover shadow-lg" src={contactImg} alt="Contact" />
            </Zoom>
            <Fade direction="up" duration={1000} tr>
                <div className="mt-6">
                    <h3 className="text-2xl font-semibold">Crowd Cube</h3>
                    <p className="text-xl">
                        A Fund Rising Platform
                    </p>
                </div>
            </ Fade>
            <div className="mt-6 space-y-2">
                <Fade direction="up" duration={1000}>
                    <div className="flex items-start gap-4">
                        <FaPhone className="text-2xl text-blue-500" />
                        <div>
                            <p className="text-xl font-semibold">Phone</p>
                            <p>01779-888454</p>
                        </div>
                    </div>
                </Fade>
                <Fade direction="up" duration={1000}>
                    <div className="flex items-start gap-4">
                        <FaLocationDot className="text-2xl text-blue-500" />
                        <div>
                            <p className="text-xl font-semibold">Address</p>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </Fade>
                <Fade direction="up" duration={1000}>
                    <div className="flex items-start gap-4">
                        <MdEmail className="text-2xl text-blue-500" />
                        <div>
                            <p className="text-xl font-semibold">Email</p>
                            <p>habibur88484@gmail.com</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default ContactInfo;