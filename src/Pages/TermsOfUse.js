import React from 'react';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const Q = styled.h4`
    color: #2C3892;
    font-weight: bold;
    font-family: Roboto;
    text-align: center;
`;

function TermsOfUse() {
    return (
        <section id="TermsOfUse">
            <div class="d-flex justify-content-center">
                <Card style={{ width: '80%',  border:'0' }}>
                    <Card.Body>
                        <h1 style={{ color: "#2C3892", fontWeight: "bold", fontSize: "60px", fontFamily: "Roboto", textAlign: "center" }}>Terms Of Use</h1>

                        <p> Welcome to VIP Tours. By accessing or using our Website, you agree to comply with and be bound by the following terms and conditions of use. Please read these Terms of Use carefully before using our Website.</p>


                        <Q>1. Use of the Website</Q>

                        <p> 1.1. The content of the pages of this Website is for your general information and use only. It is subject to change without notice.</p>

                        <p> 1.2. Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this Website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>

                        <p>1.3. Your use of any information or materials on this Website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this Website meet your specific requirements.</p>


                        <Q>2. Pricing and Availability</Q>

                        <p> 2.1.The prices of our tours and services are subject to change without notice.</p>

                        <p> 2.2.We reserve the right to modify or discontinue any service or tour without prior notice.</p>

                        <p> 2.3.All bookings are subject to availability.</p>


                        <Q>3. Booking and Payment</Q>

                        <p> 3.1.To book a tour or service, you must provide valid payment information.</p>

                        <p> 3.2.Payment is required at the time of booking.</p>

                        <p> 3.3.Cancellation policies apply.Please refer to our Cancellation Policy for more information.</p>


                        <Q>4. Intellectual Property</Q>

                        <p> 4.1.This Website contains material which is owned by or licensed to us.This material includes, but is not limited to, the design, layout, look, appearance, and graphics.Reproduction is prohibited other than in accordance with the copyright notice.</p>

                        <p> 4.2.All trademarks reproduced on this Website, which are not the property of, or licensed to the operator, are acknowledged on the Website.</p>


                        <Q>5. Links to Other Websites</Q>

                        <p> 5.1.Our Website may contain links to other websites.These links are provided for your convenience to provide further information.They do not signify that we endorse the website(s).We have no responsibility for the content of the linked website(s).</p>


                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}
export default TermsOfUse;