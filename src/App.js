import React from 'react';
import './App.css';

import Header from "./components/Header";
import AppForm from "./components/AppForm";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#a85ea7" }}>
      <Header />
      <div className="container">
        <AppForm />
      </div>
    </div>
  );
}

export default App;
