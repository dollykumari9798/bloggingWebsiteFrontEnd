import React, { useEffect, useState } from "react";
import "../styles/Drafts.css";

export default function Drafts() {
    const [Blogs, setBlogs] = useState([]);

    function handleEdit(id){
        const queryParams = new URLSearchParams({ id}).toString();
        const url = `/admin/create?${queryParams}`;
        window.location.href = url;
    }

    function handleDelete(id) {
        if (window.confirm("Are you sure?")) {
            setBlogs((curBlogs) => {
                return curBlogs.filter((Blog) => Blog.BlogId !== id);
            });
            window.localStorage.removeItem(id);
        }
    }

    useEffect(() => {
        console.log("running");
        var storage = { ...localStorage };
        var draftBlogs = Object.entries(storage);
        draftBlogs = draftBlogs.map((Blog) => {
            var blogData = JSON.parse(Blog[1]);
            var value = {
                BlogId: Blog[0],
                BlogHeader: blogData.headers,
                BlogBody: blogData.body,
            };
            return value;
        });
        setBlogs((curBlogs) => {
            // if (curBlogs.length === 0) {
                return draftBlogs;
            // }
        });
        console.log(draftBlogs);
    }, []);

    return (
        <div className=" DraftParent">
            {Blogs.map((Blog) => {
                return (
                    <div className="card" key={Blog.BlogId}>
                        <div className="content">
                            <div className="BgImg">
                                <img src={Blog.BlogHeader[2]} alt="" />
                            </div>
                            <div className="title">{Blog.BlogHeader[0]}</div>
                            <div className="description">
                                {Blog.BlogHeader[1]}
                            </div>
                        </div>
                        <div className="draftCardControl">
                            <button onClick={()=> handleEdit(Blog.BlogId)}>Edit</button>
                            <button onClick={() => handleDelete(Blog.BlogId)}>
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
