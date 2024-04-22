import React from 'react';
import Card from 'react-bootstrap/Card';
import GuidesServices from './GuidesServices';
import ToursServices from './ToursServices';

function Services() {
    return (
        <section id="services">
            <div class="d-flex justify-content-center">
                <Card style={{ width: '80%' }}>
                    <Card.Body>
                        <h1 style={{ color: "#2C3892", fontWeight: "bold", fontSize: "60px", fontFamily: "Roboto", textAlign: "center" }}>Services</h1>
                        <div class="d-flex justify-content-around">
                            <ToursServices />
                            <GuidesServices />
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
}

export default Services;
