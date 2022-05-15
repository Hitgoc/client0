import Head from "next/head";
import Gallery from "../src/Screens/Gallery";
import styles from "../styles/Home.module.css";

export default function gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <Gallery />
    </div>
  );
}
