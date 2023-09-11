import React from "react";
import {
    BsHandThumbsUp,
    BsFillHandThumbsUpFill,
    BsShare,
    BsShareFill,
    BsCalendarEvent,
} from "react-icons/bs";

export default function BlogPreview({BlogHeaders,BodyContent}) {
    return (
        <>
            {BlogHeaders[0] && (
                <div className="PreviewParent">
                    <div className="BlogTitle">{BlogHeaders[0]}</div>
                    {BlogHeaders[1] && (
                        <div className="BlogDetails">
                            <div className="BlogDesc">{BlogHeaders[1]}</div>
                            <div className="BlogDate">
                                <BsCalendarEvent />
                                <span>
                                    Created on {new Date().toJSON().slice(0, 10)}
                                </span>
                            </div>
                            <div className="BlogBtns">
                                <div className="upvoteParent">
                                    <button>
                                        <BsHandThumbsUp />
                                    </button>
                                    <span className="count">2</span>
                                </div>
                                <button>
                                    <BsShare />
                                </button>
                            </div>
                        </div>
                    )}
                    {BlogHeaders[2] && (
                        <div className="BlogBannerImg">
                            <img src={BlogHeaders[2]} alt="" />
                            <div className="ImgCaption">{BlogHeaders[3]}</div>
                        </div>
                    )}
                    {BlogHeaders[2] && (
                        <div className="BlogSeperator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    )}
                    <div className="BlogBody">
                        {BodyContent.map((ele) => {
                            if (ele.type === "img") {
                                return (
                                    <div className="bbImg" key={ele.id}>
                                        <img src={ele.content.src} alt="" />
                                        <div className="bbImgCaption">
                                            {ele.content.caption}
                                        </div>
                                    </div>
                                );
                            } else if (ele.type === "para") {
                                return (
                                    <div className="bbParagraphs" key={ele.id}>
                                        {ele.content.text}
                                    </div>
                                );
                            } else if (ele.type === "link") {
                                return (
                                    <a
                                        href={ele.content.reference}
                                        className="bbLinks"
                                        key={ele.id}
                                    >
                                        {ele.content.text}
                                    </a>
                                );
                            } else if (ele.type === "heading") {
                                return (
                                    <div className="bbHeadings" key={ele.id}>
                                        {ele.content.text}
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
