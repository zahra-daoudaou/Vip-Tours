import React from 'react';
import Card from 'react-bootstrap/Card';
import AreYouGuide from './AreYouGuide';

function AreyouGuideCard() {
    return (
        <section id="are-you-guide">
            <div class="d-flex justify-content-center">
                <Card style={{ width: '80%' }}>
                    <Card.Body>
                        <AreYouGuide />
                    </Card.Body>
                </Card>
            </div>
            <div class="d-flex justify-content-center">
                <img src="images/Untitled design (19).png" alt="" />
            </div>
        </section>
    );
}

export default AreyouGuideCard;
