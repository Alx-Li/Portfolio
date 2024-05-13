import styles from "./page.module.scss";

import dynamic from "next/dynamic";

const LogoScene = dynamic(() => import("@/components/Logo/Scene.jsx"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <LogoScene />
    </main>
  );
}
