import React from "react";
import BlogCard from "./BlogCard";
import "../styles/Recomend.css";

export default function Recomended() {
    return (
        <div className="recomendedParent">
            <h2>Recommended Blogs</h2>
            <div className="recommendedBlogs">
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    );
}
