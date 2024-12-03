import { useLoaderData } from "react-router-dom";
import AllCampaignCard from "./AllCampaignCard";
import Heading from "../../components/Heading/Heading";

const AllCampaign = () => {
    const campaigns = useLoaderData();
    // console.log(campaigns);
    return (
        <div className="py-40 max-w-[1200px] mx-auto">
            <Heading title="All Running Campaigns"></Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    campaigns.map(campaign => <AllCampaignCard
                        key={campaign.id}
                        campaign={campaign}
                    ></AllCampaignCard>)
                }
            </div>
        </div>
    );
};

export default AllCampaign;