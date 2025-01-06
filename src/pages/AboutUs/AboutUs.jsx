import Heading from "../../components/Heading/Heading";
import OurTeam from "./OurTeam";
import Principles from "./Principles";
import WhoWeAre from "./WhoWeAre";


const AboutUs = () => {
    return (
        <div className="max-w-[1200px] mx-auto py-10 px-8 xl:px-0 ">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className=""> <Heading title='About Us'></Heading></div>
                    <p className="dark:text-gray-400 text-lg lg:text-xl text-gray-600 mt-2">
                        Empowering communities by connecting people to impactful causes and campaigns.
                    </p>
                </div>

                <WhoWeAre></WhoWeAre>
                <Principles></Principles>
                <OurTeam></OurTeam>

                {/* Call to Action */}
                <div className="text-center dark:text-white">
                    <h2 className="dark:text-white text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                        Ready to Make an Impact?
                    </h2>
                    <p className=" dark:text-gray-300 text-lg text-gray-600 mb-6">
                        Join our platform today and start supporting campaigns that matter to you.
                    </p>
                    <button className="px-6 py-3 mb-10 text-lg font-medium text-white bg-first  shadow hover:bg-second transition duration-200">
                        Join Us Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
