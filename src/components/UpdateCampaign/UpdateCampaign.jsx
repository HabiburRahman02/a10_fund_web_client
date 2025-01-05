import { useLoaderData, useNavigate } from "react-router-dom";
import Heading from "../Heading/Heading";
import { useContext } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateCampaign = () => {
    const { user } = useContext(AuthContent);
    const navigate = useNavigate();
    const campaign = useLoaderData();
    const { _id, title, deadline, description, amount, photoUrl, type } = campaign

    const handleUpdateCampaign = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const type = form.type.value;
        const deadline = form.deadline.value;
        const amount = form.amount.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const updatedCampaign = { title, type, deadline, amount, photoUrl, description }
        fetch(`https://funding-server-ashen.vercel.app/campaign/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCampaign)
        })
            .then(res => res.json())
            .then(data => {
                navigate(-1)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Campaign updated successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            })
    }


    return (
        <div className="">
            <div className="py-20">
                <div className="max-w-[1300px] mx-auto  p-12 bg-white  dark:text-black  min-h-screen">
                    <div className="max-w-2xl mx-auto text-center mb-6">
                        <Heading title='Update Campaign'></Heading>

                    </div>
                    <form onSubmit={handleUpdateCampaign}>
                        <div className="md:flex gap-9">
                            <div className="md:w-1/2 form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Campaign Title</span>
                                </label>
                                <input type="text" defaultValue={title} name="title" placeholder="Enter campaign title" className="border-2 p-4" required />
                            </div>
                            {/*  */}
                            <div className="md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Campaign Type</span>
                                </label>
                                <select
                                    defaultValue={type}
                                    name="type"
                                    className="border-2 rounded w-full p-[18px]"
                                    required
                                >
                                    <option value="personal issue">Personal Issue</option>
                                    <option value="startup">Startup</option>
                                    <option value="business">Business</option>
                                    <option value="creative ideas">Creative Ideas</option>
                                </select>
                            </div>

                        </div>
                        <div className="md:flex gap-9">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Deadline</span>
                                </label>
                                <input type="date" defaultValue={deadline} name="deadline" placeholder="Enter deadline" className="border-2 p-4" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Donation Amount</span>
                                </label>
                                <input type="number" defaultValue={amount} name="amount" placeholder="Enter donation amount" className="border-2 p-4" required />
                            </div>
                        </div>
                        <div className="md:flex gap-9">
                            <div className="form-control w-full" title="Read only">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">User Name</span>
                                </label>
                                <input type="text"
                                    defaultValue={user?.displayName}
                                    readOnly
                                    disabled
                                    className="border-2 p-4 cursor-not-allowed" required />
                            </div>
                            <div className="form-control w-full" title="Read only">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">User Email</span>
                                </label>
                                <input type="text"
                                    defaultValue={user?.email}
                                    readOnly
                                    disabled
                                    className="border-2 p-4 cursor-not-allowed" required />
                            </div>
                        </div>

                        <div className="gap-9">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Photo Url</span>
                                </label>
                                <input type="text" defaultValue={photoUrl} name="photoUrl" placeholder="photo url" className="border-2 p-4" required />
                            </div>
                        </div>
                        <div className="md:flex mb-8 gap-9">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Description</span>
                                </label>
                                <textarea rows={4} defaultValue={description} type="text" name="description" placeholder="Enter description" className="border-2 p-4" required />
                            </div>

                        </div>
                        <div className="gap-9 mb-8">
                            <button

                                className="w-full py-5 rounded-md font-semibold bg-[#000000] text-white">Update Campaign</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCampaign;