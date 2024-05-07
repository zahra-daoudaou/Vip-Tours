import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';


const DashboardWrapper = styled.div`
  padding: 20px;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 18px;
  
  &:hover {
    color: #007bff;
  }
`;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function DashboardUser() {

    return (
        <Container>
            <div className="d-flex justify-content-center">
                <Card style={{ width: '80%', border: '0' }}>
                    <DashboardWrapper>
                        <h1 style={{ color: "#000080", fontWeight: "bold" }}>Dashboard</h1>
                        <LinkList>
                            <LinkItem>
                                <StyledLink to="/add-blog">Add Blog</StyledLink>
                            </LinkItem>
                            <LinkItem>
                                <StyledLink to="/add-gallery">Add to Gallery</StyledLink>
                            </LinkItem>
                            <LinkItem>
                                <StyledLink to="/add-tour">Add Tour</StyledLink>
                            </LinkItem>
                        </LinkList>
                    </DashboardWrapper>
                </Card>
            </div>
        </Container >
    );
};
export default DashboardUser;
