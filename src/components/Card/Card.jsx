import React from "react";

const Card = ({question}) => {
  const {question_text, answers} = question;
  return <>
          <p>{question_text}</p>
          <p>{answers[0]}</p>
          <p>{answers[1]}</p>
          <p>{answers[2]}</p>
          <p>{answers[3]}</p>
          </>;
};

export default Card;
