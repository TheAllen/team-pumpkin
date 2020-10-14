import { MuiThemeProvider } from '@material-ui/core';
import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { LoadingScreen } from './components';
import { SignUpScreen } from './LazyComponents';
import LandingPage from './pages/Landing';
import Login from './pages/Login/Login';
import { theme } from './themes/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/sign-up' component={SignUpScreen} />
          <Route exact path='/login' component={Login} />
        </Suspense>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;