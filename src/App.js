import React, { Fragment } from 'react';
import { useLocation } from "react-router-dom";
// Components
import Nav from './components/layout/nav';
import Content from './components/layout/content';

function App() {
  let location = useLocation();
  return (
    <Fragment>
      <Nav location={location}/>
      <Content/>
    </Fragment>
  );
}
export default App;