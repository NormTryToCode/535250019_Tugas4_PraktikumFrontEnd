import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

// The orange title banner used at the top of About, Catalog and Contact.
export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <div className="container text-center">
        <h1 className="fw-bold">{title}</h1>
        <p className="lead mb-0">{subtitle}</p>
      </div>
    </section>
  );
}
