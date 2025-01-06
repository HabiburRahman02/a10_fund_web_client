import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContent } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {
    const { user } = useContext(AuthContent);
    const navigate = useNavigate();
    const campaign = useLoaderData();
    const currentDateString = new Date().toISOString().split('T')[0];


    const { title, description, amount, photoUrl, type, deadline } = campaign
    const NewDonation = {
        title,
        type,
        deadline,
        amount,
        photoUrl,
        description,
        email: user?.email,
        name: user?.displayName
    }

    const currentDate = new Date(currentDateString).getTime();
    const newDeadline = new Date(deadline).getTime()



    const handleDonateNow = () => {

        if (currentDate > newDeadline) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: "Donation deadline is passed",
                showConfirmButton: true,
            });
            return navigate(-1)
        }

        fetch(`https://funding-server-ashen.vercel.app/donation/${user?.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(NewDonation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    navigate(-1)
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Donation Complete",
                        showConfirmButton: true,
                    });
                }
            })
    }
    return (
        <div className="max-w-[1200px] mx-auto py-20">
            <div className="flex items-center flex-col lg:flex-row p-6 md:p-12 border bg-white shadow-lg rounded-lg">

                {/* Image Section */}
                <div className="lg:w-2/5">
                    <img
                        src={photoUrl}
                        alt={title}
                        className="w-full  h-72 object-cover rounded-lg shadow-lg"
                    />
                    {/* Contact Information */}
                    <div className="mt-8 text-center text-gray-700">
                        <h4 className="text-xl font-semibold">Contact Us for More Information</h4>
                        <p>If you have any questions or need assistance, feel free to reach out:</p>
                        <a
                            href="mailto:habibur88454@gmail.com"
                            className="text-first font-semibold hover:text-second"
                        >
                            habibur88454@gmail.com
                        </a>
                    </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 lg:pl-8 mt-6 lg:mt-0">
                    {/* Title */}
                    <h2 className="text-3xl font-bold text-gray-800">{title}</h2>

                    {/* Description */}
                    <p className="text-gray-700 mt-4 text-lg">{description}</p>

                    {/* Donation Amount */}
                    <div className="flex justify-between items-center mt-6">
                        <p className="text-lg font-semibold text-gray-800">Donation Amount:</p>
                        <p className="text-xl font-semibold text-[rgb(37,168,214)]">{amount} Tk</p>
                    </div>

                    {/* Deadline */}
                    <div className="flex justify-between items-center mt-4">
                        <p className="text-lg font-semibold text-gray-800">Deadline:</p>
                        <p className="text-lg text-gray-600">{deadline}</p>
                    </div>

                    {/* Donate Button */}
                    <button
                        onClick={handleDonateNow}
                        className="bg-[rgb(37,168,214)] mt-6 py-3 px-8 text-white font-bold  shadow-md hover:bg-[rgb(10,132,176)] transition-colors"
                    >
                        Donate Now
                    </button>

                    {/* Additional Information Section */}
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow-inner">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why Your Donation Matters</h3>
                        <p className="text-gray-600">
                            Your donation helps support education for underprivileged children, providing them with the
                            tools and resources they need to succeed in life. Every contribution, big or small, makes a real
                            difference in their lives and brings us closer to achieving our mission of creating a better future
                            for all children.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
