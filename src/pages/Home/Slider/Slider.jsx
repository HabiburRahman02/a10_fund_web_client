import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import banner1 from '../../../assets/slider/slider-1.jpeg'
import banner2 from '../../../assets/slider/slider-2.jpeg'
import banner3 from '../../../assets/slider/slider-3.jpeg'
import { Link } from 'react-router-dom';

import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className='mb-20'>
            <AutoplaySlider
                // play={true}
                cancelOnInteraction={false}
                interval={2000}
                className='w-full md:h-screen h-[520px]' >
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content">
                        <div className='flex justify-start'>
                            <div className="md:w-1/2">
                                <h1 className="mb-5 text-7xl font-bold">Startup Fundraising Platform</h1>
                                <p className="mb-5 text-2xl font-bold">
                                    Start and manage a professional fundraise to attract quality accredited investors.
                                </p>
                                <Link to='/'>
                                    <button className="uppercase bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                                        Get Started
                                    </button>
                                </Link>
                            </div>
                            <div className='md:w-1/2'>

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
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">We collect clothes</h1>
                            <p className="mb-5">
                                Our mission is to bring warmth and dignity to those who need it most. By collecting and distributing gently used clothing, we aim to make a difference in the lives of individuals who are facing financial difficulties. We strive to build a community that cares, offering compassion and practical help to those in need.
                            </p>
                            <Link to='/'>
                                <button className="bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: `url(${banner3})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">We collect clothes</h1>
                            <p className="mb-5">
                                Our mission is to bring warmth and dignity to those who need it most. By collecting and distributing gently used clothing, we aim to make a difference in the lives of individuals who are facing financial difficulties. We strive to build a community that cares, offering compassion and practical help to those in need.
                            </p>
                            <Link to='/'>
                                <button className="bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold hover:bg-[rgb(10,132,176)] transition-colors">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </AutoplaySlider>

        </div>
    );
};

export default Banner;