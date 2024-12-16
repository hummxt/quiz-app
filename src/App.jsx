import "./index.css"
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Result from "./Components/Result";
import Exam from "./pages/Exam/Exam";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (

  <>
    <Header />
    <Routes>
      <Route path="/" element={<Exam />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin$$$" element={<Admin />}></Route>
    </Routes>
  </>
  )
}

export default App;