import { Container, Row, Col } from "react-bootstrap";
import { CartProvider } from "./components/CartContext";
import DishesList from "./components/DishesList";
import Cart from "./components/Cart";
import Theme, { ThemeProvider } from "./components/Theme";
function App() {
  return (
    <Container className="py-4">
      <ThemeProvider>
        <Theme />
      </ThemeProvider>

      <CartProvider>
        <Row className="mt-3">
          <Col md={8}>
            <DishesList />
          </Col>
          <Col md={4}>
            <Cart />
          </Col>
        </Row>
      </CartProvider>
    </Container>
  );
}

export default App;
