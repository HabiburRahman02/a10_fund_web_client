
import image from '../../assets/contact/who.png'

const WhoWeAre = () => {
    return (
        <div className="grid grid-cols-1 pb-20 md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
                <img
                    src={image}
                    alt="Our Team"
                    className="rounded-lg object-cover shadow-md"
                />
                <div className="absolute top-0 left-0 w-20 h-20 bg-first hover:bg-second rounded-full border-4 border-white shadow-lg -translate-y-8 -translate-x-8"></div>
            </div>

            {/* Text Section */}
            <div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
                    Who We Are
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Our platform is built on the belief that every effort matters. We connect passionate individuals and organizations to causes that need support, helping create a lasting impact on society.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <span className="text-first text-2xl font-bold mr-4">✔</span>
                        <p className="text-gray-700">
                            <strong>Mission:</strong> To provide a platform for impactful campaigns that inspire change.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-first text-2xl font-bold mr-4">✔</span>
                        <p className="text-gray-700">
                            <strong>Vision:</strong> To build a world where every cause finds the support it needs.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-first text-2xl font-bold mr-4">✔</span>
                        <p className="text-gray-700">
                            <strong>Values:</strong> Collaboration, transparency, and a commitment to positive action.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;