import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Nav from './components/layout/nav';
import Content from './components/layout/content';

function App() {
  return (
    <Router>
      <Nav />
      <Content/>
    </Router>
  );
}
export default App;