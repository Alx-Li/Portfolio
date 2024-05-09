import styles from "./page.module.scss";
import LogoCanvas from "../components/Logo/LogoCanvas"
export default function Home() {
  return (
    <main className={styles.main}>
      <LogoCanvas/>
    </main>
  );
}
