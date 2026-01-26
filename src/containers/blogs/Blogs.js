import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";

export default function Blogs() {
  // ✅ Agar blogSection ya blogs nahi hai, component render hi nahi karega
  if (!blogSection || !blogSection.blogs || blogSection.blogs.length === 0) {
    return null;
  }

  return (
    <div className="main" id="blogs">
      <div className="blog-header">
        {blogSection.title && (
          <h1 className="blog-header-text">{blogSection.title}</h1>
        )}
        {blogSection.subtitle && (
          <p className="subTitle blog-subtitle">{blogSection.subtitle}</p>
        )}
      </div>

      {/* ✅ Conditional render for blogs array */}
      {blogSection.blogs && blogSection.blogs.length > 0 && (
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blogSection.blogs.map((blog, index) => (
              <BlogCard
                key={index}
                blog={{
                  url: blog.url,
                  image: blog.image,
                  title: blog.title,
                  description: blog.description,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
