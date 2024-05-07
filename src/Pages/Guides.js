import { useState } from "react";
import React from "react";
import Guide from "../Components/guide";
import SideNavGuide from "../Components/SideNavGuide";

function Guides() {
    const [filteredPrice, setFilteredPrice] = useState(0);

    const handlePriceChange = (newPrice) => {
        setFilteredPrice(newPrice);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"> <SideNavGuide /></div>
                <div className="col-md-9">
                    
                    <Guide filteredPrice={filteredPrice} />
                    </div>
            </div>
        </div>
    );
}

export default Guides;
