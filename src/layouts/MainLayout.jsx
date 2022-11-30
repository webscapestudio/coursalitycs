import { Footer, Header } from "../components";
import { ModalWrapper } from "../components/Modals/Modal";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
