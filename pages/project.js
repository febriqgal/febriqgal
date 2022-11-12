import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function project() {
  return (
    <div className={`${styles.bgg} m-auto`}>
      <Head>
        <title>Febriqgal Purnama</title>
        <meta name="description" content="Febriqgal" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className="bg-white text-black py-2 px-4 rounded-lg">
          COMING SOON!
        </h1>
      </main>
    </div>
  );
}
