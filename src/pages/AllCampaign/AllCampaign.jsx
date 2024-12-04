// import { useLoaderData } from "react-router-dom";
import AllCampaignCard from "./AllCampaignCard";
import Heading from "../../components/Heading/Heading";
import { useEffect, useState } from "react";

const AllCampaign = () => {
    const [campaigns, setCampaigns] = useState([]);
    // const campaigns = useLoaderData();
    // console.log(campaigns);
    useEffect(() => {
        fetch('/allCampaign.json')
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [])
    return (
        <div className="">
            <div className="py-20 max-w-[1200px] mx-auto ">
                <Heading title="All Running Campaigns"></Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        campaigns?.map(campaign => <AllCampaignCard
                            key={campaign.id}
                            campaign={campaign}
                        ></AllCampaignCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCampaign;