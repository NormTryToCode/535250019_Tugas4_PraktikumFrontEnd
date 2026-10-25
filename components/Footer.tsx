import styles from "./Footer.module.css";

// No react-bootstrap here, so this is a normal (server) component.
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center">
        <p className="mb-1">🐾 PawPals: Happy pets, happy people.</p>
        <small>© 2026 PawPals. All rights reserved.</small>
        <br />
        <small>
          <a href="https://www.flaticon.com/free-icons/paw"
            title="paw icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Paw icons created by fancykeith - Flaticon
          </a>
        </small>
      </div>
    </footer>
  );
}
