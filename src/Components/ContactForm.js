import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

const H1 = styled.h1`
    font-size: 60px;
    font-weight: bold;
    font-family: 'Roboto';
    color: #24265D ; 
    margin-left: 117px;

    @media (max-width: 768px) {
        margin-left: 0;
        text-align: center;
    }
`;

//margin-left: 117px;
const FormContainer = styled.form`
    dispaly: flex;
    flex-direction: column;
    
    @media (max-width: 768px) {
        margin-left: 0;
        align-items: center;
    }
`;

const Input = styled.input`
    border-buttom: 2px solid   ;
    border-left: none; 
    border-right: none;
    border-top: none;
    width: 437px;
    color: #24265D 75%;
    font-size: 22px;
    font-weight: Condensed Italic ;
    font-family: 'Roboto';
    color: #24265D;
    font-style: italic;
`;

const Textarea = styled.textarea`
    border-buttom: 1px solid ;
    border-left: none;
    border-right: none;
    border-top: none; 
    width: 437px;
    font-size: 22px;
    font-weight: Condensed Italic ;
    font-family: 'Roboto';
    color: #24265D ;
    font-style: italic;

`;

const SubmitButton = styled.button`
   width: 150px;
   height: 50px;
   background-color: #24265D;
   color: #F4F4F4;
   text-align: center;
   padding: 20px;
   border: none ;
   font_size: 30px;
   font-weight: bold;

   @media (max-width: 768px) {
    width: 80%;
}
`;

const P = styled.p`
    font-size: 15px;
    font-family: 'Roboto';
    display: flex;
    font-style: italic;
    color: #24265D

    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ContactForm = () => {

    const onSubmit = (event) => {
        event.preventDefault();

    };

    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [message, setMessage] = useState('');

    const handelSubmit = (e) => {
        e.preventDefault();

        setSubmit(true);

        setName('');
        setEmail('');
        setPhonenumber('');
        setMessage('');
    }

    const handelClick = (e) => {
        handelSubmit()
    }



    return (
        <div className="d-flex justify-content-center">
            <Card style={{ width: '95%' }}>
                <Card.Body>
                    <div style={{ display: 'flex', justifyContent: 'center' }}  >
                        <div style={{ width: '95%' }}>
                            <H1> Contact </H1>
                            <FormContainer onSubmit={onSubmit}>
                                <Input type="text" id="name" name="name" placeholder='Full name' onChange={(e) => setName(e.target.value)} /> <br /><br /><br /><br />
                                <Input type="email" id="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />  <br /><br /><br /><br />
                                <Input type="number" id="phonenumber" placeholder='Phone number' onChange={(e) => setPhonenumber(e.target.value)} /> <br /><br /><br /><br />
                                <Textarea id="message" name="message" placeholder='Message' onChange={(e) => setMessage(e.target.value)}  ></Textarea> <br /><br />
                                <div>
                                    {submit ? (

                                        <P  > Thank you for your message, we will contact you soon  </P>

                                    ) :
                                        (
                                            <SubmitButton type="submit" onClick={handelClick} >Submit</SubmitButton>
                                        )
                                    }
                                </div>
                            </FormContainer>
                        </div>
                        <div style={{ marginTop: "150px", marginLeft: "150px" }} >
                            <img src="images/7(3).png" alt="" style={{ width: "50px", display: "flex", position: "absolute", marginLeft: "34px" }} />
                            <p style={{ fontSize: "30px", fontWeight: 'bold', fontFamily: 'Roboto', color: "#24265D", marginLeft: "100px", marginTop: "2px" }}> 0700350298 </p>
                            <img src="images/8(2).png" alt="" style={{ width: "50px", display: "flex", position: "absolute", marginLeft: "34px" }} />
                            <p style={{ fontSize: "30px", fontWeight: 'bold', fontFamily: 'Roboto', color: "#24265D", marginLeft: "100px", marginTop: "2px" }}> contact@askprivateguide.com </p>
                            <img src="images/10(1).png" alt="" style={{ width: "300px", height: "282", display: "flex", position: "absolute" }} />
                            <img src="images/11(1).png" alt="" style={{ width: "300px", height: "282", marginLeft: "300px" }} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
};

export default ContactForm;

//styled={{ height: 504, width: 437 }}