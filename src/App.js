import React, { useEffect } from 'react';
import Home from './pages/Home';
import GameInfo from './components/GameInfo'
import GlobalStyles from './components/GlobalStyles';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Navbar />
      <Route path={['/game/:id', "/"]}> 
      <Home />
      </Route>
    </div>
  )
}

export default App;