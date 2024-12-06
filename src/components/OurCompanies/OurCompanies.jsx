
import OurCompany from './OurCompany';

import person1 from '../../assets/person/person1.jpeg'
import person2 from '../../assets/person/person2.jpeg'
import person3 from '../../assets/person/person3.jpeg'
import person4 from '../../assets/person/person4.jpeg'
import person5 from '../../assets/person/person5.jpeg'
import Marquee from 'react-fast-marquee';

const OurCompanies = () => {
    return (
        <div>
            <div className="bg-[#f2f2f1]">
                <div className='py-20'>
                    <div className='pb-10 space-y-2 text-center mx-auto'>
                        <h1 className='text-[42px] font-bold '>Fundable Helps Great Companies Raise Funding</h1>
                        <p className='text-2xl'>We have helped startups raise over 7k in funding commitments. Let us help you.</p>
                    </div>
                    <Marquee pauseOnClick={true}>
                        <div className=" flex gap-6 py-10 pl-6">
                            <OurCompany
                                userName="Alia Bhatt"
                                img={person1}
                                des='Alia chose to do a rewards fundraise offering free beer for life. He raised 50K and opened a craft brewery in Grapevine, Texas.'
                            ></OurCompany>
                            <OurCompany
                                userName="Alesa Perry"
                                img={person2}
                                des='Perry raised 55,000 and had her flagship product endorsed by the 42nd and 44th Presidents of the United States of America.'
                            ></OurCompany>
                            <OurCompany
                                userName="Alex Hales"
                                img={person3}
                                des='Hales chose to do a rewards fundraise offering free beer for life. He raised 673 and opened a craft brewery in Grapevine, Texas.'
                            ></OurCompany>
                            <OurCompany
                                userName="Jonathon Trot"
                                img={person4}
                                des='John raised 78k to grow Decision Desk, application management software now used by 100+ higher education institutions.'
                            ></OurCompany>
                            <OurCompany
                                userName="Subnam Mostary"
                                img={person5}
                                des='Mostary chose to do a rewards fundraise offering free beer for life. He raised 673 and opened a craft brewery in Grapevine, Texas.'
                            ></OurCompany>
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default OurCompanies;