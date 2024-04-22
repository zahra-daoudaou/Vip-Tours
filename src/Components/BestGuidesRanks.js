import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import StarRatingComponent from 'react-star-rating-component';
import { Card } from "react-bootstrap";

const bestguides = [
    { id: 1, etoile: 5, name: 'Abdelhamid, Morocco', image: "images/abdelhamid.jpg" },
    { id: 2, etoile: 5, name: 'Mohammed, Morocco', image: "images/5(3).png" },
    { id: 3, etoile: 5, name: 'Hekmat, Turkey', image: "images/6(2).png" },
    { id: 4, etoile: 5, name: 'Bradley, S. Africa', image: "images/4(2).png" }
];

function BestGuidesRanks() {

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow prev-arrow" onClick={onClick}>
                <FaAngleLeft style={{ position: "absolute", left: "5px", top: "50%", transform: "translateY(-50%) translateX(-40%)", zIndex: "1", width: "15%", height: "15%", color: "#24265D" }} />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow next-arrow" onClick={onClick}>
                <FaAngleRight
                    style={{ position: "absolute", right: "5px", top: "50%", transform: "translateY(-50%) translateX(40%) ", zIndex: "1", width: "15%", height: "15%", color: "#24265D" }} />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    const handleDrag = (e) => {
        const sensitivity = 50;
        const deltaX = e.changedTouches ? e.changedTouches[0].clientX - e.touches[0].clientX : e.clientX - e.target.getBoundingClientRect().left;
        if (deltaX > sensitivity) {
            e.stopPropagation();
        }
    };

    return (
        <>
            <div class="d-flex justify-content-center">
                <Card style={{ width: '80%' }}>
                    <h1 style={{ color: "#2C3892", fontWeight: "bold", fontSize: "60px", fontFamily: "Roboto", textAlign: "center" }}>Best Guides Ranks</h1>
                    <Card.Body>
                        <div>
                            <Slider {...settings} onTouchMove={handleDrag} >
                                {bestguides.map((b, index) => (
                                    <div key={index}>
                                        <div className="card" style={{ border: '0' }}>
                                            <img className="card-img-top" src={b.image} alt="" style={{ borderRadius: "50%", width: "150px", height: "150px", margin: " 0 auto", marginTop: "20px" }} />
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <h4 class="text-center" style={{ color: "#2C3892", fontFamily: "Roboto" }}>{b.id}</h4>
                                                <div className="mx-auto shadow" style={{ width: '35%', backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                                                    <StarRatingComponent
                                                        name="Etoile"
                                                        starCount={5}
                                                        value={b.etoile}
                                                    />
                                                </div>
                                                <p className="card-text" style={{ color: "#2C3892", fontSize: "20px", fontFamily: "Roboto", textAlign: "center" }}>{b.name}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div >
                    </Card.Body>
                </Card>
            </div>
        </>

    );
}

export default BestGuidesRanks;
