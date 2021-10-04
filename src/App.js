import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Course from './components/Course/Course';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import MyClass from './components/MyClass/MyClass';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/myclass">
            <MyClass></MyClass>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">

          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
