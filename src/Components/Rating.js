import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Card from 'react-bootstrap/Card';

function Rating() {

    const [etoile, setEtoile] = useState(0);

    const onStarClick = (nextValue, prevValue, name) => {
        setEtoile(nextValue);
    };

    return (
        <div>
            <div className="d-flex justify-content-start">
                <Card style={{ width: '90%', height: '24rem', overflowY: 'scroll' }}>
                    <div className='Accordion'>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F68712' }}>
                            <h3>Rating</h3>
                        </div>
                        <form>
                            <div className="mx-auto shadow" style={{ backgroundColor: '#FFFFFF', borderRadius: '25px' }}>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={5}
                                    value={etoile}
                                    onStarClick={onStarClick}
                                />
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Rating;