import "@/styles/globals.css";
import Layout from "@/components/layout.js"
import { Helmet } from "react-helmet";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <Component {...pageProps} />
    </Layout>
  )
}
