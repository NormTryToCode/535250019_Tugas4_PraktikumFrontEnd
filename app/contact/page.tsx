"use client";

import { useState } from "react";
import type { SyntheticEvent } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the page from reloading
    // There's no any backend in this project, so this is dummy 
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Questions or ready to book? Send us a message."
      />

      <Container className="py-5">
        <Row className="g-5">
          {/* Contact form */}
          <Col md={7}>
            {submitted && (
              <Alert variant="success" dismissible onClose={() => setSubmitted(false)}>
                Thanks! We received your message.
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="you@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="How can we help?" required />
              </Form.Group>
              <Button type="submit" className="btn-paw">
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Contact info */}
          <Col md={5}>
            <h2 className="h4 fw-bold">Visit Us</h2>
            <p className="mb-1">📍 Jl. Vila Permata Blok EB 8 No. 9, Kabupaten Tangerang, Banten, Indonesia</p>
            <p className="mb-1">📞 +62 859 6649 5103</p>
            <p className="mb-4">✉️ hello@pawpals.example</p>

            <h2 className="h4 fw-bold">Opening Hours</h2>
            <p className="mb-1">Mon – Fri: 8:00 – 18:00</p>
            <p className="mb-1">Saturday: 9:00 – 16:00</p>
            <p className="mb-0">Sunday: Closed</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
