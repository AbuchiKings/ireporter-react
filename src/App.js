import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';


function App(props) {
  //const { pathname } = props.location;
  useEffect(() => {
    console.log('App component was loaded');
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/auth" component={AuthPage} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default withRouter(App);
