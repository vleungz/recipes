import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RecipeProvider} from './context/index';

ReactDOM.render(
    <RecipeProvider>
        <App />
    </RecipeProvider>,
  document.getElementById('root')
);