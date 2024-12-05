import { useContext, useEffect, useState } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import Heading from "../../components/Heading/Heading";
import MyCampaignCard from "./MyCampaignCard";

const MyCampaign = () => {
    const { user } = useContext(AuthContent);
    const [campaigns, setCampaigns] = useState([]);
    console.log(campaigns);

    useEffect(() => {
        fetch(`http://localhost:5000/campaign/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                setCampaigns(data)
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
            });
    }, [])

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
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    campaigns.map((campaign, i) =>
                                        <MyCampaignCard
                                            key={campaign._id}
                                            campaign={campaign}
                                            i={i}
                                            campaigns={campaigns}
                                            setCampaigns={setCampaigns}
                                        ></MyCampaignCard>
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

export default MyCampaign;