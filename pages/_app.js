import "../node_modules/normalize.css/normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.scss";

import CookieConsent from "react-cookie-consent";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { LinkedInInsightTag } from "nextjs-linkedin-insight-tag";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("438489346669536");
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-EGJFK0CGJ5"
      />

      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EGJFK0CGJ5');
          `}
      </Script>
      <LinkedInInsightTag />
      <Component {...pageProps} />
      <CookieConsent
        buttonText="Accept"
        cookieName="accept__cookies"
        style={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          color: "#000",
          margin: 0,
        }}
        containerClasses="cookies"
        buttonClasses="cookies__btn"
        expires={150}
      >
        <p>
          By clicking “Accept All Cookies”, you agree to the storing of cookies
          on your device to enhance site navigation, analyze site usage, and
          assist in our marketing efforts.
        </p>
      </CookieConsent>
    </>
  );
}

export default App;
