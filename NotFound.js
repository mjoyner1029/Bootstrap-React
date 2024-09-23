import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import notFoundImage from './assets/not-found-image.jpg'; // Adjust path as necessary

const NotFound = () => {
  return (
    <Container fluid style={{ textAlign: 'center', backgroundColor: '#f8f9fa', padding: '40px' }}>
      <Row>
        <Col>
          <Image src={notFoundImage} alt="Not Found" fluid style={{ maxHeight: '300px', marginBottom: '20px' }} />
          <h1 style={{ color: '#dc3545' }}>404 - Not Found</h1>
          <p style={{ color: '#6c757d' }}>Oops! The page you are looking for does not exist.</p>
          <NavLink to="/">
            <Button variant="primary">Go to Home</Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
