import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todolist';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
