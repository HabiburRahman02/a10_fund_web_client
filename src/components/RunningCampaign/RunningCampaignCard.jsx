
import { useState } from "react";
import { Link } from "react-router-dom";


const RunningCampaignCard = (campaign) => {
    const { _id, title, deadline, description, amount, photoUrl } = campaign.campaign
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="dark:bg-gray-900 dark:text-white bg-white mx-8 md:mx-0 border-[1px] hover:border-[rgb(37,168,214)] flex flex-col justify-between flex-grow">
            <figure>
                <img
                    className="h-44 object-cover w-full"
                    src={photoUrl}
                    alt="Campaign" />
                <div className="bg-green-500 py-0 text-center mx-auto">
                    <span className="w-full uppercase text-xs text-white font-bold">funded</span>
                </div>
            </figure>
            <div className="space-y-2 flex flex-col justify-between flex-grow">
                <div className="space-y-2 p-4 ">
                    <h2 className="card-title text-base">{title}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{description}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Donation Amount: {amount} Tk</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deadline: {deadline}</p>
                </div>
                <div className="pt-2">
                    <Link to={`/viewDetails/${_id}`}>
                        <button
                            className={`py-5 w-full transition-all  ${hover ? 'bg-[rgb(37,168,214)] text-white' : 'dark:bg-gray-100 bg-gray-100 dark:text-black'}`}>See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RunningCampaignCard;