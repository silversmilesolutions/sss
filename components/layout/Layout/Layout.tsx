import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Main } from "./Layout.style";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
