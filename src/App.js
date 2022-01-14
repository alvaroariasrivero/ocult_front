import React, {useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
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
            'question': element.question,
            'answers': [
              element.correct_answer,
              element.incorrect_answer[0],
              element.incorrect_answer[1],
              element.incorrect_answer[2]
            ]
          };
        })
        setQuestions(questionsArray)
      } catch (error){
        console.log('error', error);
      }
    };
    fetchQuestion();
  })
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
