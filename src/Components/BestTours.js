import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Card } from "react-bootstrap";


const bestTours = [
    { id: 1, image: "images/2fdd.png", tour: "Chefchaoun ,Morocco" },
    { id: 2, image: "images/Lixus.jpg", tour: "Lixus ,Morocco" },
    { id: 3, image: "images/Untitled design (20).png", tour: "Sahara ,Morocco" },

];


export default function BestTours() {

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow  prev-arrow" onClick={onClick}>
                <FaAngleLeft style={{ position: "absolute", left: "5px", top: "50%", transform: "translateY(-50%) translateX(-40%)", zIndex: "1", width: "15%", height: "15%", color: "#24265D" }} />
            </div>
        );
    };

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow  next-arrow" onClick={onClick}>
                <FaAngleRight
                    style={{ position: "absolute", right: "5px", top: "50%", transform: "translateY(-50%) translateX(40%)", zIndex: "1", width: "15%", height: "15%", color: "#24265D" }} />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <div class="d-flex justify-content-center">
            <Card style={{ width: '80%' }}>
                <h1 style={{ color: "#2C3892", fontWeight: "bold", fontSize: "60px", fontFamily: "Roboto", textAlign: "center" }}>Best Tours</h1>
                <Card.Body>
                    <Slider {...settings} onTouchMove={handleDrag}>
                        {bestTours.map((b, index) => (
                            <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className="card" style={{ width: "75%", marginLeft: "50%" }}>
                                    <div className="card-img-top" style={{ height: "300px" }}>
                                        <img src={b.image} alt="" style={{ width: "100%", height: "100%" }} />
                                        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", placeItems: 'center' }}>
                                            <div className="card-footer" style={{ backgroundColor: "#F68712", height: "100%", width: '100%' }}>
                                                <p className="card-text" style={{ color: "#2C3892", fontSize: "20px", fontWeight: "bold", fontFamily: "Roboto", textAlign: 'center' }}>{b.tour}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Card.Body>
            </Card>
        </div>
    );
}









// import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
