import React, { useContext, useState } from "react";
import {questionContext} from '../../context/questionContext';
import { useNavigate } from "react-router-dom";
import AuthService from '../../services/authservice';
import './Card.css';

const Card = ({question}) => {

  const {handleNextQuestion, showScore, questions, setShowButton, showButton, disabled, setDisabled, twoItemsList, threeItemsList, positive, setPositive} = useContext(questionContext)
  const {question_text, answers, affirmative_message, negative_message} = question;
  const[score, setScore] = useState(0);

  const currentUser = AuthService.getCurrentUser();
  const userEmail = currentUser.userData.email;
  console.log('Esto es userEmail', userEmail);

  let navigate = useNavigate();

  const selectAnswer = (iscorrect) => {
    if(!disabled){
      setDisabled(true)
      if(iscorrect === true){
        setScore(score + 1);
        setPositive(true)
      }
    }
    setShowButton(true)
  }



  const sendScore = async (score, userEmail) => {
    try {
      let req = {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          score,
          userEmail
        })
      }
      await fetch ('http://localhost:5000/api/score', req);
      navigate('/profile');
    } catch (error) {
      console.log('error', error);
    } 
  }

  console.log('Esto', userEmail, score)

  const renderNextButton = () => {
    if(showButton){
      if(positive){
        return <div className="feedbackText">
                <div className="answerResult">
                <p>Respuesta correcta:</p>
                </div>
                <div className="mesgTxt">
                <p>{affirmative_message}</p>
                <button className="btnQuiz nxt" onClick={handleNextQuestion}>Siguiente</button>
                </div>
              </div>
      }else{
        return <div className="feedbackText">
                <div className="answerResult">
                <p>Respuesta incorrecta:</p>
                </div>
                <div className="mesgTxt">
                <p>{negative_message}</p>
                <button className="btnQuiz nxt" onClick={handleNextQuestion}>Siguiente</button>
                </div>
              </div>
      }
    }
  }

  if(showScore){
    if(score < questions.length/2){
      return <div>
              <h3>Test terminado.</h3>
              <div>
                <p>Resultado</p>
                <p>No apto</p>
              </div>
              <div>
                <p>Puntuación</p>
                <p>{score}/{questions.length}</p>
              </div>
              <div>
                <h5>Enlaces de interés:</h5>
                <a href="https://ciberprotector.com/comprobador-de-contrase%C3%B1as/" target="_blank">Ciberprotector - Comprobador de contraseñas</a>
                <a href="https://www.virustotal.com/gui/home/upload" target="_blank">Virus total - Analizador de archivos</a>
                <a href="https://transparencyreport.google.com/safe-browsing/search?hl=es" target="_blank">Google - Estado del sitio según Navegación segura</a>
              </div>
              <div>
                <button className="btnQuiz" onClick={()=>sendScore(score, userEmail)}>Enviar puntuación</button>
              </div>
            </div>
      }else{
        return <div>
              <h3>Test terminado.</h3>
              <div>
                <p>Resultado</p>
                <p>Apto</p>
              </div>
              <div>
                <p>Puntuación</p>
                <p>{score}/{questions.length}</p>
              </div>
              <div>
                <h5>Enlaces de interés:</h5>
                <a href="https://ciberprotector.com/comprobador-de-contrase%C3%B1as/">Ciberprotector - Comprobador de contraseñas</a>
                <a href="https://www.virustotal.com/gui/home/upload">Virus total - Analizador de archivos</a>
                <a href="https://transparencyreport.google.com/safe-browsing/search?hl=es">Google - Estado del sitio según Navegación segura</a>
              </div>
              <div>
                <button className="btnQuiz" onClick={()=> sendScore(score, userEmail)}>Enviar puntuación</button>
                <button>Obtener certificado</button>
              </div>
            </div>
      }
    }
  if(answers.length === 3){
    return <div className="question">
          <div>
          <p className="questionText">{question_text}</p>
          <div className="btnContaier">
          <button className="btnQuiz" onClick={() => selectAnswer(answers[threeItemsList[0]].iscorrect)}>{answers[threeItemsList[0]].answer_text}</button>
          <button className="btnQuiz" onClick={() => selectAnswer(answers[threeItemsList[1]].iscorrect)}>{answers[threeItemsList[1]].answer_text}</button>
          <button className="btnQuiz" onClick={() => selectAnswer(answers[threeItemsList[2]].iscorrect)}>{answers[threeItemsList[2]].answer_text}</button>
          </div>
          </div>
          <div>
          {renderNextButton()}
          </div>
          </div>
  }else{
    return <div className="question">
          <div>
          <p className="questionText">{question_text}</p>
          <div className="btnContaier">
          <button className="btnQuiz" onClick={() => selectAnswer(answers[twoItemsList[0]].iscorrect)}>{answers[twoItemsList[0]].answer_text}</button>
          <button className="btnQuiz" onClick={() => selectAnswer(answers[twoItemsList[1]].iscorrect)}>{answers[twoItemsList[1]].answer_text}</button>
          </div>
          </div>
          <div>
          {renderNextButton()}
          </div>
          </div>
  };
};

export default Card;
