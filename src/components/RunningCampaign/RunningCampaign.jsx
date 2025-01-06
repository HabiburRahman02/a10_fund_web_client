import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";
import RunningCampaignCard from "./RunningCampaignCard";
// import { Fade } from "react-awesome-reveal";

const RunningCampaign = () => {
    const [campaigns, setCampaigns] = useState([]);
    // console.log(campaigns);

    useEffect(() => {
        fetch('https://funding-server-ashen.vercel.app/campaignByRunning/running')
            .then(res => res.json())
            .then(data => setCampaigns(data))
    }, [])

    return (
        // <Fade direction="down" duration={2000}>
        <div className="">
            <div className="py-20 max-w-[1200px] mx-auto ">
                <Heading title="Running Campaigns"></Heading>
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
        // </Fade>
    );

};

export default RunningCampaign;