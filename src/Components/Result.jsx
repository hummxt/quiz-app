
const Result = ({ score, totalQuestions }) => {

    function gradeSystem() {
        const percentage = (score / totalQuestions) * 100;

        if (percentage >= 90) {
            return "Perfect!";
        } else if (percentage >= 70) {
            return "Good";
        } else if (percentage >= 50) {
            return "Not bad";
        } else {
            return "U r so bad.";
        }
    }

        const grade = gradeSystem();

        return (
            <>
                <div className="score-container text-[rgb(33,33,33)] text-center flex items-center justify-center flex-col gap-10 mb-10">
                    <h1 className="text-2xl font-semibold">Quiz finished!</h1>
                    <p className="text-xl font-medium">
                        Correct answers : {score} / {totalQuestions}
                    </p>
                    <p className="text-xl font-medium">Result : {grade}</p>
                </div>
            </>
        );
    };

    export default Result;
