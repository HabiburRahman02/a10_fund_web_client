import mission from '../../assets/contact/mission.png'
import vision from '../../assets/contact/vision.png'
import values from '../../assets/contact/values.png'
const Principles = () => {
    return (
        <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Our Guiding Principles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Mission */}
                <div className="p-6 bg-gray-50 hover:bg-white shadow hover:shadow-lg transition duration-300">
                    <img
                        src={mission}
                        alt="Mission"
                        className="w-20 h-20 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                        Our Mission
                    </h3>
                    <p className="text-gray-700 text-center">
                        To provide a trusted platform where campaigns meet supporters to bring positive change.
                    </p>
                </div>
                {/* Vision */}
                <div className="p-6 bg-gray-50 hover:bg-white shadow hover:shadow-lg transition duration-300">
                    <img
                        src={vision}
                        alt="Vision"
                        className="w-20 h-20 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                        Our Vision
                    </h3>
                    <p className="text-gray-700 text-center">
                        To create a world where every cause gets the attention and support it deserves.
                    </p>
                </div>
                {/* Values */}
                <div className="p-6 bg-gray-50 hover:bg-white shadow hover:shadow-lg transition duration-300">
                    <img
                        src={values}
                        alt="Values"
                        className="w-20 h-20 mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">
                        Our Values
                    </h3>
                    <p className="text-gray-700 text-center">
                        Collaboration, integrity, transparency, and innovation guide everything we do.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Principles;