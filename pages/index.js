import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta name="twitter:card" content="app" />
        <meta name="twitter:site" content="@TwitterDev" />
        <meta
          name="twitter:description"
          content="Cannonball is the fun way to create and share stories and poems on your phone. Start with a beautiful image from the gallery, then choose words to complete the story and share it with friends."
        />
        <meta name="twitter:app:country" content="US" />
        <meta name="twitter:app:name:iphone" content="Cannonball" />
        <meta name="twitter:app:id:iphone" content="929750075" />
        <meta
          name="twitter:app:url:iphone"
          content="cannonball://poem/5149e249222f9e600a7540ef"
        />
        <meta name="twitter:app:name:ipad" content="Cannonball" />
        <meta name="twitter:app:id:ipad" content="929750075" />
        <meta
          name="twitter:app:url:ipad"
          content="cannonball://poem/5149e249222f9e600a7540ef"
        />
        <meta name="twitter:app:name:googleplay" content="Cannonball" />
        <meta
          name="twitter:app:id:googleplay"
          content="io.fabric.samples.cannonball"
        />
        <meta
          name="twitter:app:url:googleplay"
          content="http://cannonball.fabric.io/poem/5149e249222f9e600a7540ef"
        />
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
