import Header from "../components/Header"
import Head from "next/head"
import Footer from "@/components/Footer"
import { Fragment } from "react"


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Cummings-Breitenberg LLC</title>
        <meta name="description" content="Cummings-Breitenberg LLC preview app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       <Header/>
       <div className="container centered">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nam
          excepturi amet numquam, nihil minima earum id nesciunt placeat beatae
          a repellendus in vel quidem omnis, dolor esse, error dolores.
        </p>
      </div>
      </main>
      <Footer/>
    </Fragment>
  )
}
