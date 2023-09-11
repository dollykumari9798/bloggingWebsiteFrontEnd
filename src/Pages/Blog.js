import React from "react";
import {
    BsHandThumbsUp,
    BsFillHandThumbsUpFill,
    BsShare,
    BsShareFill,
    BsCalendarEvent,
} from "react-icons/bs";
import BlogImg from "../assets/Imgs/BlogImg.jpeg";
import BBImg from "../assets/Imgs/BBimg.avif";
import "../styles/Blog.css";
import Recomended from "../Components/Recomended";

export default function Blog() {
    return (
        <>
        <div className="BlogParent">
            <div className="BlogTitle">Some Random Title</div>
            <div className="BlogDetails">
                <div className="BlogDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id aliquid quibusdam? Eveniet, ut totam, quis earum quos ducimus minus obcaecati iste magni dicta 
                </div>
                <div className="BlogDate">
                    <BsCalendarEvent />
                    <span>Posted on Jun 25, 2023</span>
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
            <div className="BlogBannerImg">
                <img src={BlogImg} alt="" />
                <div className="ImgCaption">This is a dog</div>
            </div>
            <div className="BlogSeperator">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="BlogBody">
                <div className="bbParagraphs">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor fuga quis hic est saepe facilis minima architecto voluptates reiciendis laboriosam, enim, corrupti eos quam esse fugit laudantium assumenda debitis perspiciatis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, consequatur. Maxime eius sit, dolores id vel sunt architecto, accusamus, ratione asperiores dolore quam maiores voluptatibus. Ut ipsam quisquam asperiores repellendus.
                </div>
                <div className="bbParagraphs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus, fugiat ullam ad quos id exercitationem? Maiores a incidunt officiis excepturi voluptates. Voluptas, nemo quas exercitationem ullam quo totam ad.
                </div>
                {/* In blog images */}
                <div className="bbImg">
                    <img src={BBImg} alt="" />
                    <div className="bbImgCaption">This is color Pencils</div>
                </div>

                {/* In blog links */}
                <a href="" className="bbLinks">Test Link</a>

                {/* In blog headings */}
                <div className="bbHeadings">Heading 1</div>

                {/* In blog paragraphs */}
                <div className="bbParagraphs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi dicta quos placeat iure. Inventore fuga illo enim totam nam, architecto ullam! Ut tenetur commodi sint maiores quas maxime quae!</div>
            </div>
        </div>
        <Recomended/>
        </>
    );
}
