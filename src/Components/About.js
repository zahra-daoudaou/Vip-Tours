import React from "react";
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const Section = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #FFFFFF;
    padding: 20px;
`;

const Logo = styled.img`
    width: 40%;
    height: auto;
    margin-right: 20px;
`;

const TextContainer = styled.div`
    flex: 1;
`;

const H1 = styled.h1`
    color: #2C3892;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Roboto';
    margin-bottom: 20px;
`;

const P = styled.p`
    color: #2C3892;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto';
    text-align: justify;
`;

function About() {
    return (
        <section id="about">
            <div class="d-flex justify-content-center">
                <Card style={{ width: '80%' }}>
                    <Section>
                        <Logo src="tropicius-travel-agency.png" alt="Logo" />
                        <Card.Body>
                            <TextContainer>
                                <H1>About</H1>
                                <P>
                                    Welcome to ASKPRIVATEGUIDE, your premier destination for unforgettable travel experiences and exclusive private tours across the globe. Founded on a passion for exploration and a commitment to quality, we connect you with the hidden gems of the world through the eyes of local experts.
                                    At ASKPRIVATEGUIDE, we believe that travel should be more than just visiting new places; it should be an immersive experience that offers deep insights into local cultures, traditions, and histories. That's why we've handpicked the most knowledgeable and enthusiastic guides in each destination to ensure that every tour is informative, authentic, and uniquely memorable.
                                    Our wide array of offerings ensures that whether you're looking for the serene beauty of a secluded beach, the bustling energy of a cityscape, or the ancient allure of historical sites, we have the perfect tour tailored for you. From solo travelers to large groups, our tours are designed to cater to your personal preferences and travel style.
                                </P>
                            </TextContainer>
                        </Card.Body>
                    </Section>
                </Card >
            </div >
        </section>
    );
}


export default About;
