import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Header from './Components/Header/Header'
import { useTheme } from './Components/ThemeContext';
import { createGlobalStyle } from "styled-components"
import { backgroundColor, textColor } from './Components/theme';

export const GlobalStyles = createGlobalStyle`
  html {
    background: ${backgroundColor};
    color: ${textColor};
  }`

function App() {

  const themeToggle = useTheme();
  
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Route exact path='/' render={routerProps => <Home {...routerProps} themeToggle={themeToggle} />} />
    </div>
  );
}

export default App;
