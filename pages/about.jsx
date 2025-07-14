import styles from "../styles/Home.module.css";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";

export default function About() {
  return (
    <>
      <h1 className={styles.title}>ABOUT</h1>
      <ol>
        <li>
          Get started by editing <code>pages/about.jsx</code>.
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
