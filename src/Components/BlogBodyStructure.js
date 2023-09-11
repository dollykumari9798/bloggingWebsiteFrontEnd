import React from "react";
import "../styles/BlogBodyStructure.css";
import SavePannel from "./SavePannel";

export default function BlogBodyStructure({
    BodyContent,
    handleChange,
    savePannel,
    deletePannel,
}) {
    return (
        <div className="BlogBodyStructure">
            {BodyContent.map((ele) => {
                if (ele.type === "img") {
                    return (
                        <div className="BlogContentImg" key={ele.id}>
                            <h3>Blog Image:</h3>
                            <div
                                className={`bidDesc PannelContent ${
                                    ele.editable ? "" : "Uneditable"
                                }`}
                            >
                                <label htmlFor="BImg" className="bitKey">
                                    Choose Banner Image:
                                </label>
                                <input
                                    type="file"
                                    name="BImg"
                                    id="BImg"
                                    accept="image/*" 
                                    onChange={(e) => handleChange(ele.id, e)}
                                />
                            </div>
                            <div
                                className={`bidDate PannelContent ${
                                    ele.editable ? "" : "Uneditable"
                                }`}
                            >
                                <label htmlFor="BCaption" className="bitKey">
                                    Enter Image Caption:
                                </label>
                                <input
                                    type="text"
                                    name="BCaption"
                                    id="BCaption"
                                    onChange={(e) => handleChange(ele.id, e)}
                                />
                            </div>
                            {/* SavePannel */}
                            <SavePannel
                                ele={ele}
                                savePannel={savePannel}
                                deletePannel={deletePannel}
                            />
                        </div>
                    );
                } else if (ele.type === "para") {
                    return (
                        <div className="BlogContentPara" key={ele.id}>
                            <h3>Blog Paragraph:</h3>
                            <div
                                className={`bidDate PannelContent ${
                                    ele.editable ? "" : "Uneditable"
                                }`}
                            >
                                <label htmlFor="BDesc" className="bitKey">
                                    Enter Paragraph Content:
                                </label>
                                <textarea
                                    name="BDesc"
                                    id="BDesc"
                                    cols="30"
                                    rows="5"
                                    onChange={(e) => handleChange(ele.id, e)}
                                ></textarea>
                            </div>
                            {/* SavePannel */}
                            <SavePannel
                                ele={ele}
                                savePannel={savePannel}
                                deletePannel={deletePannel}
                            />
                        </div>
                    );
                } else if (ele.type === "link") {
                    return (
                        <div className="BlogContentLink" key={ele.id}>
                            <h3>Blog HyperLink:</h3>
                            <div
                                className={`bidDate PannelContent ${
                                    ele.editable ? "" : "Uneditable"
                                }`}
                            >
                                <label htmlFor="BLinkhref" className="bitKey">
                                    Enter reference:
                                </label>
                                <input
                                    type="text"
                                    name="BLinkhref"
                                    id="BLinkhref"
                                    onChange={(e) => handleChange(ele.id, e)}
                                />
                            </div>
                            <div
                                className={`bidDate PannelContent ${
                                    ele.editable ? "" : "Uneditable"
                                }`}
                            >
                                <label htmlFor="BLinkText" className="bitKey">
                                    Enter Text:
                                </label>
                                <input
                                    type="text"
                                    name="BLinkText"
                                    id="BLinkText"
                                    onChange={(e) => handleChange(ele.id, e)}
                                />
                            </div>
                            {/* SavePannel */}
                            <SavePannel
                                ele={ele}
                                savePannel={savePannel}
                                deletePannel={deletePannel}
                            />
                        </div>
                    );
                } else if (ele.type === "heading") {
                    return (
                        <div className="BlogContentHeading" key={ele.id}>
                            <h3>Blog Heading:</h3>
                            <div
                                className={`bidDate PannelContent ${
                                    ele.editable ? "" : "Uneditable"
                                }`}
                            >
                                <label htmlFor="BHeading" className="bitKey">
                                    Enter Heading Text:
                                </label>
                                <input
                                    type="text"
                                    name="BHeading"
                                    id="BHeading"
                                    onChange={(e) => handleChange(ele.id, e)}
                                />
                            </div>

                            {/* SavePannel */}
                            <SavePannel
                                ele={ele}
                                savePannel={savePannel}
                                deletePannel={deletePannel}
                            />
                        </div>
                    );
                }
                return "";
            })}
        </div>
    );
}
