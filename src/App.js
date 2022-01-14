import React, {useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import {questionContext} from './context/questionContext';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from 'axios';
import './App.css';

function App() {

  const[questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const res = await axios.get('https://opentdb.com/api.php?amount=10&category=11&type=multiple');
        const json = res.data;
        const array = json.results
        const questionsArray = array.map(element => {
          return{
            'question_text': element.question,
            'answers': [
              element.correct_answer,
              element.incorrect_answers[0],
              element.incorrect_answers[1],
              element.incorrect_answers[2]
            ]
          };
        })
        setQuestions(questionsArray)
      } catch (error){
        console.log('error', error);
      }
    };
    fetchQuestion();
  }, [])

  const queObj = {
    questions
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <questionContext.Provider value={queObj}>
          <Main/>
        </questionContext.Provider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
