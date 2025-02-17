import styles from "./page.module.css";
import Header from "@/components/Header/Header"
import MainContainer from "@/components/MainContainer/MainContainer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <MainContainer />
    </div>
  );
}
