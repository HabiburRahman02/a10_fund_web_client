import OurCompanies from "../../../components/OurCompanies/OurCompanies";
import RunningCampaign from "../../../components/RunningCampaign/RunningCampaign";
import StartUp from "../../../components/StartUp/StartUp";
import Blogs from "../../Blogs/Blogs";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <RunningCampaign></RunningCampaign>
            <StartUp></StartUp>
            <Blogs></Blogs>
            <OurCompanies></OurCompanies>
        </div>
    );
};

export default Home;