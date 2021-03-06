import React from 'react';
import ReactDOM from 'react-dom';

import TodosProvider from './store/todos-context';
import App from './App';


ReactDOM.render(
  <TodosProvider>
    <App />
  </TodosProvider>,
  document.getElementById("root")
);