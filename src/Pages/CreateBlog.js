import React, { useEffect, useState } from "react";
import "../styles/CreateBlog.css";
import "../styles/PreviewParent.css";
import BlogBodyStructure from "../Components/BlogBodyStructure";
import BodyControlPannel from "../Components/BodyControlPannel";
import BlogPreview from "../Components/BlogPreview";
import { useLocation } from "react-router-dom";

export default function CreateBlog() {
    const [toggle, setToggle] = useState(false);
    const [BodyContent, setBodyContent] = useState([]);
    const [BlogHeaders, setBlogHeaders] = useState([]);
    // const [BlogHeaders, setBlogHeaders] = useState({
    //     BlogTitle: "",
    //     BlogDesc: "",
    //     ImgSrc: "",
    //     ImgCap: "",
    // });
    const [downloadAnimate, setDownloadAnimate] = useState([false, false]);
    const [uploadAnimate, setUploadAnimate] = useState([false, false]);

    // setting up for editing saved blogs
    const location = useLocation();
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const id = searchParams.get("id");
        if (id) {
            var blog = JSON.parse(localStorage.getItem(id));
            setBlogHeaders((curBlogHeaders) => {
                return blog.headers;
            });
            setBodyContent((curBodyContent) => {
                return blog.body;
            });
            // console.log(blog);
        }
    }, []);

    function addHeader(e) {
        setBlogHeaders((curBlogHeaders) => {
            if (e.target.name === "BTitle") {
                curBlogHeaders[0] = e.target.value;
            } else if (e.target.name === "BDesc") {
                curBlogHeaders[1] = e.target.value;
            } else if (e.target.name === "BImg") {
                // var file = e.target.files[0];
                // var reader = new FileReader();
                // reader.onload = function (event) {
                //     curBlogHeaders[2] = event.target.result;
                //     curBlogHeaders[2] = "image not loading";
                //     console.log(event.target.result);
                // };
                // reader.readAsDataURL(file);
                curBlogHeaders[2] = URL.createObjectURL(e.target.files[0]);
            } else if (e.target.name === "BCaption") {
                curBlogHeaders[3] = e.target.value;
            }
            return [...curBlogHeaders];
        });
        console.log([BlogHeaders]);
        // setBlogHeaders((curBlogHeaders) => {
        //     if (e.target.name === "BTitle") {
        //         return {
        //             ...curBlogHeaders,
        //             BlogTitle: e.target.value,
        //         };
        //     } else if (e.target.name === "BDesc") {
        //         return {
        //             ...curBlogHeaders,
        //             BlogDesc: e.target.value,
        //         };
        //     } else if (e.target.name === "BImg") {
        //         var reader = new FileReader();
        //         reader.readAsDataURL(e.target.files[0]);
        //         reader.onload = (e)=>{
        //             return {
        //                 ...curBlogHeaders,
        //                 ImgSrc:e.target.result
        //             };
        //         };
        //     }
        // });
    }

    //handle blog upload
    function handleDownload() {
        console.log("clicked");
        // saving to local storage
        var BlogId =
            "BlogDraft_" +
            new Date().toJSON().slice(0, 10) +
            "_" +
            BlogHeaders[0];
        var Blog = {
            headers: BlogHeaders,
            body: BodyContent,
        };
        try {
            window.localStorage.setItem(BlogId, JSON.stringify(Blog));
            // animation
            setDownloadAnimate((curDownloadAnimate) => {
                return [true, curDownloadAnimate[1]];
            });
            setTimeout(() => {
                setDownloadAnimate((curDownloadAnimate) => {
                    return [curDownloadAnimate[0], true];
                });
            }, 1000);
            setTimeout(() => {
                setDownloadAnimate((curDownloadAnimate) => {
                    alert("blog saved successfully");
                    return [false, false];
                });
            }, 3000);
        } catch (err) {
            console.log(err.message);
            alert("failed to save locally");
        }
    }

    // body control visibility toggle
    function toggleControls() {
        setToggle(!toggle);
    }

    // add img Pannel
    function addImgPannel() {
        var imgElement = {
            type: "img",
            editable: true,
            id: crypto.randomUUID(),
            content: {
                src: "",
                caption: "",
            },
        };
        setBodyContent((curBodyContent) => {
            return [...curBodyContent, imgElement];
        });
        setToggle(!toggle);
    }

    // add paragraph Pannel
    function addParaPannel() {
        var paraElement = {
            type: "para",
            editable: true,
            id: crypto.randomUUID(),
            content: {
                text: "",
            },
        };
        setBodyContent((curBodyContent) => {
            return [...curBodyContent, paraElement];
        });
        setToggle(!toggle);
    }

    // add heading Pannel
    function addHeadingPannel() {
        var headingElement = {
            type: "heading",
            editable: true,
            id: crypto.randomUUID(),
            content: {
                text: "",
            },
        };
        setBodyContent((curBodyContent) => {
            return [...curBodyContent, headingElement];
        });
        setToggle(!toggle);
    }

    // add link Pannel
    function addLinkPannel() {
        var linkElement = {
            type: "link",
            editable: true,
            id: crypto.randomUUID(),
            content: {
                reference: "",
                text: "",
            },
        };
        setBodyContent((curBodyContent) => {
            return [...curBodyContent, linkElement];
        });
        setToggle(!toggle);
    }

    //delete pannel
    function deletePannel(id) {
        if (window.confirm("Are you sure?")) {
            setBodyContent((curBodyContent) => {
                return curBodyContent.filter((ele) => ele.id !== id);
            });
        }
        // console.log(BodyContent);
    }

    // add save feature to Pannel
    function savePannel(id, editable) {
        setBodyContent((curBodyContent) => {
            return curBodyContent.map((ele) => {
                if (ele.id === id) {
                    return { ...ele, editable: !editable };
                }
                return ele;
            });
        });
        // console.log(BodyContent);
    }

    // handle onchange for data insertion
    function handleChange(id, e) {
        setBodyContent((curBodyContent) => {
            return curBodyContent.map((ele) => {
                if (ele.id === id) {
                    if (ele.type === "img") {
                        if (e.target.name === "BImg") {
                            ele.content.src = URL.createObjectURL(
                                e.target.files[0]
                            );
                        } else if (e.target.name === "BCaption") {
                            ele.content.caption = e.target.value;
                        }
                    } else if (ele.type === "para") {
                        if (e.target.name === "BDesc") {
                            ele.content.text = e.target.value;
                        }
                    } else if (ele.type === "link") {
                        if (e.target.name === "BLinkhref") {
                            ele.content.reference = e.target.value;
                        } else if (e.target.name === "BLinkText") {
                            ele.content.text = e.target.value;
                        }
                    } else if (ele.type === "heading") {
                        if (e.target.name === "BHeading") {
                            ele.content.text = e.target.value;
                        }
                    }
                }
                return ele;
            });
        });
    }

    return (
        <div className="CreateBlogParent">
            <div className="cpStruture">
                <h2>Blog Structure</h2>
                <div className="BlogInTitle">
                    <label htmlFor="BTitle" className="bitKey">
                        Enter Blog Title:
                    </label>
                    <input
                        type="text"
                        id="BTitle"
                        name="BTitle"
                        placeholder="Some Random Title"
                        // value={BlogHeaders.BlogTitle}
                        value={BlogHeaders[0]}
                        onChange={addHeader}
                    />
                </div>
                <div className="bidDesc">
                    <label htmlFor="BDesc" className="bitKey">
                        Enter Blog Description:
                    </label>
                    <textarea
                        name="BDesc"
                        id="BDesc"
                        cols="30"
                        rows="5"
                        value={BlogHeaders[1]}
                        onChange={addHeader}
                    ></textarea>
                </div>
                <div className="BlogInImg">
                    <h3>Blog Details:</h3>
                    <div className="bidDesc">
                        <label htmlFor="BImg" className="bitKey">
                            Choose Banner Image:
                        </label>
                        <input
                            type="file"
                            name="BImg"
                            id="BImg"
                            onChange={addHeader}
                            accept="image/*"
                        />
                    </div>
                    <div className="bidDate">
                        <label htmlFor="BCaption" className="bitKey">
                            Enter Image Caption:
                        </label>
                        <input
                            type="text"
                            name="BCaption"
                            id="BCaption"
                            value={BlogHeaders[3]}
                            onChange={addHeader}
                        />
                    </div>
                </div>
                <div className="BlogInBody">
                    <h3>Blog Body:</h3>
                    <div className="scrollWrapper">
                        <BlogBodyStructure
                            BodyContent={BodyContent}
                            handleChange={handleChange}
                            savePannel={savePannel}
                            deletePannel={deletePannel}
                        />
                    </div>

                    {/* Control pannel Code */}
                    <BodyControlPannel
                        toggle={toggle}
                        addHeadingPannel={addHeadingPannel}
                        addImgPannel={addImgPannel}
                        addLinkPannel={addLinkPannel}
                        addParaPannel={addParaPannel}
                        toggleControls={toggleControls}
                    />
                </div>
            </div>
            <div className="cpPreview">
                <h2>Blog Preview</h2>
                <BlogPreview
                    BodyContent={BodyContent}
                    BlogHeaders={BlogHeaders}
                />
                {/* Upload to DB */}
                {BlogHeaders[0] && (
                    <div className="uploadBtn">
                        <div
                            className={`btn-circle-download draft ${
                                uploadAnimate[0]
                                    ? uploadAnimate[1]
                                        ? "done"
                                        : "load"
                                    : ""
                            }`}
                            // onClick={handleUpload}
                        >
                            <svg
                                id="arrow"
                                width="14px"
                                height="20px"
                                viewBox="17 14 14 20"
                            >
                                <path d="M24,15 L24,32"></path>
                                <polyline points="30 27 24 33 18 27"></polyline>
                            </svg>
                            <svg
                                id="check"
                                width="21px"
                                height="15px"
                                viewBox="13 17 21 15"
                            >
                                <polyline points="32.5 18.5 20 31 14.5 25.5"></polyline>
                            </svg>
                            <svg
                                id="border"
                                width="48px"
                                height="48px"
                                viewBox="0 0 48 48"
                            >
                                <path d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
                            </svg>
                        </div>
                    </div>
                )}

                {/* Save as Draft */}
                {BlogHeaders[0] && (
                    <div className="downloadBtn">
                        <div
                            className={`btn-circle-download ${
                                downloadAnimate[0]
                                    ? downloadAnimate[1]
                                        ? "done"
                                        : "load"
                                    : ""
                            }`}
                            onClick={handleDownload}
                        >
                            <svg
                                id="arrow"
                                width="14px"
                                height="20px"
                                viewBox="17 14 14 20"
                            >
                                <path d="M24,15 L24,32"></path>
                                <polyline points="30 27 24 33 18 27"></polyline>
                            </svg>
                            <svg
                                id="check"
                                width="21px"
                                height="15px"
                                viewBox="13 17 21 15"
                            >
                                <polyline points="32.5 18.5 20 31 14.5 25.5"></polyline>
                            </svg>
                            <svg
                                id="border"
                                width="48px"
                                height="48px"
                                viewBox="0 0 48 48"
                            >
                                <path d="M24,1 L24,1 L24,1 C36.7025492,1 47,11.2974508 47,24 L47,24 L47,24 C47,36.7025492 36.7025492,47 24,47 L24,47 L24,47 C11.2974508,47 1,36.7025492 1,24 L1,24 L1,24 C1,11.2974508 11.2974508,1 24,1 L24,1 Z"></path>
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
