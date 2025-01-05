import { useContext, useEffect, useState } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import Heading from "../../components/Heading/Heading";
import MyCampaignCard from "./MyCampaignCard";
import { Fade } from 'react-awesome-reveal'; // Fade কম্পোনেন্ট আমদানি করুন

const MyCampaign = () => {
    const { user } = useContext(AuthContent);
    const [campaigns, setCampaigns] = useState([]);
    console.log(campaigns);

    useEffect(() => {
        fetch(`https://funding-server-ashen.vercel.app/campaign/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                setCampaigns(data)
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
            });
    }, [user?.email])

    return (
        <Fade duration={2000} direction="right">
            <div>
                <div className="py-10 max-w-[1300px] mx-auto">
                    <Heading title="My Campaigns"></Heading>
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table bg-white dark:bg-gray-900 dark:text-white rounded-none">
                                {/* head */}
                                <thead>
                                    <tr>
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
                                        campaigns?.map((campaign, i) => (
                                            <MyCampaignCard
                                                key={campaign._id}
                                                campaign={campaign}
                                                i={i}
                                                campaigns={campaigns}
                                                setCampaigns={setCampaigns}
                                            ></MyCampaignCard>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default MyCampaign;
