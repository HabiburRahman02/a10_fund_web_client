
const MyDonationCard = ({ donation }) => {
    const { title, deadline, description, amount, photoUrl } = donation
    console.log(donation);
    return (
        <div
            className=" bg-white mx-8 md:mx-0 border-[1px] hover:border-[rgb(37,168,214)] flex flex-col justify-between flex-grow">
            <figure>
                <img
                    className="h-44 object-cover w-full"
                    src={photoUrl}
                    alt="Campaign" />
                <div className="bg-[rgb(37,168,214)] py-1 text-center mx-auto">
                    <span className="w-full capitalize text-base text-white font-bold">Donate Already</span>
                </div>
            </figure>
            <div className="space-y-2 flex flex-col justify-between flex-grow">
                <div className="space-y-2 p-4 ">
                    <h2 className="card-title text-base dark:text-black">{title}</h2>
                    <p className="text-gray-600">{description}</p>
                    <p className="text-sm text-gray-600">Donation Amount: {amount} Tk</p>
                    <p className="text-sm text-gray-600">Date: {deadline}</p>
                </div>

            </div>
        </div>
    );
};

export default MyDonationCard;