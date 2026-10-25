"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./AppNavbar.module.css";

// To add a new page to the menu, add one more line here.
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/catalog", label: "Catalog" },
  { href: "/contact", label: "Contact" },
];

export default function AppNavbar() {
  // Tells us which page we are on, so we can highlight its menu item.
  const pathname = usePathname();

  return (
    <Navbar expand="md" sticky="top" bg="white" collapseOnSelect className={styles.navbar}>
      <Container>
        <Navbar.Brand as={Link} href="/" className={styles.brand}>
          🐾 PawPals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {links.map((link) => (
              <Nav.Link
                key={link.href}
                as={Link}
                href={link.href}
                active={pathname === link.href}
                className={pathname === link.href ? styles.active : ""}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
