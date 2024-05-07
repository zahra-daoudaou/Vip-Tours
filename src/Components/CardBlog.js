import React from 'react';
import { Card, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const blogs = [
    {
        id: 1,
        title: "A Guided Tour of The Blue City-Chefchaouen, Morocco",
        date: "19/04/2024",
        location: "Morocco",
        tags: ["Morocco", "Chefchaouen"],
        content: "The obvious question when you first get to Chefchaouen is: 'Why is it blue?' Many reasons are offered and most are myths. Some of the myths include: the color repels mosquitos; it reminded the original (non-existent) ex-sailor residents of their seafaring past; it's a reminder to remember..."
    },
    {
        id: 2,
        title: "A Guided Tour of The Blue City-Chefchaouen, Morocco",
        date: "30/04/2024",
        location: "Morocco",
        tags: ["Morocco", "Chefchaouen"],
        content: "The obvious question when you first get to Chefchaouen is: 'Why is it blue?' Many reasons are offered and most are myths. Some of the myths include: the color repels mosquitos; it reminded the original (non-existent) ex-sailor residents of their seafaring past; it's a reminder to remember..."
    }

];

function CardBlog({ data }) {

    const allData = [...blogs, ...(data || [])];

    return (
        <div>
            <div style={{ backgroundColor: '#FFFFFF', width: '900px', height: '300px', margin: '50px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                {allData.map((blog, index) => (
                    <div key={index}>
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Card.Img variant="top" src="images/2fdd.png" style={{ width: '200px', height: '200px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
                                            <Card.Title style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'Roboto', color: '#2C3892', marginLeft: '20px' }}>
                                                <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', width: '200px', height: '100px' }}>
                                                    <p style={{ fontSize: '25px' }} > {blog.date} </p>
                                                    <div style={{ display: 'flex', marginLeft: '50px' }}>
                                                        <img src='images/9.png' alt='' style={{ width: "30px", height: '30px', marginTop: '10px' }} />
                                                        <p style={{ fontSize: '20px', fontWeight: 'normal', color: '#2C3892', marginTop: '15px' }} > {blog.location} </p>
                                                    </div>
                                                    <div style={{ display: 'flex', marginLeft: '110px' }}>
                                                        <img src='images/19.png' alt='' style={{ width: "50px", height: '40px', marginLeft: '50px' }} />
                                                        <img src='images/tropicius - travel agency (6).png' alt='' style={{ width: "50px", height: '40px', marginLeft: '20px' }} />
                                                    </div>
                                                </div>
                                                {blog.title}
                                            </Card.Title>
                                        </div>
                                    </Col>
                                    <Col md={6} style={{ margin: '20px' }} >
                                        <Card.Text style={{ fontSize: '20px', fontWeight: 'normal', fontFamily: 'Roboto', color: '#2C3892' }}>
                                            {blog.content}
                                        </Card.Text>
                                        <div style={{ display: 'flex', position: 'absolute' }}>
                                            <Card.Img src="images/25.png" style={{ width: '46px', height: '47px', marginBottom: '100px' }} />
                                            <Card.Text style={{ fontSize: '20px', fontWeight: 'normal', color: '#2C3892', marginLeft: '10px' }}>English</Card.Text>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '10px' }}>
                                                {blog.tags.map((tag, index) => (
                                                    <div key={index} style={{ marginLeft: '40px' }}>
                                                        <Button style={{ width: '150px', height: '30px', color: '#24265D', fontWeight: 'bold', backgroundColor: '#F4F4F4', border: 'none', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>{tag}</Button>
                                                    </div>
                                                ))}
                                            </div>
                                            <Link to="/article">
                                                <Button style={{ marginLeft: '200px', width: '150px', height: '40px', backgroundColor: '#51ADE5', color: '#F4F4F4', border: 'none', boxShadow: '0px 0px 10px 4px rgba(0, 0, 0, 0.25)' }}> Know more </Button>
                                            </Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardBlog









// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import './st.css'

// const [blogs, setBlogs] = useState([]);

// useEffect(() => {
//   const fetchBlogs = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:8000/api/BlogController');
//       setBlogs(response.data);
//     } catch (error) {
//       console.error('Error fetching blogs:', error);
//     }
//   };

//   fetchBlogs();
// }, []);

/*
return (
    <div style={{ backgroundColor: '#FFFFFF', width: '900px', height: '300px', margin: '50px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
        {blogs.map((blog, index) => (
            {data.map(item => (
                <div key={index}>
            <Card key={item.id} >
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Card.Img variant="top" src="images/2fdd.png" style={{ width: '200px', height: '200px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} />
                                <Card.Title style={{ fontSize: '25px', fontWeight: 'bold', fontFamily: 'Roboto', color: '#2C3892', marginLeft: '20px' }}>
                                    <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', width: '200px', height: '100px' }}>
                                        <p style={{ fontSize: '25px' }} > {blog.date} </p>
                                        <div style={{ display: 'flex', marginLeft: '50px' }}>
                                            <img src='images/9.png' alt='' style={{ width: "30px", height: '30px', marginTop: '10px' }} />
                                            <p style={{ fontSize: '20px', fontWeight: 'normal', color: '#2C3892', marginTop: '15px' }} > {blog.location} </p>
                                        </div>
                                        <div style={{ display: 'flex', marginLeft: '110px' }}>
                                            <img src='images/19.png' alt='' style={{ width: "50px", height: '40px', marginLeft: '50px' }} />
                                            <img src='images/tropicius - travel agency (6).png' alt='' style={{ width: "50px", height: '40px', marginLeft: '20px' }} />
                                        </div>
                                    </div>
                                    {blog.title}
                                </Card.Title>
                            </div>
                        </Col>
                        <Col md={6} style={{ margin: '20px' }} >
                            <Card.Text style={{ fontSize: '20px', fontWeight: 'normal', fontFamily: 'Roboto', color: '#2C3892' }}>
                                {blog.content}
                            </Card.Text>
                            <div style={{ display: 'flex', position: 'absolute' }}>
                                <Card.Img src="images/25.png" style={{ width: '46px', height: '47px', marginBottom: '100px' }} />
                                <Card.Text style={{ fontSize: '20px', fontWeight: 'normal', color: '#2C3892', marginLeft: '10px' }}>English</Card.Text>
                                <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '10px' }}>
                                    {blog.tags.map((tag, index) => (
                                        <div key={index} style={{ marginLeft: '40px' }}>
                                            <Button style={{ width: '150px', height: '30px', color: '#24265D', fontWeight: 'bold', backgroundColor: '#F4F4F4', border: 'none', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>{tag}</Button>
                                        </div>
                                    ))}
                                </div>
                                <Link to="/article">
                                    <Button style={{ marginLeft: '200px', width: '150px', height: '40px', backgroundColor: '#51ADE5', color: '#F4F4F4', border: 'none', boxShadow: '0px 0px 10px 4px rgba(0, 0, 0, 0.25)' }}> Know more </Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
                </div>
            </Card>
            ))}
        ))}
    </div>
)*/