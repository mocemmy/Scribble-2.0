import './App.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { Route, Switch } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {dispatch(authenticate()).then(() => setIsLoaded(true))},[dispatch]);

  return (
    <>
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <h1>Hello World</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
