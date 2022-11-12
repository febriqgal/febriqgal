import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Febriqgal from "../public/febriqgal.jpg";
import Pattern from "../public/topography.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Febriqgal Purnama</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className={`${styles.main} ${styles.bgg}`}>
        <div className="bg-slate-50 text-slate-700 shadow-md py-5 px-10 justify-center items-center flex flex-col rounded-lg">
          <div className="h-[200px] w-[200px] rounded-full overflow-clip">
            <Image
              className="hover:scale-105 duration-1000"
              src={Febriqgal}
              alt={"Feriqgal"}
            />
          </div>
          <h1 className="text-lg lg:text-2xl uppercase text-center font-bold my-4 hover:underline hover:cursor-pointer">
            Febriqgal Purnama
          </h1>
          <button className="hover:bg-slate-700 hover:text-white w-full py-2 rounded-lg">
            <a href={"https://www.instagram.com/febriqgal_"} target={"#"}>
              Instagram
            </a>
          </button>
          <button className="hover:bg-slate-700 hover:text-white w-full py-2 rounded-lg">
            <a href={"https://twitter.com/febriqgal_"} target={"#"}>
              Twitter
            </a>
          </button>
          <button className="hover:bg-slate-700 hover:text-white w-full py-2 rounded-lg">
            <a href={"https://www.linkedin.com/in/febriqgal/"} target={"#"}>
              LinkedIn
            </a>
          </button>
          <button className="hover:bg-slate-700 hover:text-white w-full py-2 rounded-lg">
            <a href={"https://www.instagram.com/febproject_/"} target={"#"}>
              Project
            </a>
          </button>
        </div>
      </main>
    </>
  );
}
