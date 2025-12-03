import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsGallery from './components/GoodsGallery';

function App() {
  const [activeTask, setActiveTask] = useState('task1');

  return (
    <div className="App">
      <div className="nav-buttons">
        <button onClick={() => setActiveTask('task1')}>Завдання 1 (Біографія)</button>
        <button onClick={() => setActiveTask('task2')}>Завдання 2 (Магазин)</button>
      </div>
      
      {activeTask === 'task1' && (
        <div className="task-container">
          <Header />
          <Content />
          <Image />
        </div>
      )}

      {activeTask === 'task2' && (
        <div className="task-container">
          <GoodsGallery />
        </div>
      )}
    </div>
  );
}

export default App;