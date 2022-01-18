import React, { useContext, useState } from "react";
import {questionContext} from '../../context/questionContext';

const Card = ({question}) => {

  const {handleNextQuestion, showScore, questions, setShowButton, showButton, disabled, setDisabled, twoItemsList, threeItemsList, positive, setPositive} = useContext(questionContext)
  const {question_text, answers, affirmative_message, negative_message} = question;
  const[score, setScore] = useState(0);

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

  const renderNextButton = () => {
    if(showButton){
      if(positive){
        return <div>
                <p>Respuesta correcta:</p>
                <p>{affirmative_message}</p>
                <button onClick={handleNextQuestion}>Siguiente pregunta</button>
              </div>
      }else{
        return <div>
                <p>Respuesta incorrecta:</p>
                <p>{negative_message}</p>
                <button onClick={handleNextQuestion}>Siguiente pregunta</button>
              </div>
      }
    }
  }

  if(showScore){return <div>Has obtenido {score}/{questions.length}</div>}
  if(answers.length === 3){
    return <div>
          <p>{question_text}</p>
          <button onClick={() => selectAnswer(answers[threeItemsList[0]].iscorrect)}>{answers[threeItemsList[0]].answer_text}</button>
          <button onClick={() => selectAnswer(answers[threeItemsList[1]].iscorrect)}>{answers[threeItemsList[1]].answer_text}</button>
          <button onClick={() => selectAnswer(answers[threeItemsList[2]].iscorrect)}>{answers[threeItemsList[2]].answer_text}</button>
          {renderNextButton()}
          </div>
  }else{
    return <div>
          <p>{question_text}</p>
          <button onClick={() => selectAnswer(answers[twoItemsList[0]].iscorrect)}>{answers[twoItemsList[0]].answer_text}</button>
          <button onClick={() => selectAnswer(answers[twoItemsList[1]].iscorrect)}>{answers[twoItemsList[1]].answer_text}</button>
          {renderNextButton()}
          </div>
  };
};

export default Card;
