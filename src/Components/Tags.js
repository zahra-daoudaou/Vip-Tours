import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Tags() {
    const tags = ["Morocco", "Travel", "Adventure", "Trip", "Fishing"];
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleDeleteTag = (tag) => {
        setSelectedTags(selectedTags.filter(t => t !== tag));
    };

    return (
        <div>
            <Card>
                <Card.Body style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', backgroundColor: "#FFFFFF", width: "200px", height: "300px", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                    <Card.Title style={{ backgroundColor: "#F68712", width: "200px", height: "35px", color: '#24265D', paddingTop: "10px", fontSize: "17px", fontWeight: "bold", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }} >Tags</Card.Title>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" , backgroundColor: '#FFFFFF'}}>
                        {tags.map((tag, index) => (
                            <React.Fragment key={index}>
                                <span style={{ width: '150px', height: '25px', color: '#24265D', fontWeight: 'bold', backgroundColor: selectedTags.includes(tag) ? '#F68712' : '#F4F4F4',  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', marginTop: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleTagClick(tag)}>
                                    {tag}
                                    {selectedTags.includes(tag) && <span style={{ cursor: 'pointer', marginLeft: '5px', fontSize: '20px' }} onClick={() => handleDeleteTag(tag)}>x</span>}
                                </span>
                                {index !== tags.length - 1 && <div style={{ height: '5px' }} />}
                            </React.Fragment>
                        ))}
                        {selectedTags.length > 0 && (
                            <div style={{ marginTop: '10px' }}>
                                {selectedTags.map((tag, index) => (
                                    <span key={index} style={{ marginLeft: '5px', cursor: 'pointer' }} onClick={() => handleDeleteTag(tag)}>x {tag}</span>
                                ))}
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Tags;
