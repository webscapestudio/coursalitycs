import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta property="og:url" content="https://www.coursalytics.com" />
        <meta property="og:title" content="coursalytics title" />
        <meta property="og:description" content="coursalytics description" />
        <meta property="og:image" content="/img/rocketgirl.png" />
        <meta property="og:site_name" content="coursalytics" />
        <meta name="twitter:card" content="coursalytics" />
        <meta name="twitter:site" content="@site" />
        <meta name="twitter:creator" content="@handle" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
