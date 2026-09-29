import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ValidatedInput({
  validationFunction = (val) => val.length >= 5,
  errorMessage = "Input phải có ít nhất 5 ký tự!",
}) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  return (
    <Container className="mt-4" style={{ maxWidth: "400px" }}>
      <input
        type="text"
        value={value}
        placeholder="Nhập ít nhất 5 ký tự..."
        onChange={(e) => setValue(e.target.value)}
        className={`form-control ${isValid ? "" : "is-invalid error"}`}
      />
      {!isValid && (
        <p className="text-danger mt-1 error-message">{errorMessage}</p>
      )}
    </Container>
  );
}

export default ValidatedInput;
