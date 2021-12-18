import React from 'react';
import './App.css';

const App = () => {
  debugger
  return (
    <div>
      <AppTitle />
      <Rating />
      <Accordion />
    </div>
  );
}

function AppTitle() {
  return <>This is App component</>
}

function Rating() {
  debugger
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Star() {
  return (
    <div>
      Star
    </div>
  );
}

function Accordion () {
  debugger
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
}
export default App;

function AccordionTitle() {
  return <h3>Menu</h3>
}

function AccordionBody() {
  return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>        
      </ul>
  );
}