import Heading from "../../components/Heading/Heading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Location from "./Location";

const Contact = () => {
    return (
        <div className="my-12">
            <div className="max-w-[1200px] mx-auto">
                <Heading title='Contact Us'></Heading>
                <p className="text-xl text-center text-gray-600 mb-8">
                    We are here to help! If you have any questions or inquiries, feel free to reach out to us.
                </p>
                <div className="md:flex items-center gap-16 m-4">
                    {/* Left Section */}
                    <ContactInfo></ContactInfo>

                    {/* Right Section */}
                    <div className="md:w-3/5">
                        <ContactForm></ContactForm>
                    </div>
                </div>
                <Location></Location>
            </div>
        </div >

    );
};

export default Contact;