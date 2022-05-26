import Head from "next/head";
import Layout from "../component/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>
          TT ELD | ELD Compliance Solution | Asset Tracking | Fleet ...
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="SignIn/Logo.png" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,400,500,600,300,700,"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
      </Head>
      {/* <Editor/> */}
      {/* <Layout /> */}
    </div>
  );
}
