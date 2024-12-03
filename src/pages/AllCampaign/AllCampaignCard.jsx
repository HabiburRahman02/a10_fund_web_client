import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

const AllCampaignCard = (campaign) => {
    const { name, des, location, img } = campaign.campaign
    console.log(campaign.campaign);
    return (
        <div className=" bg-white mx-8 md:mx-0 border-[1px] hover:border-blue-600">
            <figure>
                <img
                    className="h-44 object-cover w-full"
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="p-4 space-y-2">
                <h2 className="card-title text-base">{name}</h2>
                <p>{des}</p>
                <p className="flex gap-1 pb-8">
                    <MdLocationPin></MdLocationPin>
                    <p className="text-sm">{location}</p>
                </p>
                <div className="">
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