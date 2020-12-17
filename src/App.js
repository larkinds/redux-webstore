import React from 'react';
import './App.css';
import ProductsSection from './components/ProductsSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ProtestStore</h1>
        <h4>Where Protestors Get Their Streetwear</h4>
        <h5>Coming Soon</h5>
      </header>
      <ProductsSection />
    </div>
  );
}

export default App;
