import React, { useReducer } from "react";
import { Container, Button, Card, ListGroup } from "react-bootstrap";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_OPTION":
      return {
        ...state,
        selectedOption: action.payload,
      };
    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      const nextQuestionIndex = state.currentQuestion + 1;

      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion:
          nextQuestionIndex < state.questions.length
            ? nextQuestionIndex
            : state.currentQuestion,
        showScore: nextQuestionIndex >= state.questions.length,
        selectedOption: "",
      };
    case "RESTART_QUIZ":
      return initialState;
    default:
      return state;
  }
};

function QuestionBank() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
  };

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
      {state.showScore ? (
        <Card className="text-center p-5 shadow-sm">
          <h4>
            Your Score: {state.score} / {state.questions.length}
          </h4>
          <Button onClick={handleRestartQuiz} className="mt-3 w-50 mx-auto">
            Restart Quiz
          </Button>
        </Card>
      ) : (
        <Card className="p-4 shadow-sm">
          <Card.Title className="mb-3">
            Question {state.currentQuestion + 1} / {state.questions.length}
          </Card.Title>
          <Card.Text className="fs-5 mb-4">
            {state.questions[state.currentQuestion].question}
          </Card.Text>

          <ListGroup className="mb-4">
            {state.questions[state.currentQuestion].options.map(
              (option, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  active={state.selectedOption === option}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </ListGroup.Item>
              ),
            )}
          </ListGroup>

          <Button
            variant="primary"
            onClick={handleNextQuestion}
            disabled={!state.selectedOption}
          >
            {state.currentQuestion === state.questions.length - 1
              ? "Finish"
              : "Next Question"}
          </Button>
        </Card>
      )}
    </Container>
  );
}

export default QuestionBank;
