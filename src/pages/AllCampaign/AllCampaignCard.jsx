import { MdLocationPin } from "react-icons/md";

const AllCampaignCard = (campaign) => {
    const { name, des, location, img } = campaign.campaign
    console.log(campaign.campaign);
    return (
        <div className=" bg-white mx-8 md:mx-0">
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
                <div className="card-actions justify-end">
                    <button className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default AllCampaignCard;