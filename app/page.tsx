"use client";

import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";
import styles from "./page.module.css";

const features = [
  { icon: "💛", title: "Gentle Care", text: "Every pet is handled with patience and lots of treats." },
  { icon: "🧼", title: "Pet-Safe Products", text: "We only use mild, pet-friendly shampoos and tools." },
  { icon: "📅", title: "Easy Booking", text: "Pick a service, send us a message, and we handle the rest." },
];

export default function HomePage() {
  // Show only the first 3 services on the home page.
  const featuredServices = services.slice(0, 3);

  return (
    <>
      {/* Hero section */}
      <section className={styles.hero}>
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1 className={styles.title}>
                Happy pets, <span className={styles.highlight}>happy people.</span>
              </h1>
              <p className="lead my-4">
                PawPals offers friendly grooming, day care and wellness services
                for dogs and cats of every size.
              </p>
              <Link href="/catalog" className="btn btn-paw btn-lg me-2">
                View Services
              </Link>
              <Link href="/contact" className="btn btn-outline-dark btn-lg">
                Contact Us
              </Link>
            </Col>
            <Col md={5} className={`${styles.emoji} d-none d-md-block`}>
              🐶🐱
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">Why PawPals?</h2>
          <Row className="g-4">
            {features.map((feature) => (
              <Col md={4} key={feature.title}>
                <Card className="h-100 text-center border-0 bg-light">
                  <Card.Body>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured services */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-4">Popular Services</h2>
          <Row className="g-4">
            {featuredServices.map((service) => (
              <Col md={4} key={service.id}>
                <ServiceCard service={service} />
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <Link href="/catalog" className="btn btn-outline-dark">
              See all services
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
