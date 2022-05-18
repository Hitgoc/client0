import Head from "next/head";
import Homepage from "../src/Screens/Homepage";
import styles from "../styles/Home.module.css";
import AboutPage from "../src/Screens/AboutPage";
import ContactUs from "../src/components/ContactUs";
import Products from "../src/Screens/ProductsPage/Products";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pandit Babu lal sharma perfume</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Pandit Babu Lal Sharma Perfumers" />
        <meta
          name="keywords"
          content="perfumes, attar, ittar, deo, kannauj perfumes, perfume, kannauj attar, pblsp, pbls, pandit babu lal sharma perfumers"
        />
        <meta name="author" content="Pandit Babu Lal Sharma" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      <Products />
      <AboutPage />
      <ContactUs />
    </div>
  );
}
