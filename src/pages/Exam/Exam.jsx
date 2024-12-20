import "./Exam.css";
import Result from "../../Components/Result";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const Exam = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const questionsJSON = "http://localhost:3000/0";


  useEffect(() => {
    axios(questionsJSON)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error("You have error brother:", error));
  }, []);

  const selectAnswer = (index) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion.options[selectedAnswer] === currentQuestion.answer) {
        setScore(score + 1);
      }

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        setIsQuizCompleted(true);
      }
    } else {
      notify();
    }
  };

  const notify = () => toast("Answer the question.");

  return (
    <main className="max-w-full h-full flex items-center justify-center bg-white">
      <div className="w-full h-[90.2vh] flex items-center justify-center flex-col">
        <div>
          <ToastContainer
            className="toastify"
            progressClassName="toast-progress-blue"
            position="top-left"
            style={{
              fontSize: "12px",
              padding: "10px",
              width: "200px",
              height: "20px",
            }}
          />
        </div>
        <div className="question w-full flex items-center justify-center flex-col gap-6 mb-5 px-4">
          {!isQuizCompleted ? (
            questions.length > 0 ? (
              <>
                {/* Question Container */}
                <div className="question-container w-full max-w-[480px] sm:w-[90%] sm:h-[350px] md:max-w-[480px] md:max-h-[140px] sm:max-h-[140px] flex items-center justify-center bg-[rgb(66,66,66)] text-white text-lg rounded-lg p-4">
                  <h1 className="font-semibold text-center">{questions[currentQuestionIndex].question}</h1>
                </div>
                {/* Answers */}
                <div className="answers flex items-center justify-center flex-col gap-5 text-black w-full">
                  {questions[currentQuestionIndex].options.map((answer, index) => (
                    <div
                      key={index}
                      className={`answer-container w-full max-w-[480px] flex items-center p-4 rounded-sm border-2
                  ${selectedAnswer === index
                          ? "bg-cyan-600 border-cyan-600 text-white"
                          : "bg-white border-[rgb(66,66,66)] text-black"
                        } cursor-pointer transition-all duration-300`}
                      onClick={() => selectAnswer(index)}
                    >
                      <span className="answer-text flex-1 font-medium">{answer}</span>
                    </div>
                  ))}
                </div>
                {/* Next Button */}
                <div
                  className="next w-full max-w-[480px] p-3 rounded-lg text-white bg-cyan-600 flex items-center justify-center mt-5 text-lg cursor-pointer sm:w-[90%] md:max-w-[480px]"
                  onClick={handleNextQuestion}
                >
                  Next
                </div>
              </>
            ) : (
              <p className="text-white text-2xl text-center">
                If you see this text, activate the JSON server <br /> Write the code to terminal: json-server --watch questions.json.
              </p>
            )
          ) : (
            <Result score={score} totalQuestions={questions.length} />
          )}
        </div>
      </div>
    </main>

  );
};

export default Exam;
