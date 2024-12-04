import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const AllCampaignCard = (campaign) => {
    const { title, deadline, description, amount, photoUrl } = campaign.campaign
    // console.log(campaign.campaign);
    return (
        <div className=" bg-white mx-8 md:mx-0 border-[1px] hover:border-blue-600">
            <figure>
                <img
                    className="h-44 object-cover w-full"
                    src={photoUrl}
                    alt="Shoes" />
            </figure>
            <div className="p-4 space-y-2">
                <h2 className="card-title text-base">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <p className="flex gap-1">
                    {/* <MdLocationPin></MdLocationPin> */}
                    <span className="text-sm text-gray-600">Donation Amount: {amount} Tk</span>
                </p>
                <span className="text-sm text-gray-600">Date: {deadline}</span>
                <div className="pt-8">
                    <Link to='/'>
                        <button className="py-2 px-8 w-full text-white hover:text-black font-bold  
                         border-[2px]
                         bg-[rgb(37,168,214)]
                                    border-transparent hover:border-[1px] hover:border-blue-600 hover:bg-transparent transition-all">
                            See More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllCampaignCard;