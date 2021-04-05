import React, { useEffect } from 'react';
import Home from './pages/Home';
import AllStyles from './components/AllStyles';
import { Route } from 'react-router-dom';
import GameInfo from './components/GameInfo'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <AllStyles/>
      <Navbar />
      <Route path={['/game/:id', "/"]}> 
      <Home />
      </Route>
    </div>
  )
}

export default App;