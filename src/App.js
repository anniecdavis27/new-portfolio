import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import Works from './Components/Works/Works'
import Bio from './Components/Bio/Bio'
import Resume from './Components/Resume/Resume'
import Contact from './Components/Contact/Contact'
import { useTheme } from './Components/ThemeContext';
import { createGlobalStyle } from "styled-components"
import { backgroundColor, textColor } from './Components/theme';

export const GlobalStyles = createGlobalStyle`
  html {
    background: ${backgroundColor};
    color: ${textColor};
  }`

function App(props) {
  console.log('App - props', props)

  const themeToggle = useTheme();
  
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Switch>
      <Route exact path='/' render={routerProps => <Home {...routerProps} themeToggle={themeToggle} />} />
      <Route path='/works' component={Works}/>
      <Route path='/bio' component={Bio}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
