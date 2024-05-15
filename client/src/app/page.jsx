import styles from "./page.module.scss";

import dynamic from "next/dynamic";
import TextScroll from '@/components/TextScroll.jsx'
const LogoScene = dynamic(() => import("@/components/Logo/Scene.jsx"), {
  ssr: false,
});

export default function Home() {

  return (
    <main className={styles.main}>
      <TextScroll />
      <LogoScene />
    </main>
  );
}
