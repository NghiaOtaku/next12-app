import Container from "react-bootstrap/Container";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children }) => (
  <Container>
    <header>
      <NavbarMenu />
    </header>
    <main>{children}</main>
  </Container>
);

export default Layout;
