"use client";

import Link from "next/link";
import { Badge, Card } from "react-bootstrap";
import type { Service } from "@/data/services";
import { formatPrice } from "@/utils/formatPrice";
import styles from "./ServiceCard.module.css";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className={`h-100 ${styles.card}`}>
      <Card.Body className="text-center">
        <div className={styles.icon}>{service.icon}</div>
        <Badge bg="secondary" className="mb-2">
          {service.category}
        </Badge>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
        <p className={styles.price}>From Rp {formatPrice(service.priceFrom)}</p>
        <Link
          href={`/catalog/${service.id}`}
          className="btn btn-paw btn-sm mt-3"
        >
          View details
        </Link>
      </Card.Body>
    </Card>
  );
}
