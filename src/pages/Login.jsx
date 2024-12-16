import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const validUsername = "admin";
  const validPassword = "admin";

  function loginValidation(e) {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      navigate("/admin$$$");
    } else {
      alert("Wrong Password");
    }
  }

  return (
    <div className="container flex items-center justify-center flex-col h-[720px] min-w-full">
      <div className="login w-[340px] md:w-[400px] h-[400px] md:h-[450px] bg-[rgb(44,44,44)] flex items-center justify-center flex-col text-white rounded-lg">
        <h1 className="mb-16 text-2xl font-medium">Login by Admin</h1>
        <form onSubmit={loginValidation}>
          <div className="login-container flex items-center justify-center flex-col">
            <input
              type="text"
              placeholder="Enter username"
              id="username"
              className="mb-4 p-2 rounded-md text-lg transform hover:-translate-y-1 transition duration-400 outline-none text-black"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              id="password"
              className="mb-10 p-2 rounded-md text-lg transform hover:-translate-y-1 transition duration-400 outline-none text-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="shadow-[0_0_0_3px_#_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-semibold text-lg transform hover:-translate-y-1 transition duration-400">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
