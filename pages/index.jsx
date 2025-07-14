import styles from "../styles/Home.module.css";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        HOME
      </h1>
      <ol>
        <li>
          Get started by editing <code>pages/index.jsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </MainLayout>
  );
}
