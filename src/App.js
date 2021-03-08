

import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import HomePage from "./home/home-page";
import QuizPage from "./quiz/quiz-page";
import AboutPage from "./about/about-page";
import DemosPage from "./demos/demos-page";
import PageHeader from "./common/page-header";
import PageFooter from "./common/page-footer";

  function App() {
    return (
      <BrowserRouter>
        <PageHeader />

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/quiz">
            <QuizPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/demos">
            <DemosPage />
          </Route>
        </Switch>
        <PageFooter />
      </BrowserRouter>
    );
  }



// function App() {
//     return (
//       
//     );
//   }

  export default App;