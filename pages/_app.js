import "../node_modules/normalize.css/normalize.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/globals.scss";

import { wrapper } from "../src/store/store";
import CookieConsent from "react-cookie-consent";

function App({ Component, pageProps }) {
  return (
    <>
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
