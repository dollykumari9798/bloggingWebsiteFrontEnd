import React from "react";
import {
    BsHandThumbsUp,
    BsFillHandThumbsUpFill,
    BsShare,
    BsShareFill,
} from "react-icons/bs";
import "../styles/Recomend.css";
import dice from "../assets/Imgs/dice.jpg";

export default function BlogCard() {
    return (
        <div className="CardParent">
            <div className="BlogImg">
                <img src={dice} alt="" />
            </div>
            <div className="cardContent">
                <h2 className="cardTitle">Some Random Title</h2>
                <span className="cardDate">Jun 25, 2023</span>
                <div className="cardBody">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Perspiciatis exercitationem cumque veniam libero.
                        Deleniti voluptatem accusantium nemo{" "}
                    </p>
                </div>
                <div className="cardBtns">
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
        </div>
    );
}
