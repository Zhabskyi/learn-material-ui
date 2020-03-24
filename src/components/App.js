import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import { Header } from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={() => <div>Hello!</div>} />
          <Route exact path='/services' component={() => <div>Hello!</div>} />
          <Route exact path='/customsoftware' component={() => <div>Hello!</div>} />
          <Route exact path='/mobileapps' component={() => <div>Hello!</div>} />
          <Route exact path='/websites' component={() => <div>Hello!</div>} />
          <Route exact path='/revolution' component={() => <div>Hello!</div>} />
          <Route exact path='/about' component={() => <div>Hello!</div>} />
          <Route exact path='/estimate' component={() => <div>Hello!</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
