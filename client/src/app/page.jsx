import Image from "next/image";
import styles from "./page.module.scss";
import Shape from "../_components/Shape";
import Logo from "../_components/Logo"
export default function Home() {
  return (
    <main className={styles.main}>
      <Logo/>
    </main>
  );
}
