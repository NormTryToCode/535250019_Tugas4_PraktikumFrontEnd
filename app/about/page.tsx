"use client";

import { Card, Col, Container, Row } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";

const values = [
  { icon: "🐾", title: "Pets First", text: "Comfort and safety always come before speed." },
  { icon: "🤝", title: "Honest Service", text: "Clear prices and no surprise fees." },
  { icon: "🌱", title: "Eco-Friendly", text: "Biodegradable products wherever we can." },
];

const stats = [
  { number: "5+", label: "Years of experience" },
  { number: "3,000+", label: "Happy pets" },
  { number: "12", label: "Friendly staff" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About PawPals"
        subtitle="A small team with a big love for animals."
      />

      {/* Our story */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center g-4">
            <Col md={6}>
              <h2 className="fw-bold">Our Story</h2>
              <p>
                PawPals started as a tiny home grooming service run by two
                friends who couldn&apos;t say no to a wagging tail. Today we are
                a full pet care studio offering grooming, day care and wellness
                checks.
              </p>
              <p>
                Our mission is simple: make every visit calm, clean and fun for
                pets, and stress-free for their owners.
              </p>
            </Col>
            <Col md={6} className="text-center" style={{ fontSize: "6rem" }}>
              🐕‍🦺🐈
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-4 bg-light">
        <Container>
          <Row className="text-center g-3">
            {stats.map((stat) => (
              <Col xs={12} md={4} key={stat.label}>
                <div className="fs-2 fw-bold">{stat.number}</div>
                <div>{stat.label}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-4">What We Believe</h2>
          <Row className="g-4">
            {values.map((value) => (
              <Col md={4} key={value.title}>
                <Card className="h-100 text-center border-0 shadow-sm">
                  <Card.Body>
                    <div style={{ fontSize: "2.5rem" }}>{value.icon}</div>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
