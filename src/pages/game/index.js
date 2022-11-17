import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import QuestionCard from "../../components/QuestionCard";

const API_URL = " https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {
    const [loading, setLoading] = useState(true);
    const [questions, setQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const[ result, setResult ] = useState(0);
    console.log(questions);
    useEffect(() => {
        fetch(API_URL)
            .then(respose => respose.json())
            .then(data => setQuestions(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className="container">
            <section className="section">
                <nav class="breadcrumb" aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li class="is-active">
                            <Link to="/game">Juego</Link>
                        </li>
                    </ul>
                </nav>
                {
                    loading && (
                        <div> Cargando...</div>
                    )
                }
                {
                    !loading && (
                        <form>
                            {
                                questions.map((question) => {
                                    return < QuestionCard preguntaActual={question} 
                                    selectedAnswers={selectedAnswers}
                                    setSelectedAnswers={setSelectedAnswers}/>
                                })
                            }
                        </form>
                    )
                }
                <div className="level.right">
                    {/* <button className="button is-primary level-item">Validar!</button> */}
                <Button disabled={true} onClick={() => console.log('Hola')} text="Validar">     </Button>
                </div>
                <h1>El Juego</h1>
            </section>
        </div>
    );
}

export default Game;
