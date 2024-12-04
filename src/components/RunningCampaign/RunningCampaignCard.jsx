
import { useState } from "react";
import { Link } from "react-router-dom";

const RunningCampaignCard = (campaign) => {
    const { title, deadline, description, amount, photoUrl } = campaign.campaign
    const [hover, setHover] = useState(false);
    console.log(hover);
    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className=" bg-white mx-8 md:mx-0 border-[1px] hover:border-blue-600 flex flex-col justify-between flex-grow">
            <figure>
                <img
                    className="h-44 object-cover w-full"
                    src={photoUrl}
                    alt="Shoes" />
                <div className="bg-green-400 py-0 text-center mx-auto">
                    <span className="w-full uppercase text-sm text-white font-bold">funded</span>
                </div>
            </figure>
            <div className="space-y-2 flex flex-col justify-between flex-grow">
                <div className="space-y-2 p-4 ">
                    <h2 className="card-title text-base">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <p className="flex gap-1">
                        {/* <MdLocationPin></MdLocationPin> */}
                        <span className="text-sm text-gray-600">Donation Amount: {amount} Tk</span>
                    </p>
                    <span className="text-sm text-gray-600">Date: {deadline}</span>
                </div>
                <div className="pt-2">
                    <button
                        className={`py-5 w-full transition-all ${hover ? 'bg-[rgb(37,168,214)] text-white' : 'bg-gray-100'}`}>See More</button>
                </div>
            </div>
        </div>
    );
};

export default RunningCampaignCard;