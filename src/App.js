import React from 'react';
import './App.css';
import Card from './cards'

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Kitties Kitties Kitties</h1>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
