import React, { useContext } from 'react';
import RecipeList from './components/recipeList';
import {RecipeContext} from './context/index';
import './App.css';

function App(){
  const appContext = useContext(RecipeContext);
  const { loading, search } = appContext;
  return(
      <div className="App">
        { loading ? <h1> ... fetching {search} recipes </h1> :
            <RecipeList /> }
      </div>
  );
}

export default App;