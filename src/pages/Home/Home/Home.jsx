import RunningCampaign from "../../../components/RunningCampaign/RunningCampaign";
import StartUp from "../../../components/StartUp/StartUp";
import Banner from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RunningCampaign></RunningCampaign>
            <StartUp></StartUp>
        </div>
    );
};

export default Home;