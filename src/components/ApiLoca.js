import React, { useState, useEffect } from "react";
import "./ApiLoca.css";

const ApiLoca = () => {
  const [fact, setFact] = useState(null);
  const [catImage, setCatImage] = useState(null);
  const [triviaPool, setTriviaPool] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isFactLoading, setIsFactLoading] = useState(true);
  const [isCatLoading, setIsCatLoading] = useState(true);
  const [isAnswered, setIsAnswered] = useState(false);

  const decodeHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Buscar dato random
  useEffect(() => {
    const fetchFact = async () => {
      setIsFactLoading(true);
      const response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random"
      );
      const data = await response.json();
      setFact(decodeHtml(data.text));
      setIsFactLoading(false);
    };
    fetchFact();
  }, []);

  // Buscar imagen random de gato
  useEffect(() => {
    const fetchCatImage = async () => {
      setIsCatLoading(true);
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      setCatImage(data[0]?.url);
      setIsCatLoading(false);
    };
    fetchCatImage();
  }, []);

  // Buscar preguntas de trivia
  useEffect(() => {
    const fetchTriviaPool = async () => {
      const response = await fetch("https://opentdb.com/api.php?amount=50&category=9&difficulty=easy");
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const pool = data.results.map((question) => ({
          question: decodeHtml(question.question),
          correct: decodeHtml(question.correct_answer),
          incorrect: question.incorrect_answers.map(decodeHtml),
        }));
        setTriviaPool(pool);
      } else {
        console.error("Límite de consultas alcanzado.");
      }
    };
    fetchTriviaPool();
  }, []);

  // Manejar respuesta usuario
  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    setIsAnswered(true);
  };

  // Siguiente pregunta en la trivia
  const handleNextQuestion = () => {
    if (currentQuestionIndex < triviaPool.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setIsAnswered(false);
    } else {
      alert("Terminaste con todas las preguntas! Recarga :)");
    }
  };

  return (
    <div className="api-loca__container">
      {/* Sección 1 */}
      <div className="api-loca__fact-card">
        <h2>Dato random</h2>
        {isFactLoading ? (
          <div className="api-loca__loading">Cargando...</div>
        ) : (
          <div>
            <p>{fact}</p>
          </div>
        )}
        <button
          className="api-loca__btn"
          onClick={() => {
            setIsFactLoading(true);
            fetch(
              "https://uselessfacts.jsph.pl/api/v2/facts/random"
            )
              .then((res) => res.json())
              .then((data) => {
                setFact(decodeHtml(data.text));
                setIsFactLoading(false);
              });
          }}
        >
          Nuevo dato
        </button>
      </div>

      {/* Sección 2 */}
      <div className="api-loca__cat-card">
        <h2>Gato random</h2>
        {isCatLoading ? (
          <div className="api-loca__loading">Cargando gato...</div>
        ) : (
          <img src={catImage} alt="Random Cat" className="api-loca__cat-img" />
        )}
        <button
          className="api-loca__btn"
          onClick={() => {
            setIsCatLoading(true);
            fetch("https://api.thecatapi.com/v1/images/search")
              .then((res) => res.json())
              .then((data) => {
                setCatImage(data[0]?.url);
                setIsCatLoading(false);
              });
          }}
        >
          Nuevo gato
        </button>
      </div>

      {/* Sección 3 */}
      <div className="api-loca__trivia-card">
        <h2>Trivia</h2>
        {triviaPool.length === 0 ? (
          <div className="api-loca__loading">Cargando Trivia...</div>
        ) : (
          <div>
            <p>{triviaPool[currentQuestionIndex]?.question}</p>
            <div className="api-loca__answers">
              {[...triviaPool[currentQuestionIndex]?.incorrect, triviaPool[currentQuestionIndex]?.correct]
                .sort()
                .map((answer, index) => (
                  <button
                    key={index}
                    className="api-loca__btn"
                    onClick={() => handleAnswer(answer)}
                    disabled={isAnswered}
                  >
                    {answer}
                  </button>
                ))}
            </div>
            {isAnswered && (
              <p>
                {userAnswer === triviaPool[currentQuestionIndex]?.correct
                  ? "Correcto!"
                  : `Incorrecto! La respuesta era: ${triviaPool[currentQuestionIndex]?.correct}`}
              </p>
            )}
            {isAnswered && (
              <button className="api-loca__btn" onClick={handleNextQuestion}>
                Siguiente
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiLoca;
