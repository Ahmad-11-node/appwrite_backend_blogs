import React from "react";

const BlogDisplay = ({ blogs }) => {

  

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-purple-600 mb-6">Blogs</h1>
      <div className="flex flex-col gap-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-purple-700">{blog.title}</h2>
            <p className="text-sm text-gray-500">by {blog.author}</p>
            <p className="text-gray-700 mt-2">{blog.metaDesc}</p>
            <button
              onClick={() => alert(`Redirecting to: ${blog.slug}`)} // Replace with navigation logic
              className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDisplay;
