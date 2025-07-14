import styles from "../../styles/Home.module.css";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        CONTACT
      </h1>
      <ol>
        <li>
          Get started by editing <code>pages/contact/index.jsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </MainLayout>
  );
}
