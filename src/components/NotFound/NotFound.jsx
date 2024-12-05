import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="bg-black">
            <Link to='/'>
                <div className="text-center pt-10">
                    <button className="uppercase bg-[rgb(37,168,214)] py-3 px-8  text-white font-bold 
                                    border-[2px]
                                    border-transparent hover:border-[2px] hover:border-white hover:bg-transparent transition-all">
                        Back Home
                    </button>
                </div>
            </Link>
            <img className="min-h-screen w-full" src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="" />
        </div>
    );
};

export default NotFound;