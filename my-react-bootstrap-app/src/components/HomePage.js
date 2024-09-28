import React from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import welcomeImage from '../assets/welcome-image.jpg';

const HomePage = () => {
  return (
    <Container fluid style={{ padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Row className="text-center">
        <Col>
          <Image 
            src={welcomeImage} 
            alt="Welcome" 
            fluid 
            rounded 
            style={{ maxHeight: '300px', marginBottom: '20px' }} 
          />
          <h1 style={{ color: '#343a40' }}>Welcome to Our Shop!</h1>
          <Button variant="primary" size="lg" style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)', margin: '10px 0' }}>
            Shop Now
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        {["Air Jordan 1s", "Adidas Sambas", "Converse All-Stars"].map((title, index) => (
          <Col md={4} key={index}>
            <Card style={{ margin: '10px', border: '1px solid #dee2e6', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {title === "Air Jordan 1s" && "Iconic basketball sneakers known for their high-top silhouette and bold colorways."}
                  {title === "Adidas Sambas" && "Classic soccer-inspired sneakers featuring a sleek design."}
                  {title === "Converse All-Stars" && "Timeless canvas sneakers with a distinctive star logo."}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
