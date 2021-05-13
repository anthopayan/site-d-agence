import React, { createContext, useContext, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import { Navbar } from './components/Navbar/Navbar';
import  './css/style.css';
import About from './pages/About/index';
import Works from './pages/Works/index';
import StudyCase from './pages/StudyCase/index';




const THEMES = {
  dark: {

    background: '#000',
    color: "#FFF"
  },
  light: {

  },
}

const ThemeContexte = createContext(THEMES.light)



function ThemeApp ({children}) {
  const value = useContext(ThemeContexte)
return (
  <div className="entire-page" style={value}>{children}</div>
)
}




const App = () => {
  
  const [theme, setTheme]= useState('light')
  const [, setThemes] = React.useState("")

 
  

  const handleSave = () => {
  localStorage.setItem("titlev", theme);
  setThemes(localStorage.getItem("titlev", theme));
}


  const toggleTheme = function () {
    setTheme(t => t === 'light' ? 'dark' : 'light')
    handleSave();
    
  }

  const usertheme = (localStorage.getItem("titlev"));
  const currentTheme = usertheme === 'light' ? THEMES.light : THEMES.dark
  
  return (

<ThemeContexte.Provider value={currentTheme}>
<ThemeApp>
    <Router>
      <Navbar />
      <button onClick={toggleTheme}>Changer le theme</button>
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works" exact>
            <Works />
          </Route>
          <Route path="/works/:nameSlug">
            <StudyCase />
          </Route>
        </Switch>
      </main>
    </Router>
</ThemeApp>
</ThemeContexte.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));