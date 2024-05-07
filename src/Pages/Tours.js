import React from "react";
import SideNavGuide from "../Components/SideNavGuide";
import Tour from "./tour";

function Tours() {

return (
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <SideNavGuide />
            </div>
            <div className="col-md-9">
                <Tour />
            </div>
        </div>
    </div>
);
}

export default Tours;
