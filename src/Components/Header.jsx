import { Link } from "react-router-dom"
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className="container max-w-full h-auto flex items-center justify-center">
      <header className="w-[100vw] h-10 p-10 bg-[rgb(33,33,33)] flex items-center justify-between">
        <Link to="/" className="text-white text-2xl">Quiz App</Link>
        <Link to="/login"><FaRegUser className="text-white text-2xl lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"/></Link>
      </header>
    </div>
    </>
  )
}

export default Header