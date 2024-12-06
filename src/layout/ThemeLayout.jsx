
const ThemeLayout = ({ children }) => {
    return (
        <div className="text-black dark:text-white bg-white darK:bg-black  min-h-screen">
            {children}
        </div>
    );
};

export default ThemeLayout;
