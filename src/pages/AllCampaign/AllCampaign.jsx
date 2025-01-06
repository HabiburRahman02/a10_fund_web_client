import { Slide } from "react-awesome-reveal";
import Heading from "../../components/Heading/Heading";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import RunningCampaignCard from "../../components/RunningCampaign/RunningCampaignCard";


const AllCampaign = () => {
    const LoadedCampaigns = useLoaderData();
    const [campaigns, setCampaigns] = useState(LoadedCampaigns);
    const [isLoading, setIsLoading] = useState(false);
    console.log(campaigns);

    const handleSort = () => {
        setIsLoading(true)
        fetch('https://funding-server-ashen.vercel.app/campaignBySort')
            .then(res => res.json())
            .then(data => {
                setCampaigns(data)
                setIsLoading(false);
            })
    }

    useEffect(() => {
        setCampaigns(LoadedCampaigns);
    }, [LoadedCampaigns])


    return (
        <Slide duration={2000}>
            <div className="">
                <div className="py-10 max-w-[1200px] mx-auto ">
                    <div className="md:flex items-center justify-between">
                        <Heading title="All Campaigns"></Heading>
                        <button onClick={handleSort} className="bg-[rgb(37,168,214)] p-4 mb-6 text-white font-bold hover:bg-[rgb(10,132,176)] border-4 transition-colors">
                            {isLoading ? 'Sorted....' : 'Sort By Amount'}
                        </button>
                    </div>
                    <div className="">
                        <div className="py-10 max-w-[1200px] mx-auto ">
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {
                                    campaigns?.map(campaign => <RunningCampaignCard
                                        key={campaign._id}
                                        campaign={campaign}
                                    ></RunningCampaignCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default AllCampaign;