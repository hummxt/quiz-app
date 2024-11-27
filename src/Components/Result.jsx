
const Result = ({ score, totalQuestions }) => {

    function gradeSystem() {
        const percentage = (score / totalQuestions) * 100;

        if (percentage >= 90) {
            return "Əla!";
        } else if (percentage >= 70) {
            return "Yaxşı";
        } else if (percentage >= 50) {
            return "Pis deyil";
        } else {
            return "Canın sağ olsun";
        }
    }

        const grade = gradeSystem();

        return (
            <>
                <div className="score-container text-[rgb(33,33,33)] text-center flex items-center justify-center flex-col gap-10 mb-10">
                    <h1 className="text-2xl font-semibold">Quiz bitdi !</h1>
                    <p className="text-xl font-medium">
                        Doğru cavab sayısı : {score} / {totalQuestions}
                    </p>
                    <p className="text-xl font-medium">Nəticə : {grade}</p>
                </div>
            </>
        );
    };

    export default Result;
