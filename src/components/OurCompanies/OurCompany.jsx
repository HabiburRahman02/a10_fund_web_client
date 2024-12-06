
const OurCompany = ({ userName, img, des }) => {
    return (
        <div className="max-w-[400px]">
            <img className="rounded-full h-56 w-56 object-cover" src={img} alt="" />
            <h3 className="text-2xl font-semibold mt-2">{userName}</h3>
            <p className="mt-4 text-gray-600 text-lg">{des}</p>
        </div>
    );
};

export default OurCompany;