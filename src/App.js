import React, { useEffect } from "react";
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';
import Navbar from './components/Header';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Profile from './pages/Profile';


function App(props) {
  const { pathname } = props.location;
  const paths = pathname.split('/')
  const otherpages = !paths.includes('auth') && <Navbar pathname={pathname} />;
  const footer = !paths.includes('auth') && <Footer />;
  useEffect(() => {
    AOS.init();
    //AOS.refresh();
  }, []);
  return (
    <>
      {otherpages}
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
      {footer}
    </>
  );
}

export default withRouter(App);
