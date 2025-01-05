import selfImg from '../../assets/startup/self-managed-icon.svg'
import guidedImg from '../../assets/startup/guided-fundraise-icon.svg'
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const StartUp = () => {
    return (
        <div className="bg-[#34495e]">
            <div className='max-w-[1300px] mx-auto py-20 px-8 md:px-0'>

                <div className='pb-10 text-white space-y-2 text-center mx-auto'>
                    <h1 className='text-[42px] font-bold '>Launch a Fundraise for Your Startup Online</h1>
                    <p className='text-2xl text-gray-300'>We have helped startups raise over 7k in funding commitments. Let us help you.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Fade direction='left' duration={2000}>
                        <div className="card h-full bg-white w-full shadow-xl p-10">
                            <figure>
                                <img
                                    src={selfImg}
                                    alt="Shoes" />
                            </figure>
                            <h2 className="card-title text-2xl uppercase text-[rgb(29,146,189)] text-center mx-auto mt-2">Self-Managed</h2>
                            <div className="card-body text-center mx-auto">
                                <p className='text-2xl text-gray-500'>Id like to use Fundable to host my fundraise to collect investor commitments from my network.</p>
                                <div className="card-actions justify-center">
                                    <Link to='/'>
                                        <button className="uppercase mt-2 bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-[rgb(37,168,214)] hover:text-[rgb(37,168,214)] hover:bg-transparent transition-all">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction='right' duration={2000}>
                        <div className="card h-full bg-white w-full shadow-xl p-10">
                            <figure>
                                <img
                                    src={guidedImg}
                                    alt="Shoes" />
                            </figure>
                            <h2 className="card-title text-2xl uppercase text-[rgb(29,146,189)] text-center mx-auto mt-2">Guided Fundraise</h2>
                            <div className="card-body text-center mx-auto">
                                <p className='text-2xl text-gray-500'>Id like the Fundable team to create my pitch deck, research prospective investors that may be interested, and support me throughout the process.</p>
                                <div className="card-actions justify-center">
                                    <Link to='/'>
                                        <button className="uppercase mt-2 bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-[rgb(37,168,214)] hover:text-[rgb(37,168,214)] hover:bg-transparent transition-all">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default StartUp;