import { Typewriter } from "react-simple-typewriter";

const Heading = ({ title }) => {
    return (
        <h3 className="dark:bg-gray-900 dark:text-white text-3xl md:text-[42px] font-bold mb-6 text-center text-[#000] min-h-12">
            <Typewriter

                words={[title]}
                loop
                cursor
                cursorStyle='|'
                cursorColor="green"
            >
            </Typewriter>
        </h3>
    );
};

export default Heading;