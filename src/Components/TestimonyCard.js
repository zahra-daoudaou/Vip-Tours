import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import StarRatingComponent from 'react-star-rating-component';

const temoignageTable = [
    { id_temoignage: 1, description: 'Great experience!', etoile: 5, image: 'merakech.jpeg', name: 'John Doe', country: 'France' },
    { id_temoignage: 2, description: 'Very helpful guide.', etoile: 4, image: 'merakech.jpeg', name: 'Jane Smith', country: 'UK' },
    { id_temoignage: 3, description: 'Could be better.', etoile: 3, image: 'merakech.jpeg', name: 'Alice Wonder', country: 'USA' },
    { id_temoignage: 4, description: 'trash', etoile: 0, image: 'merakech.jpeg', name: 'Duae', country: 'Morocoo' }
];
console.log(temoignageTable);

function TestimonyCard() {

    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="slick-arrow  prev-arrow" onClick={onClick}>
                <FaAngleLeft
                    style={{ position: "absolute", left: "5px", top: "50%", transform: "translateY(-50%) translateX(-40%)", zIndex: "1", width: "15%", height: "15%", color: "#24265D" }} />
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
        <div className="d-flex justify-content-center">
            <Card style={{ width: '80%' }}>
                <h1 p className="text-center" style={{ color: '#2C3892' }}>Testimony</h1>
                <Card.Body>
                    {temoignageTable.length === 0 ? (
                        <p class="card-text" style={{ color: '#2C3892' }}> Be the first to give us a Testimony !!</p>
                    ) : (
                        <Slider {...settings} onTouchMove={handleDrag}>
                            {temoignageTable.map((t, index) => (
                                <div key={index}>
                                    <div key={t.id_temoignage} className="card"
                                        style={{ width: '18rem', backgroundColor: '#F4F4F4', textAlign: 'center', margin: '10px' }}>
                                        <div className="card-body">
                                            <img className="card-img-top"
                                                src={t.image}
                                                alt=""
                                                style={{ borderRadius: "50%", width: "150px", height: "150px", margin: " 0 auto", marginTop: "20px" }} />
                                            <p className="card-text" style={{ color: '#2C3892' }}>"{t.description}"</p>
                                            <h5 className="card-title" style={{ color: '#2C3892' }}>{t.name}, {t.country}</h5>
                                            <div className="mx-auto shadow" style={{ width: '35%', backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                                                <StarRatingComponent
                                                    name="Etoile"
                                                    starCount={5}
                                                    value={t.etoile}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
                </Card.Body>
                <Button style={{ border: '0', height: '3rem', width: '18rem', backgroundColor: '#51ADE5', color: '#F4F4F4', fontWeight: 'bold', fontSize: 'large' }} >
                    <Link to="/add-testimony" className="nav-link px-2 link-light"> Add one! </Link>
                </Button>
            </Card>
        </div>
    );
}

export default TestimonyCard;

<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}></div>
