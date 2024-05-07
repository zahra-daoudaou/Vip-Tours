import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Q = styled.h3`
    color: #2C3892;
    font-weight: bold;
    font-family: Roboto;
    text-align: center;
`;

function FAQs() {
    return (
        <section id="FAQs">
            <div class="d-flex justify-content-center">
                <Card style={{ width: '80%',  border:'0' }}>
                    <Card.Body>
                        <h1 style={{ color: "#2C3892", fontWeight: "bold", fontSize: "60px", fontFamily: "Roboto", textAlign: "center" }}>FAQs</h1>
                        <div>
                            <Q>What languages do your guides speak?</Q>
                            <p>Our guides are proficient in a variety of languages, including English, Spanish, French, and Arabic. Please let us know your language preference when booking.</p>

                            <Q>How can I book a tour with your guides?</Q>
                            <p>Booking a tour with us is easy! You can book directly through our website or contact our customer service team for assistance.</p>

                            <Q>Are your guides licensed and experienced?</Q>
                            <p>Yes, all our guides are licensed professionals with extensive experience in conducting tours. They are knowledgeable about the destinations and can provide you with a memorable experience.</p>

                            <Q>Can I customize a tour itinerary?</Q>
                            <p>Absolutely! We offer customizable tour packages to suit your preferences. Simply let us know your requirements, and we'll tailor a tour just for you.</p>

                            <Q>What safety measures do you have in place during tours?</Q>
                            <p>Your safety is our top priority. Our guides adhere to strict safety protocols and guidelines. We also provide all necessary safety equipment for tours.</p>

                            <Q>Do you offer group tours?</Q>
                            <p>Yes, we offer group tours for those who prefer to travel with others. Group tours are a great way to meet new people and share the experience with fellow travelers.</p>

                            <Q>Do you provide transportation for tours?</Q>
                            <p>Transportation is provided for most of our tours. However, please check the tour details or contact us for specific information regarding transportation options.</p>

                            <Q>Can I request a specific guide for my tour?</Q>
                            <p>While we cannot guarantee the availability of a specific guide, we will do our best to accommodate your request. Please let us know your preference at the time of booking.</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}
export default FAQs;