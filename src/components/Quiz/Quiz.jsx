import React, { useContext } from "react";
import {questionContext} from '../../context/questionContext';
import Card from '../Card';

const Quiz = () => {

  const {questions} = useContext(questionContext);

  const paintCards = () => {
    return questions.map((item, i) => <Card question={item} key={i}/> )
  }
  return <div>{paintCards()}</div>;
};

export default Quiz;
