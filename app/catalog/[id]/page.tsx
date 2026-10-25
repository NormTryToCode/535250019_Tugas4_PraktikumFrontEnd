"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Badge, Container } from "react-bootstrap";
import { services } from "@/data/services";

export default function ServiceDetailPage() {
  // For the URL /catalog/3, params.id is the text "3"
  const params = useParams<{ id: string }>();

  // The URL gives text, but our ids are numbers, so convert with Number() function
  const service = services.find((item) => item.id === Number(params.id));

  // Handles bad URLs like /catalog/999
  if (!service) {
    return (
      <Container className="py-5 text-center">
        <h1 className="fw-bold">Service not found</h1>
        <p>That service does not exist.</p>
        <Link href="/catalog" className="btn btn-paw">
          Back to Catalog
        </Link>
      </Container>
    );
  }

  return (
    <Container className="py-5 text-center">
      <div style={{ fontSize: "5rem" }}>{service.icon}</div>
      <Badge bg="secondary" className="mb-2">
        {service.category}
      </Badge>
      <h1 className="fw-bold">{service.name}</h1>
      <p className="lead">{service.description}</p>
      <p className="fs-4 fw-bold">From Rp {service.priceFrom}</p>
      <Link href="/contact" className="btn btn-paw me-2">
        Book this service
      </Link>
      <Link href="/catalog" className="btn btn-outline-dark">
        Back to Catalog
      </Link>
    </Container>
  );
}
