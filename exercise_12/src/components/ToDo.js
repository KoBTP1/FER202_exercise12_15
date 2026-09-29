import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ToDo() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([
    "Học lập trình .NET",
    "Học lập trình Java",
  ]);

  const handleAdd = () => {
    if (text.trim() === "") return;
    setTodo([...todo, text]);
    setText("");
  };

  const handleDelete = (indexToDelete) => {
    const newTodo = todo.filter((_, index) => index !== indexToDelete);
    setTodo(newTodo);
  };

  return (
    <div className="">
      <Container className="d-flex justify-content-around align-items-start">
        <div className="d-flex gap-3">
          <input
            type="text"
            className="form-control"
            style={{ width: "300px" }}
            value={text}
            placeholder="Please input a Task"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn btn-danger px-4 text-nowrap"
            onClick={handleAdd}
          >
            Add Todo
          </button>
        </div>

        <div className="bg-light p-4 rounded-3" style={{ minWidth: "350px" }}>
          <h5 className="text-center fw-bold mb-3 text-dark">Todo List</h5>
          <ul className="list-unstyled mb-0">
            {todo.map((item, index) => (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center bg-white p-2 px-3 mb-2 rounded border"
              >
                <span className="text-dark">{item}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default ToDo;
