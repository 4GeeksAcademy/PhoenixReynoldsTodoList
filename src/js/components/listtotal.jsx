import React from "react";



const List = ({ number }) => {
    return (
        <div className="">
            <div className="justify-content-center align-items-center listitem bg-white w-50 m-auto border border-secondary border-top-0 d-flex">
                <p className="list-item-text m-0 d-flex align-items-center"
                    style={{ height: "39px" }}>Tasks remaining: {number}</p> {/* Re-study and fix later */}
            </div>
        </div>
    )
}

export default List;