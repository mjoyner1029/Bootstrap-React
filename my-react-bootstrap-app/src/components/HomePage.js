// src/components/HomePage.js
import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <Container fluid style={{ backgroundColor: '#f8f9fa', padding: '20px', border: '1px solid #dee2e6', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Row className="text-center">
        <Col>
          <Image 
            src="https://t3.ftcdn.net/jpg/05/23/04/00/240_F_523040057_JYMTxoQGquklUthNLLjspI7ldR1hrFlH.jpg" 
            alt="Welcome" 
            fluid 
            rounded 
          />
          <h1 style={{ color: '#343a40' }}>Welcome to Our Shop!</h1>
          <Button variant="primary" size="lg" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)', margin: '10px 0' }}>
            Shop Now
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card style={{ margin: '10px', border: '1px solid #dee2e6', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Card.Body>
              <Card.Title>Air Jordan 1s</Card.Title>
              <Card.Text>
                Iconic basketball sneakers known for their high-top silhouette and bold colorways, combining style and performance.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ margin: '10px', border: '1px solid #dee2e6', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Card.Body>
              <Card.Title>Adidas Sambas</Card.Title>
              <Card.Text>
                Classic soccer-inspired sneakers featuring a sleek design and leather upper, perfect for casual wear and street style.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ margin: '10px', border: '1px solid #dee2e6', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Card.Body>
              <Card.Title>Converse All-Stars</Card.Title>
              <Card.Text>
                Timeless canvas sneakers with a distinctive star logo, versatile for casual outings and a symbol of youth culture.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
