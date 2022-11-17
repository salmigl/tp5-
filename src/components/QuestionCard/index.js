import "./index.css";
function QuestionCard({ preguntaActual, selectedAnswers, setselectedAnswers, identificador }) {
    function seleccionarRespuesta(id, valorOpcion) {
        const otrasRespuestas = selectedAnswers.filter(
            (respuesta) => respuesta.id !== identificador )
        setselectedAnswers([...selectedAnswers, { id, valorOpcion }]);
    }
    return (
        <div className="box">
            <div className="miclase">
                <span className="tag is-rounded is-info"> {preguntaActual.id}</span>
                <span>
                    <strong> {preguntaActual.question} </strong>
                </span>
                <br />
            </div>
            {preguntaActual.answers.map((opcion) => (
                <div
                    key={opcion.id}
                    onChange={() =>
                        seleccionarRespuesta(preguntaActual.id, opcion.is.correct)
                    }
                >
                    <input
                        type="radio"
                        id={`${preguntaActual.id}`}
                        name={preguntaActual.id}
                        value={opcion.answer}
                    >
                    </input>
                    <label htmlFor={`${preguntaActual.id}`}> {opcion.answer}</label>
                </div>
            ))}
            <br />
        </div>
    );
}
export default QuestionCard;
