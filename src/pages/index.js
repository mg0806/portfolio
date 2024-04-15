import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";
import lightBulB from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manohar&apos;sPortfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className=" pt-0 md:pt-16 sm:pt-8">
          <div className=" flex items-center justify-between w-full lg:flex-col">
            <div className=" w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt=" Image"
                className=" w-full h-auto mt-32 lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 50vw"
              />
            </div>
            <div className=" w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Crafting Digital Experiences, One Pixel at a Time."
                className=" !text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className=" my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs">
                Using meticulous design and precise coding, we expertly shape
                digital landscapes, crafting seamless and immersive online
                experiences for every client.
              </p>
              <div className=" flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/Resume1.pdf"
                  target="blank"
                  className=" flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                   hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark dark:bg-light
                    dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className=" w-6 ml-1 " />
                </Link>
                <Link
                  href="mailto:manohargupta0806@gmail.com"
                  target="blank"
                  className=" ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <Hireme />
        <div className=" absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBulB} alt="Image" className=" w-full h-auto" />
        </div>
      </main>
    </>
  );
}
