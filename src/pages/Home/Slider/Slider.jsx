import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner1 from '../../../assets/slider/slider-1.jpeg'
import banner2 from '../../../assets/slider/slider-2.jpeg'
import banner3 from '../../../assets/slider/slider-3.jpeg'
import { Link } from 'react-router-dom';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'
import { Fade } from 'react-awesome-reveal';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    return (
        <div className=''>
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={2000}
                className='w-full md:h-[600px] h-[520px]' >
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner3})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <Fade direction='up' duration={2000}>
                                    <h1 className="mb-5 text-5xl md:text-7xl font-bold">Startup Fundraising Platform</h1>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <p className="mb-5 text-xl md:text-2xl font-bold">
                                        Start and manage a professional fundraise to attract quality accredited investors.
                                    </p>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <Link to='allCampaign'>
                                        <button className="uppercase bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all">
                                            Get Started
                                        </button>
                                    </Link>
                                </Fade>
                            </div>
                            <div className='md:w-1/3'>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner2})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <Fade direction='up' duration={2000}>
                                    <h1 className="mb-5 text-5xl md:text-7xl font-bold">Startup Fundraising Platform</h1>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <p className="mb-5 text-xl md:text-2xl font-bold">
                                        Start and manage a professional fundraise to attract quality accredited investors.
                                    </p>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <Link to='allCampaign'>
                                        <button className="uppercase bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all">
                                            Get Started
                                        </button>
                                    </Link>
                                </Fade>
                            </div>
                            <div className='md:w-1/3'>

                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start items-center'>
                            <div className="md:w-2/3">
                                <Fade direction='up' duration={2000}>
                                    <h1 className="mb-5 text-5xl md:text-7xl font-bold">Startup Fundraising Platform</h1>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <p className="mb-5 text-xl md:text-2xl font-bold">
                                        Start and manage a professional fundraise to attract quality accredited investors.
                                    </p>
                                </Fade>
                                <Fade direction='up' duration={2000}>
                                    <Link to='allCampaign'>
                                        <button className="uppercase bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all">
                                            Get Started
                                        </button>
                                    </Link>
                                </Fade>
                            </div>
                            <div className='md:w-1/3'>

                            </div>
                        </div>
                    </div>
                </div>

            </AutoplaySlider>

        </div>
    );
};

export default Slider;