/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import "animate.css";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Febriqgal from "../public/febriqgal.jpg";
import Nextdotjs from "../public/nextdotjs.svg";
import TailwindCSS from "../public/tailwindcss.svg";
import Flutter from "../public/flutter.svg";
import HTML5 from "../public/html5.svg";
import CSS3 from "../public/css3.svg";
import Javascript from "../public/javascript.svg";
import Dart from "../public/dart.svg";
import Figma from "../public/figma.svg";
import Firebase from "../public/firebase.svg";
import MongoDB from "../public/mongodb.svg";
import Github from "../public/github.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";
import Linkedin from "../public/Linkedin.svg";
import Gmail from "../public/Gmail.svg";
import Affinitydesigner from "../public/Affinitydesigner.svg";
import Adobeillustrator from "../public/Adobeillustrator.svg";
import Windows from "../public/Windows.svg";
import linux from "../public/linux.svg";

export default function Home() {
  return (
    <div className={`${styles.bgg}`}>
      <Head>
        <title>Febriqgal Purnama</title>
        <meta name="description" content="Febriqgal" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={`${styles.main}`}>
        <div
          className={`bg-slate-50 w-[400px] text-slate-900 shadow-lg py-5 px-10 flex flex-col rounded-lg`}
        >
          <div className="flex w-full justify-center items-center mb-2 animate__animated animate__backInLeft">
            <Image
              className="duration-1000 h-[80px] w-[80px] rounded-full "
              src={Febriqgal}
              alt={"Febriqgal"}
            />
            <div className="ml-2">
              <h1 className="font-bold">Febriqgal</h1>
              <h1 className="text-justify text-xs">
                {`"Teknologi informasi tidaklah menjadikan manusia malas, justru
                membuat karya selalu berlimpah tanpa batas."`}
              </h1>
            </div>
          </div>

          <div
            className={`bg-[#DFDBE5] shadow-lg w-full pb-5 my-2 px-5 rounded-lg animate__animated animate__fadeInUp`}
          >
            <h1 className="text-center pt-5 font-semibold underline text-sm">
              My Skill
            </h1>
            <h1 className="text-center py-2 text-sm">Web App Developer</h1>
            <div className="flex justify-center gap-2 pt-1">
              <Image title={"HTML5"} src={HTML5} alt={"HTML5"} />
              <Image title={"CSS3"} src={CSS3} alt={"CSS3"} />
              <Image title={"Javascript"} src={Javascript} alt={"Javascript"} />
              <Image
                title={"TailwindCSS"}
                src={TailwindCSS}
                alt={"TailwindCSS"}
              />
              <Image title={"NextJS"} src={Nextdotjs} alt={"NextJS"} />
            </div>
            <h1 className="text-center py-2 text-sm mt-2">
              Mobile App Developer
            </h1>
            <div className="flex justify-center  gap-2 pt-1">
              <Image title={"Flutter"} src={Flutter} alt={"Flutter"} />
              <Image title={"Dart"} src={Dart} alt={"Dart"} />
            </div>
            <h1 className="text-center py-2 text-sm mt-2">UI/UX</h1>
            <div className="flex justify-center  gap-2 pt-1">
              <Image title={"Figma"} src={Figma} alt={"Figma"} />
              <Image
                title={"Adobe Illustrator"}
                src={Adobeillustrator}
                alt={"Adobe Illustrator"}
              />
              <Image
                title={"Affinity Designer"}
                src={Affinitydesigner}
                alt={"Affinity Designer"}
              />
            </div>
            <h1 className="text-center py-2 text-sm mt-2">Database</h1>
            <div className="flex justify-center gap-2 pt-1">
              <Image title={"Firebase"} src={Firebase} alt={"Firebase"} />
              <Image title={"MongoDB"} src={MongoDB} alt={"MongoDB"} />
            </div>
            <h1 className="text-center py-2 text-sm mt-2">IT Support</h1>
            <div className="flex justify-center  gap-2 pt-1">
              <Image title={"Windows"} src={Windows} alt={"Windows"} />
              <Image title={"Linux"} src={linux} alt={"Linux"} />
            </div>
            <Link target={"#"} href={"https://www.instagram.com/febproject_/"}>
              <h1 className="mx-auto w-[100px] mt-5 bg-black text-slate-50 text-center rounded-lg">
                Project
              </h1>
            </Link>
          </div>
          <div className="flex justify-center gap-4 pt-4">
            <Link target={"#"} href={"https://github.com/febriqgal"}>
              <Image
                className="h-5"
                title={"Github"}
                src={Github}
                alt={"Github"}
              />
            </Link>
            <Link target={"#"} href={"https://github.com/febriqgal"}>
              <Image
                className="h-5"
                title={"Instagram"}
                src={Instagram}
                alt={"Instagram"}
              />
            </Link>
            <Link target={"#"} href={"https://twitter.com/febriqgal_"}>
              <Image
                className="h-5"
                title={"Twitter"}
                src={Twitter}
                alt={"Twitter"}
              />
            </Link>
            <Link target={"#"} href={"https://www.linkedin.com/in/febriqgal/"}>
              <Image
                className="h-5"
                title={"Linkedin"}
                src={Linkedin}
                alt={"Linkedin"}
              />
            </Link>
            <Link to target={"#"} href={"mailto:febriqgalp@gmail.com"}>
              <Image
                className="h-5"
                title={"Gmail"}
                src={Gmail}
                alt={"Gmail"}
              />
            </Link>
          </div>
        </div>
        <footer className="text-slate-900  mt-4 text-center text-sm rounded-lg">
          <h1>© 2022, Febriqgal.</h1>
        </footer>
      </main>
    </div>
  );
}
