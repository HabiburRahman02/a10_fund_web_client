import { useContext, useEffect, useState } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import Heading from "../../components/Heading/Heading";
import MyDonationCard from "./MydonationCard";

const MyDonation = () => {
    const { user } = useContext(AuthContent);
    const [donations, setDonations] = useState();
    console.log(donations);

    useEffect(() => {
        fetch(`http://localhost:5000/donation/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                setDonations(data)
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
            });
    }, [])
    return (
        <div className="">
            <div className="py-20 max-w-[1200px] mx-auto ">
                <Heading title="My Donation"></Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        donations?.map(donation => <MyDonationCard
                            key={donation._id}
                            donation={donation}
                        ></MyDonationCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyDonation;