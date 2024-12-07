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
            <div className="p-4 md:p-8 border bg-white lg:w-1/2 mx-auto">
                <img src={photoUrl} alt={title} className="w-full h-64 object-cover" />
                <h2 className="text-2xl font-bold mt-4">{title}</h2>
                <p className="text-gray-600 mt-2">{description}</p>
                <p className="text-md font-semibold text-gray-700 mt-2">Deadline: {deadline}</p>
                <p className="text-md font-semibold text-gray-500 mt-2">Donation Amount: {amount} Tk</p>
                <button onClick={handleDonateNow} className="bg-[rgb(37,168,214)] mt-4 py-3 px-8  text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                    Donate Now
                </button>
            </div>
        </div>
    );
};

export default ViewDetails;
