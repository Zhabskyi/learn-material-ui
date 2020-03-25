import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import { Header } from '../components/ui/Header';
import { Footer } from '../components/ui/Footer';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path='/' component={() => <div>Hello!</div>} />
          <Route exact path='/services' component={() => <div>Hello!</div>} />
          <Route
            exact
            path='/customsoftware'
            component={() => <div>Hello!</div>}
          />
          <Route exact path='/mobileapps' component={() => <div>Hello!</div>} />
          <Route exact path='/websites' component={() => <div>Hello!</div>} />
          <Route exact path='/revolution' component={() => <div>Hello!</div>} />
          <Route exact path='/about' component={() => <div>Hello!</div>} />
          <Route exact path='/contact' component={() => <div>contact!</div>} />
          <Route
            exact
            path='/estimate'
            component={() => <div>Estimate!</div>}
          />
        </Switch>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
