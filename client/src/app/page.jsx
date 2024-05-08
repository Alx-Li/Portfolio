import styles from "./page.module.scss";
import Logo from "../_components/Logo"
export default function Home() {
  return (
    <main className={styles.main}>
      <Logo/>
    </main>
  );
}
