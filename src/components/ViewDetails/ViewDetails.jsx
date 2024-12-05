import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContent } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {
    const { user } = useContext(AuthContent);
    const navigate = useNavigate();
    const campaign = useLoaderData();
    const params = useParams();
    console.log(params);
    console.log('campaign', campaign);

    const { title, description, amount, photoUrl } = campaign
    const newUser = { name: user?.displayName, email: user?.email }

    const handleDonateNow = () => {
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    navigate('/allCampaign')
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
        <div className="max-w-[1200px] mx-auto pt-20">
            <div className="p-4 md:p-8 border bg-white lg:w-1/2 mx-auto">
                <img src={photoUrl} alt={title} className="w-full h-64 object-cover" />
                <h2 className="text-2xl font-bold mt-4">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <p className="text-md font-semibold text-gray-500 mt-2">Donation Amount: {amount} Tk</p>
                <button onClick={handleDonateNow} className="bg-[rgb(37,168,214)] mt-4 py-3 px-8  text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                    Donate Now
                </button>
            </div>
        </div>
    );
};

export default ViewDetails;
