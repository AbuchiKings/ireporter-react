import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import Navbar from './components/Header';
import Footer from './components/Footer';


function App(props) {
  const { pathname } = props.location;
  const paths = pathname.split('/')
  console.log(paths)
  const otherpages = !paths.includes('auth') && <Navbar pathname={pathname} />;
  const footer = !paths.includes('auth') && <Footer />;
  return (
    <>
      {otherpages}
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/" component={Home} />
      </Switch>
      {footer}
    </>
  );
}

export default withRouter(App);
