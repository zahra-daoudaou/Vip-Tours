import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../Components/Loading";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//import Rating from "../Components/Rating";

function Tour() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/tours/create')
            .then(response => {
                setTours(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching tours:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="slide-container">
            {tours.length === 0 ? (
                <p className="card-text" style={{ color: '#2C3892' }}> No Tours to be found !!</p>
            ) : (
                <div style={{ justifyContent: 'center' }}>
                    {tours.map(tour => (
                        <div key={tour.id} className="card shadow" style={{ border: '0', width: '50rem', backgroundColor: '#FFFFFF', textAlign: 'center', margin: '10px' }}>
                            <div className="card-body" style={{ display: 'flex', alignItems: 'center' }}>
                                <div className="col-8">
                                    <div className="row" style={{ marginBottom: '10px' }}>
                                        <div className="col">
                                            <h4 className="card-title d-inline" style={{ fontWeight: 'bold', color: '#2C3892' }}>{tour.titre}</h4>
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '10px' }}>
                                        <div className="col">
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", textDecoration: 'underline' }}>{tour.description}</p>
                                        </div>
                                    </div>
                                    <div className="row" style={{ marginBottom: '10px' }}>
                                        <div className="col">
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px", fontWeight: 'bold' }}>Price: {tour.prix}$</p>
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px" }}>Start Date: {tour.date_debut}</p>
                                            <p className="card-text" style={{ color: '#2C3892', fontSize: "20px" }}>End Date: {tour.date_fin}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <Button style={{ border: '0', height: '3rem', width: '9rem', backgroundColor: '#51ADE5', color: '#F4F4F4', fontWeight: 'bold', fontSize: 'large' }}>
                                                <Link to="/" className="nav-link px-2 link-light">Know more</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Tour;
