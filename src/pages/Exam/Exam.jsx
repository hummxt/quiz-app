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
    const preventRightClick = (e) => {
      e.preventDefault();
    };

    document.addEventListener("contextmenu", preventRightClick);

    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'F12') {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const checkDevTools = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (width <= 800 && height <= 600) {
        alert('Developer tools are disabled.');
      }
    };

    const interval = setInterval(checkDevTools, 1000);

    return () => clearInterval(interval);
  }, []);

  if (typeof console !== "undefined") {
    console.log = function () {};
    console.warn = function () {};
    console.error = function () {};
    console.info = function () {};
  }
  
  useEffect(() => {
    axios(questionsJSON)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error("Xeta var qardas:", error));
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

  const notify = () => toast("Sualı cavablayın.");

  return (
    <main className="max-w-full max-h-screen flex items-center justify-center bg-white">
      <div className="max-w-full h-[90.2vh] flex items-center justify-center flex-col">
        <div>
          <ToastContainer className="toastify" progressClassName="toast-progress-blue" />
        </div>
        <div className="question w-[100%] h-[450px] flex items-center justify-center flex-col gap-6 mb-5">
          {!isQuizCompleted ? (
            questions.length > 0 ? (
              <>
                <div className="question-container w-[480px] h-[400px] flex items-center justify-center bg-[rgb(66,66,66)] text-white text-lg rounded-lg p-4">
                  <h1 className="font-semibold">{questions[currentQuestionIndex].question}</h1>
                </div>
                <div className="answers flex items-center justify-center flex-col gap-5 text-black">
                  {questions[currentQuestionIndex].options.map((answer, index) => (
                    <div
                      key={index}
                      className={`answer-container w-[480px] flex items-center p-4 rounded-sm border-2
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
                <div
                  className="next w-[360px] p-3 rounded-lg text-white bg-cyan-600  flex items-center justify-center mt-5 text-lg cursor-pointer"
                  onClick={handleNextQuestion}
                >
                  Next
                </div>
              </>
            ) : (
              <p className="text-white text-2xl">JSON-Server aktiv edin.</p>
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
