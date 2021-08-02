import './App.css';
import Header from './components/header/Header';
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Quize from './components/quize/Quize';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Result from './components/result/Result';
function App() {
  const history = useHistory()
  const [questions, setQuestions] = useState();
  const [name, setname] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data.results)
    console.log(data.results)
    setQuestions(data.results);
  };
  useEffect(() => {
    history.push('/')
  }, [])
  return (

    <>
      <div className='app' style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home
              name={name}
              setname={setname}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path='/quize' exact>
            <Quize
              questions={questions}
              setQuestions={setQuestions}
              score={score}
              setScore={setScore}
              name={name}
            />
          </Route>

          <Route path='/result' exact>
            <Result
              score={score}
            />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
