
import { Link } from "react-router-dom";

const AllCampaignCard = (campaign) => {
    const { _id, title, deadline, description, amount, photoUrl } = campaign.campaign
    // console.log(campaign.campaign);
    return (
        <div className=" bg-white mx-8 md:mx-0 border-[1px] hover:border-[rgb(37,168,214)] flex flex-col flex-grow justify-between">
            <figure>
                <img
                    className="h-44 object-cover w-full"
                    src={photoUrl}
                    alt="Campaign" />
            </figure>
            <div className="p-4 space-y-2 flex flex-col flex-grow justify-between">
                <h2 className="card-title text-base">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="text-sm text-gray-600">Donation Amount: {amount} Tk</p>
                <p className="text-sm text-gray-600">Date: {deadline}</p>
                <div className="pt-2">
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="py-2 px-8 w-full text-white hover:text-black font-bold  
                         border-[2px]
                         bg-[rgb(37,168,214)]
                                    border-transparent hover:border-[1px] hover:border-blue-600 hover:bg-transparent transition-all">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllCampaignCard;