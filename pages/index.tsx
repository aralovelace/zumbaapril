import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Features, FeaturesWithCards, Header } from "../components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>April Smith - Zumba Instructor in Colchester</title>
        <meta name="description" content="April Smith - Zumba Instructor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-xl mx-auto">
        <Header />
        <Features />
        <FeaturesWithCards />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
