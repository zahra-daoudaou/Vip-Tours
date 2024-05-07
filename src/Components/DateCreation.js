import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';


function DateCreation({ value, onSubmit }) {
    const handleChange = (event) => {
        const selectedDate = event.target.value;
        onSubmit(selectedDate);
    };

    return (
        <div>
            <Card>
                <Card.Body style={{ marginBottom: '20px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', backgroundColor: "#FFFFFF", width: "200px", height: "150px", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                    <Card.Title style={{ backgroundColor: "#F68712", width: "200px", height: "35px", color: '#24265D', paddingTop: "10px", fontSize: "17px", fontWeight: "bold", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Date of creation</Card.Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <input type="date" value={value} onChange={handleChange} />
                        <Button type='submit'>Filter</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}


export default DateCreation;

















// import React from 'react';
// import { Card, Form } from 'react-bootstrap';

// function DateCreation({ value, onChange }) {
//     return (
//         <div>
//             <Card>
//                 <Card.Body style={{ marginBottom: '20px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', backgroundColor: "#FFFFFF", width: "200px", height: "150px", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
//                     <Card.Title style={{ backgroundColor: "#F68712", width: "200px", height: "35px", color: '#24265D', paddingTop: "10px", fontSize: "17px", fontWeight: "bold", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>Date of creation</Card.Title>
//                     <Form>
//                         {/* <Form.Group>
//                             <Form.Control type="date" style={{ border: "1px solid #24265D", width: "150px", height: "30px", marginTop: "35px" }} />
//                         </Form.Group> */}
//                         <input type="date" value={value} onChange={onChange} />
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// }

// export default DateCreation;
