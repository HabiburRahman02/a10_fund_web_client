

const BlogCard = ({ blog }) => {
    const { title, description, image, author, date } = blog
    return (
        <div className=" bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image */}
            <img
                className="w-full h-48 object-cover"
                src={image}
                alt={title}
            />
            {/* Content */}
            <div className="p-4 py-8">
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                {/* Author and Date */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{author}</span>
                    <span>{date}</span>
                </div>

            </div>
        </div>
    );
};

export default BlogCard;
