import { useContext } from "react";
import Heading from "../../components/Heading/Heading";
import { AuthContent } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddNewCampaign = () => {
    const { user } = useContext(AuthContent);

    const handleAddNewCampaign = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const type = form.type.value;
        const deadline = form.deadline.value;
        const amount = form.amount.value;
        const photoUrl = form.photoUrl.value;
        const description = form.description.value;
        const campaign = { title, type, deadline, amount, photoUrl, description, email: user?.email, name: user?.displayName }

        fetch('http://localhost:5000/campaign', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(campaign)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "New campaign added successfully",
                        showConfirmButton: true,
                    });
                }
            })

    }

    return (
        <div className="">
            <div className="pb-10 pt-20">
                <div className="max-w-[1200px] mx-auto  p-12 bg-white  dark:text-black  min-h-screen">
                    <div className="max-w-2xl mx-auto text-center mb-6">
                        <Heading title='Add New Campaign'></Heading>
                        <p>The Add New Campaign page lets users create campaigns by submitting details like title, type, description, minimum donation, and deadline, with their name and email pre-filled for authenticity.</p>
                    </div>
                    <form onSubmit={handleAddNewCampaign}>
                        <div className="md:flex gap-9">
                            <div className="md:w-1/2 form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Campaign Title</span>
                                </label>
                                <input type="text" name="title" placeholder="Enter campaign title" className="border-2 p-4" required />
                            </div>
                            {/*  */}
                            <div className="md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Campaign Type</span>
                                </label>
                                <select
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

                            {/*  */}
                            {/* <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Campaign Type</span>
                                </label>
                                <input type="text" name="countryName" placeholder="country name" className="border-2 p-4" required />
                            </div> */}
                        </div>
                        <div className="md:flex gap-9">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Deadline</span>
                                </label>
                                <input type="date" name="deadline" placeholder="Enter deadline" className="border-2 p-4" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Donation Amount</span>
                                </label>
                                <input type="number" name="amount" placeholder="Enter donation amount" className="border-2 p-4" required />
                            </div>
                        </div>
                        <div className="md:flex gap-9">
                            <div className="form-control w-full" title="Read only">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">User Name</span>
                                </label>
                                <input type="text"
                                    readOnly
                                    disabled
                                    defaultValue={user?.displayName}
                                    className="border-2 p-4 cursor-not-allowed" required />
                            </div>
                            <div className="form-control w-full" title="Read only">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">User Email</span>
                                </label>
                                <input type="text"
                                    readOnly
                                    disabled
                                    defaultValue={user?.email}
                                    className="border-2 p-4 cursor-not-allowed" required />
                            </div>
                        </div>

                        <div className="gap-9">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Photo Url</span>
                                </label>
                                <input type="text" name="photoUrl" placeholder="photo url" className="border-2 p-4" required />
                            </div>
                        </div>
                        <div className="md:flex mb-8 gap-9">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-lg text-gray-500">Description</span>
                                </label>
                                <textarea rows={4} type="text" name="description" placeholder="Enter description" className="border-2 p-4" required />
                            </div>

                        </div>
                        <div className="gap-9 mb-8">
                            <button className="w-full py-5 rounded-md font-semibold bg-[#000000] text-white">Add New Campaign</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AddNewCampaign;