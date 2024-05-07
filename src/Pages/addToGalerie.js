import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function AddToGalerie() {

    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('chemain_photo', file);
            await axios.post('http://127.0.0.1:8000/api/galerie/create', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Input added successfully');
        } catch (error) {
            console.error('Error adding input:', error);
        }
    };

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '80%', border: '0' }}>
                    <h2 style={{ color: "#000080", fontWeight: "bold" }}>Add to Galerie!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row justify-content-md-center">
                            <label className="form-label" htmlFor="customFile" style={{ color: "#000080", fontWeight: "bold" }}>Choose Pictures</label>
                            <input
                                type="file"
                                className="form-control"
                                id="customFile"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <br />
                        <div className="form-row justify-content-md-center">
                            <button type="submit" className="btn btn-primary" style={{ width: "100%", height: "60px", backgroundColor: "#FF8C00" }}>Submit</button>
                        </div>
                    </form>
                    <br />
                    <Link to="/galerie">
                        <button className="btn btn-primary" style={{ width: "100%", height: "60px", backgroundColor: "#000080" }}>Go to Galerie</button>
                    </Link>
                </Card>
            </div>
        </Container>
    );
}
