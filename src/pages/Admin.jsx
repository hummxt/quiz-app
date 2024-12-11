
const Admin = () => {

  return (
    <>
      <div className="container flex items-center justify-center min-w-full min-h-full">
        <div className="admin flex items-center justify-center flex-col">
          <div className="text p-4 flex items-center justify-center flex-col mt-10">
            <h1 className="text-2xl">Admin Panel</h1>
            <p className="text-xl">You can add and delete questions by using this panel.</p>
          </div>
          <div className="add-question w-[480px] h-[530px] flex items-center justify-center bg-[rgb(66,66,66)] text-white text-lg rounded-lg p-4 mt-10">
            <form className="flex items-center justify-center flex-col gap-6" >
              <div className="question mb-12 mt-4 flex items-center justify-center flex-col gap-4">
                <h1 className="text-xl font-medium">Add the question</h1>
                <input
                  type="text"
                  placeholder="Add your question"
                  className="font-md text-md text-black p-1 rounded-sm border-2 hover:-translate-y-1 transition duration-400"
                  required
                />
              </div>
              <div className="question-container flex items-center justify-center flex-col gap-4">
                <input
                  type="text"
                  placeholder="Add correct answer"
                  className="font-md text-md text-white placeholder-white p-1 rounded-sm border-2 bg-cyan-900 outline-none hover:-translate-y-1 transition duration-400"
                />
                <input
                  type="text"
                  placeholder="Option 1"
                  className="font-md text-md text-white placeholder-white p-1 rounded-sm border-2 bg-red-900 outline-none hover:-translate-y-1 transition duration-400"
                />
                <input
                  type="text"
                  placeholder="Option 2"
                  className="font-md text-md text-white placeholder-white p-1 rounded-sm border-2 bg-red-900 outline-none hover:-translate-y-1 transition duration-400"
                />
                <input
                  type="text"
                  placeholder="Option 3"
                  className="font-md text-md text-white placeholder-white p-1 rounded-sm border-2 bg-red-900 outline-none hover:-translate-y-1 transition duration-400"
                />
              </div>
              <div className="send mt-4">
                <button
                  type="submit"
                  className="shadow-[0_0_0_3px_#_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-semibold text-lg transform hover:-translate-y-1 transition duration-400"
                >
                  Add the question
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;