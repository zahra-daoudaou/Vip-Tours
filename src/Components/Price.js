import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { IoIosAirplane } from "react-icons/io";

const Price = ({ onPriceChange }) => {

    const [price, setPrice] = useState(0);

    const handlePriceChange = (event) => {
        let newPrice = Number(event.target.value.replace(/\D/g, ''));
        newPrice = Math.max(0, Math.min(newPrice, 100000));
        setPrice(newPrice);
        onPriceChange(newPrice);
    };

    const airplaneStyle = {
        marginLeft: (price / 1000) * 2 + 'px',
        transition: 'margin-left 0.5s',
        fontSize: '20px',
    };

    return (
        <div className="d-flex justify-content-start">
            <Card style={{ width: '90%', height: '10rem', overflowY: 'scroll' }}>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F68712' }}>
                    <h3>Price</h3>
                </div>
                <div>
                    <input
                        type="text"
                        value={"$" + price}
                        onChange={handlePriceChange}
                        onBlur={(e) => {
                            if (e.target.value === "$") {
                                setPrice(0);
                                onPriceChange(0);
                            }
                        }}
                    />
                    <br/>
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={price}
                        onChange={handlePriceChange}
                        step="100"
                    />
                    <div style={airplaneStyle}>
                        <IoIosAirplane />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default Price;
