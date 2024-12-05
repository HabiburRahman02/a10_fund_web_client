import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyCampaignCard = ({ campaign, i, campaigns, setCampaigns }) => {
    const { _id, title, deadline, amount, photoUrl, type } = campaign
    const handleDeleteCampaign = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!!!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#25A8D6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/campaign/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Yeah item deleted successfully",
                                icon: "success",
                                confirmButtonColor: "#25A8D6",
                            });
                            const remaining = campaigns.filter(campaign => campaign._id !== id);
                            setCampaigns(remaining)

                        }
                    })
            }
        });
    }
    return (
        <tr className=" hover transition-all" key={campaign._id}>
            <td>{i + 1}</td>
            <td>
                <div className="flex items-center gap-3 py-4">
                    <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20">
                            <img
                                src={photoUrl}
                                alt="Img" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>{deadline}</td>
            <td>{amount} Tk</td>
            <td>{type}</td>
            <td >
                <div className="flex gap-3 items-center justify-center">
                    <button className='p-2 bg-[rgb(37,168,214)] border-2 border-white hover:border-[rgb(37,168,214)] hover:bg-white transition-all hover:text-[rgb(37,168,214)] text-white'>
                        <FaEdit className="text-xl"></FaEdit>
                    </button>
                    <button className='p-2 bg-[rgb(37,168,214)] border-2 border-white hover:border-[rgb(37,168,214)] hover:bg-white transition-all hover:text-[rgb(37,168,214)] text-white'>
                        <FaDeleteLeft
                            onClick={() => handleDeleteCampaign(_id)}
                            className="text-xl"></FaDeleteLeft>
                    </button>
                </div>

            </td>
        </tr>
    );
};

export default MyCampaignCard;