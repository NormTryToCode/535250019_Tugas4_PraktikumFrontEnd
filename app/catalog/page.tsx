"use client";

import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { categories, services } from "@/data/services";
import type { Category } from "@/data/services";

// The selected filter is either one category or All of it.
type Filter = Category | "All";

const filters: Filter[] = ["All", ...categories];

export default function CatalogPage() {
  // useState remembers which filter button is selected.
  const [selected, setSelected] = useState<Filter>("All");

  const visibleServices =
    selected === "All"
      ? services
      : services.filter((service) => service.category === selected);

  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Everything your pet needs, in one place."
      />

      <Container className="py-5">
        {/* Filter buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selected === filter ? "dark" : "outline-dark"}
              onClick={() => setSelected(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Service cards */}
        <Row className="g-4">
          {visibleServices.map((service) => (
            <Col sm={6} lg={4} key={service.id}>
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
