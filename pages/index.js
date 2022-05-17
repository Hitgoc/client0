import Head from "next/head";
import HomePage from "../src/Screens/Homepage";
import styles from "../styles/Home.module.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
