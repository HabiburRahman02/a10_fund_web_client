import { useContext, useEffect, useState } from "react";
import { AuthContent } from "../../Provider/AuthProvider";
import Heading from "../../components/Heading/Heading";
import MyDonationCard from "./MydonationCard";
import { Fade } from "react-awesome-reveal";

const MyDonation = () => {
    const { user } = useContext(AuthContent);
    const [donations, setDonations] = useState([]);
    console.log(donations);

    useEffect(() => {
        fetch(`https://funding-server-ashen.vercel.app/donation/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                setDonations(data)
            })
            .catch((error) => {
                console.error("Error fetching campaigns:", error);
            });
    }, [])
    return (
        <Fade duration={2000} direction="down">
            {
                donations.length ? <div className="">
                    <div className="py-10 max-w-[1200px] mx-auto ">
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
                </div> : <h3 className="dark:bg-gray-900 dark:text-white text-3xl md:text-[35px] font-semibold mb-6 text-center text-[#000] mt-12">Donation is an empty</h3>
            }
        </Fade>
    );
};

export default MyDonation;