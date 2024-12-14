import { useState, useEffect } from "react";

const Admin = () => {
  const questionsJSON = "http://localhost:3000/0";
  const [fetchQuestions, setfetchQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const options = [option1, option2, option3];

    const randomIndex = Math.floor(Math.random() * (options.length + 1));
    options.splice(randomIndex, 0, correctAnswer);

    const questionData = {
      question,
      options: options,
      answer: correctAnswer,
    };

    fetch(questionsJSON, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
    })
      .then((res) => res.json())
      .then(() => {
        console.log("Added succesfully");
      })
      .catch((e) => {
        console.error("Error", e);
      });
  };

  useEffect(() => {
    fetch(questionsJSON)
      .then((res) => res.json())
      .then((data) => {
        setfetchQuestions(data);
      });
  }, []);

  const deleteQuestion = (id) => {
    fetch(`${questionsJSON}/${id}`, { method: "DELETE" })
      .then(() => {
        setfetchQuestions(fetchQuestions.filter((q) => q.id !== id));
        console.log("Question deleted successfully");
      })
      .catch((error) => console.error("Error deleting question:", error));
  };

  return (
    <div className="container flex items-center justify-center min-w-full min-h-full">
      <div className="admin flex items-center justify-center flex-col min-w-full h-auto">
        <div className="text p-4 flex items-center justify-center flex-col mt-10 gap-4">
          <h1 className="text-2xl">Admin Panel</h1>
          <p className="text-xl">You can add and delete questions by using this panel.</p>
        </div>
        <div className="add-question w-[480px] h-[530px] flex items-center justify-center bg-[rgb(66,66,66)] text-white text-lg rounded-lg  mt-10">
          <form className="flex items-center justify-center flex-col gap-6" onSubmit={handleSubmit}>
            <div className="question mb-12 mt-4 flex items-center justify-center flex-col gap-4">
              <h1 className="text-xl font-medium">Add the question</h1>
              <input
                type="text"
                value={question}
                placeholder="Add your question"
                onChange={(e) => setQuestion(e.target.value)}
                className="font-md text-md outline-none text-black p-1 rounded-sm border-2 hover:-translate-y-1 transition duration-400"
                required
              />
            </div>
            <div className="question-container flex items-center justify-center flex-col gap-4">
              <input
                type="text"
                value={correctAnswer}
                placeholder="Add correct answer"
                onChange={(e) => setCorrectAnswer(e.target.value)}
                className="font-md text-md text-black p-1 rounded-sm placeholder-sky-500 outline-none hover:-translate-y-1 transition duration-400"
              />
              <input
                type="text"
                value={option1}
                placeholder="Add false answer"
                onChange={(e) => setOption1(e.target.value)}
                className="font-md text-md text-black placeholder-red-800 p-1 rounded-sm outline-none hover:-translate-y-1 transition duration-400"
              />
              <input
                type="text"
                value={option2}
                placeholder="Add false answer"
                onChange={(e) => setOption2(e.target.value)}
                className="font-md text-md text-black placeholder-red-800 p-1 rounded-sm outline-none hover:-translate-y-1 transition duration-400"
              />
              <input
                type="text"
                value={option3}
                placeholder="Add false answer"
                onChange={(e) => setOption3(e.target.value)}
                className="font-md text-md text-black placeholder-red-800 p-1 rounded-sm outline-none hover:-translate-y-1 transition duration-400"
              />
            </div>
            <div className="send mt-4">
              <button
                type="submit"
                id="send"
                className="shadow-[0_0_0_3px_#_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-semibold text-lg transform hover:-translate-y-1 transition duration-400"
              >
                Add the question
              </button>
            </div>
          </form>
        </div>
        <hr className="w-[100%] h-1 bg-gray-100 border-0 rounded my-20 dark:bg-[rgb(55,55,55)]" />
        <div className="delete flex items-center justify-center flex-col gap-12">
          <h1 className="text-2xl">Deleting questions</h1>
          <div className="questions flex items-center justify-center gap-10">
            <div className="del-question grid grid-cols-4 items-center justify-center gap-12">
              {fetchQuestions.map((questionsss) => {
                return (
                  <div key={questionsss.id} className="quest bg-[rgb(66,66,66)] w-80 h-[480px] rounded-lg flex items-center justify-center m-auto flex-col gap-6">
                    <h1 className="text-lg text-center text-white font-semibold flex items-center justify-center ">{questionsss.question}</h1>
                    <div className="options-question flex items-center justify-center flex-col gap-4">
                      {questionsss.options.map((option, index) => (
                        <p key={index} className="w-[300px] p-2 bg-white rounded-md flex items-center text-sm">{option}</p>
                      ))}
                      <button value={questionsss.id}
                        onClick={() => deleteQuestion(questionsss.id)} className="text-white p-2 rounded-md border-2 w-40 flex justify-center items-end text-center mt-4">Delete</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;