import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function AddTestimony() {
    const [testimony, setTestimony] = useState('');
    const [etoile, setEtoile] = useState(0);

    const onStarClick = (nextValue, prevValue, name) => {
        setEtoile(nextValue);
    };

    return (
        <div>
            <div>
                <h1>AddTestimony</h1>
            </div>
            <div>
                <form>
                    <label>
                        Testimony:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                    <div>
                        <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={etoile}
                            onStarClick={onStarClick}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTestimony;