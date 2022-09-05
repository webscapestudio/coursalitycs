import "../node_modules/normalize.css/normalize.css"
import "swiper/css"
import "swiper/css/navigation"
import "../styles/globals.scss"
import { wrapper } from "../src/store/store"

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }) => {
      try {
      } catch (err) {
        console.log(err)
        return {
          props: {},
        }
      }

      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps({ ...ctx, store })
          : {},
      }
    }
)

export default wrapper.withRedux(App)
