import React from "react";
import {
    BsImage,
    BsTextLeft,
    BsCardHeading,
    BsLink45Deg,
    BsPlusLg,
} from "react-icons/bs";

export default function BodyControlPannel({
    toggle,
    toggleControls,
    addImgPannel,
    addParaPannel,
    addLinkPannel,
    addHeadingPannel,
}) {
    return (
        <div className="BodyControlParent">
            <button
                className={`PlusBtn ${toggle ? "rotate" : ""}`}
                onClick={toggleControls}
            >
                <BsPlusLg />
            </button>
            {toggle && <span className="seperator"></span>}
            {
                <div className="ControlPannel">
                    <button
                        onClick={addImgPannel}
                        className={`${toggle ? "travel1" : ""}`}
                    >
                        <BsImage />
                    </button>
                    <button
                        onClick={addParaPannel}
                        className={`${toggle ? "travel2" : ""}`}
                    >
                        <BsTextLeft />
                    </button>
                    <button
                        onClick={addLinkPannel}
                        className={`${toggle ? "travel3" : ""}`}
                    >
                        <BsLink45Deg />
                    </button>
                    <button
                        onClick={addHeadingPannel}
                        className={`${toggle ? "travel4" : ""}`}
                    >
                        <BsCardHeading />
                    </button>
                </div>
            }
        </div>
    );
}
