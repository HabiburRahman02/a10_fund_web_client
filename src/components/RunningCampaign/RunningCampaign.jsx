import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import RunningCampaignCard from "./RunningCampaignCard";

const RunningCampaign = () => {

    const [campaigns, setCampaigns] = useState([]);
    // const campaigns = useLoaderData();
    // console.log(campaigns);
    useEffect(() => {
        fetch('http://localhost:5000/campaign/running')
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [])

    return (
        <div className="">
            <div className="py-20 max-w-[1200px] mx-auto ">
                <Heading title="Running Campaigns"></Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        campaigns?.map(campaign => <RunningCampaignCard
                            key={campaign.id}
                            campaign={campaign}
                        ></RunningCampaignCard>)
                    }
                </div>
            </div>
        </div>
    );

};

export default RunningCampaign;