import { useState } from "react";
import React from "react";
import Location from "./Location";
import Price from "./Price";
import Rating from "./Rating";

function SideNavGuide() {

    const [filteredPrice, setFilteredPrice] = useState(0);

    const handlePriceChange = (newPrice) => {
        setFilteredPrice(newPrice);
    };

    return (
        <div>
            <Location />
            <Price onPriceChange={handlePriceChange} />
            <Rating/>
        </div>
    );
}

export default SideNavGuide;
