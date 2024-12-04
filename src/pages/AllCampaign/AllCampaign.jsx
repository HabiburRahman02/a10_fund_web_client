// import { useLoaderData } from "react-router-dom";
import AllCampaignCard from "./AllCampaignCard";
import Heading from "../../components/Heading/Heading";
import { useLoaderData } from "react-router-dom";


const AllCampaign = () => {
    const campaigns = useLoaderData();
    return (
        <div className="">
            <div className="py-20 max-w-[1200px] mx-auto ">
                <Heading title="All Campaigns"></Heading>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table bg-white rounded-none">
                            {/* head */}
                            <thead>
                                <tr >
                                    <th className="py-4">No</th>
                                    <th>Funding Title</th>
                                    <th>Date</th>
                                    <th>Donation Amount</th>
                                    <th>Donation Type</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    campaigns.map((campaign, i) =>
                                        <tr className=" hover transition-all" key={campaign._id}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <div className="flex items-center gap-3 py-4">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-20 w-20">
                                                            <img
                                                                src={campaign.photoUrl}
                                                                alt="Img" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{campaign.title}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{campaign.deadline}</td>
                                            <td>{campaign.amount}</td>
                                            <td>{campaign.type}</td>

                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCampaign;