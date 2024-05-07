import React from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';


const PrevArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-arrow  prev-arrow" onClick={onClick}>
        <FaAngleLeft style={{ position: "absolute", left: "5px", top: "50%", transform: "translateY(-50%) translateX(-40%)", zIndex: "1", width: "15%", height: "15%", color: "#24265D" }} />
    </div>;
};
const NextArrow = (props) => {
    const { onClick } = props;
    return <div className="slick-arrow  next-arrow" onClick={onClick}><FaAngleRight style={{ position: "absolute", right: "5px", top: "50%", transform: "translateY(-50%) translateX(40%)", zIndex: "1", width: "15%", height: "15%", color: "#24265D" }} /></div>;
};

const Articles = [
    {
        id: 1,
        title: "A Guided Tour of The Blue City-Chefchaouen, Morocco",
        date: "19/04/2024",
        location: "Morocco",
        tags: ["Morocco", "Chefchaouen"],
        image1: "images/28.png",
        image2: "images/29.png",
        content: "The obvious question when you first get to Chefchaouen is: 'Why is it blue?' Many reasons are offered and most are myths. Some of the myths include: the color repels mosquitos; it reminded the original (non-existent) ex-sailor residents of their seafaring past; it's a reminder to remember...The obvious question when you first get to Chefchaouen is: “Why is it blue?” Many reasons are offered and most are myths. Some of the myths include: the color repels mosquitos; it reminded the original (non-existent) ex-sailor residents of their seafairing past; it s a reminder to remember The real reason the entire city is painted blue is really simple. When Jews were expelled from Spain at the end of the 15th century, many came to Chefchaouen. They painted the Mellah, the Jewish area in light blue. According to Fatima Habte responsible for my guided tour of Chefchaouen and the owner of the excellent Gite Talassemtane, a local tour and trekking company  they even added a touch of blue dye to their white sheets. Over centuries the blue decor spread, transforming the medina from its original white walls and red tiles roofs. Recently, people have become bolder with the shades of blue used, adding tones of turquoise, violet and purple.When I asked Fatima what she most wanted people to know about Chefchaouen, she said, “It s more than blue. We have a rich culture and history and we are surrounded by beautiful nature and national parks. She should know, she grew up in Chefchaouen s medina"
    }
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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


const CardArticle = () => {
    const [comment, setComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Comment submitted:', comment);
        setComment('');
    };
    return (
        <div style={{backgroundColor: '#FFFFFF', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
            {Articles.map((a, index) => (
                <Card key={index} >
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <div style={{ display: 'flex', alignItems: 'center', margin: '20px' }}>
                                    <Card.Img variant="top" src={a.image1} style={{ width: '200px', height: '200px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
                                    <Card.Title style={{ paddingBottom: '50px', fontSize: '40px', fontWeight: 'bold', fontFamily: 'Roboto', color: '#2C3892', marginLeft: '20px' }}>
                                        <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', width: '200px', height: '100px' }}>
                                            <p style={{ fontSize: '25px' }} > {a.date} </p>
                                            <div style={{ display: 'flex', marginLeft: '50px' }}>
                                                <img src='images/9.png' alt='' style={{ width: "30px", height: '30px', marginTop: '10px' }} />
                                                <p style={{ fontSize: '20px', fontWeight: 'normal', color: '#2C3892', marginTop: '15px' }} > {a.location} </p>
                                            </div>
                                            <div style={{ display: 'flex', marginLeft: '110px' }}>
                                                <img src='images/19.png' alt='' style={{ width: "50px", height: '40px', marginLeft: '50px' }} />
                                                <img src='images/tropicius - travel agency (6).png' alt='' style={{ width: "50px", height: '40px', marginLeft: '20px' }} />
                                            </div>
                                        </div>
                                        {a.title}
                                    </Card.Title>
                                </div>
                            </Col>
                            <Col md={6} style={{ margin: '20px' }} >
                                <Card.Text style={{ fontSize: '20px', fontWeight: 'normal', fontFamily: 'Roboto', color: '#2C3892' }}>
                                    {a.content}
                                </Card.Text>
                                <Slider {...settings} onTouchMove={handleDrag} style={{ width: "50%", height: "50%" }}>
                                    <img src={a.image1} alt="" />
                                    <img src={a.image2} alt="" />
                                </Slider>
                                <div style={{ display: 'flex', position: 'absolute' }}>
                                    <Card.Img src="images/25.png" style={{ width: '46px', height: '47px' }} />
                                    <Card.Text style={{ fontSize: '20px', fontWeight: 'normal', color: '#2C3892', marginLeft: '10px' }}>English</Card.Text>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '10px' }}>
                                        {a.tags.map((tag, index) => (
                                            <div key={index} style={{ marginLeft: '40px'}}>
                                                <Button style={{ width: '150px', height: '30px', color: '#24265D', fontWeight: 'bold', backgroundColor: '#F4F4F4', border: 'none', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>{tag}</Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer style={{ width: '90%', height: '140px', backgroundColor: '#F4F4F4', marginLeft: '45px', marginRight: '45px',  display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                        <Form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '50px' }}>
                            <img src='images/4(2).png' alt='' style={{ borderRadius: '50%', width: "50px", height: "50px", marginRight: '10px' }} />
                            <input type='text' placeholder='Add your comment...' value={comment} onChange={(e) => setComment(e.target.value)} style={{ width: '660px', height: '45px', border: 'none', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', backgroundColor: '#FFFFFF' }} />
                            <button type="submit" style={{ border: 'none', background: 'none', cursor: 'pointer', backgroundColor: '#F68712', width: '50px', height: '45px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} onClick={handleSubmit}>
                                <img src='images/33.png' alt='Add comment' style={{ width: '30px', height: '30px' }} />
                            </button>
                        </Form>
                    </Card.Footer>
                </Card>
            ))}
        </div>
    )
}


export default CardArticle;