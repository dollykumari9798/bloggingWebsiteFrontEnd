import React from "react";

export default function SavePannel({ele,savePannel,deletePannel}) {
    return (
        <div className="saveParent">
            <button
                className="saveBtn"
                onClick={() => savePannel(ele.id, ele.editable)}
            >
                {ele.editable ? "Save" : "Edit"}
            </button>
            <button
                className="saveBtn"
                onClick={() => {
                    deletePannel(ele.id);
                }}
            >
                Delete
            </button>
        </div>
    );
}
