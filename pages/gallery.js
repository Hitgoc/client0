import Head from "next/head";
import GalleryPage from "../src/Screens/GalleryPage";

import styles from "../styles/Home.module.css";

export default function gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gallery</title>
      </Head>
      <GalleryPage />
    </div>
  );
}
