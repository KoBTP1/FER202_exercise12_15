import React, { useReducer } from "react";
import { Container, Button } from "react-bootstrap";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

function Counter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <Container className="mt-4">
      <h3>Count: {count}</h3>
      <Button className="me-2" onClick={() => dispatch({ type: "INCREMENT" })}>
        +
      </Button>
      <Button className="me-2" onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </Button>
      <Button variant="danger" onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </Button>
    </Container>
  );
}

export default Counter;
