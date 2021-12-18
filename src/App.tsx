import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';

const App = () => {
  return (
    <div>
      <input />
      <PageTitle title={"This is App component"} />
      <Rating value={3} />
      <Accordion title={"Title_1"}/>
      <Accordion title={"Title_2"}/>
      <PageTitle title={"My frends"} />
      <Rating value={4} />
    </div>
  );
}

function PageTitle(props: any) {
  return <div>{props.title}</div>
}

export default App;
