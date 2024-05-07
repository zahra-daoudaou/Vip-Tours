import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Q = styled.h4`
    color: #2C3892;
    font-weight: bold;
    font-family: Roboto;
    text-align: center;
`;

//boxShadow: '0 4px 8px rgba(0,0,0,0.1)'

function PrivacyPolicy() {
    return (
        <section id="PrivacyPolicy">
            <div class="d-flex justify-content-center">
                <Card style={{ width: '80%', border:'0' }}>
                    <Card.Body>
                        <h1 style={{ color: "#2C3892", fontWeight: "bold", fontSize: "60px", fontFamily: "Roboto", textAlign: "center" }}>Privacy Policy</h1>

                        <p> This Privacy Policy describes how VIP Tours ("we", "us", or "our") collects, uses, and discloses your personal information when you use our website.</p>


                        <Q>1. Information We Collect</Q>

                        <p>1.1. Personal Information: When you use our Website, we may collect personal information such as your name, email address, phone number, and payment information.</p>

                        <p>1.2. Usage Information: We may also collect information about how you use the Website, including your browsing history, IP address, and device information.</p>


                        <Q>2. How We Use Your Information</Q>

                        <ul> 2.1.We may use your personal information to:
                            <li>Provide and improve our services.</li>
                            <li>Process bookings and payments.</li>
                            <li>Communicate with you about your bookings.</li>
                            <li>Send you promotional offers and updates about our services.</li>
                        </ul>


                        <Q>3. Information Sharing</Q>

                        <p> 3.1.We may share your personal information with third - party service providers who help us operate our Website and provide our services.</p>

                        <p> 3.2.We may also share your information in response to legal requests or to protect our rights or the rights of others.</p>


                        <Q>4. Cookies</Q>

                        <p> 4.1.We use cookies and similar technologies to collect information about your browsing behavior and preferences.You can choose to disable cookies in your browser settings, but this may affect your experience on our Website.</p>


                        <Q>5. Links to Other Websites5. Data Security</Q>

                        <p> 5.1.We take reasonable measures to protect your personal information from unauthorized access, disclosure, or alteration.However, no method of transmission over the internet or electronic storage is 100 % secure.</p>


                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}
export default PrivacyPolicy;