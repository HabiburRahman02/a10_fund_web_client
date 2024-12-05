import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import { useParams } from "react-router-dom";

const Modal = () => {
    const [campaign, setCampaign] = useState([]);
    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`http://localhost:5000/campaignById/6751615cb24d1bc39ee35e54`)
            .then(res => res.json())
        // .then(data => setCampaigns(data))
    }, [])

    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box max-w-[1200px] mx-auto">
                    <div className="">
                        <div className="max-w-2xl mx-auto text-center mb-6">
                            <Heading title='Update Campaign'></Heading>
                            <p>The Add New Campaign page lets users create campaigns by submitting details like title, type, description, minimum donation, and deadline, with their name and email pre-filled for authenticity.</p>
                        </div>
                        <form >
                            <div className="md:flex gap-9">
                                <div className="md:w-1/2 form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-500">Campaign Title</span>
                                    </label>
                                    <input type="text"
                                        // defaultValue={title}
                                        name="title" placeholder="Enter campaign title" className="border-2 p-4" required />
                                </div>
                                {/*  */}
                                <div className="md:w-1/2">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-500">Campaign Type</span>
                                    </label>
                                    <select
                                        // defaultValue={type}
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
                                    <input type="date"
                                        // defaultValue={deadline}
                                        name="deadline" placeholder="Enter deadline" className="border-2 p-4" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-500">Donation Amount</span>
                                    </label>
                                    <input type="number"
                                        // defaultValue={amount} 
                                        name="amount" placeholder="Enter donation amount" className="border-2 p-4" required />
                                </div>
                            </div>
                            <div className="md:flex gap-9">
                                <div className="form-control w-full" title="Read only">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-500">User Name</span>
                                    </label>
                                    <input type="text"
                                        //defaultValue={user?.displayName}
                                        readOnly
                                        disabled
                                        className="border-2 p-4 cursor-not-allowed" required />
                                </div>
                                <div className="form-control w-full" title="Read only">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-500">User Email</span>
                                    </label>
                                    <input type="text"
                                        //defaultValue={user?.email}
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
                                    <input type="text"
                                        //  defaultValue={photoUrl}
                                        name="photoUrl" placeholder="photo url" className="border-2 p-4" required />
                                </div>
                            </div>
                            <div className="md:flex mb-8 gap-9">
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-lg text-gray-500">Description</span>
                                    </label>
                                    <textarea rows={4}
                                        // defaultValue={description} 
                                        type="text" name="description" placeholder="Enter description" className="border-2 p-4" required />
                                </div>

                            </div>
                            <div className="gap-9 mb-8">
                                <button className="w-full py-5 rounded-md font-semibold bg-[#000000] text-white">Add New Campaign</button>
                            </div>
                        </form>
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;