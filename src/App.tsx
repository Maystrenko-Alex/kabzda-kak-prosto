import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledAccrodion } from './components/Accordion/UncontrolledAccordion';
import { OnOff } from './components/OnOff/OnOff';

import { Rating } from './components/Rating/Rating';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

const App = () => {
  return (
    <div className='App'>
      <OnOff />
      
      <UncontrolledAccrodion title={'Title_1'} />
      <Accordion title={'Menu'} collapsed={false} />
      <UncontrolledRating />
      <Rating value={0} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <div>{props.title}</div>
}

export default App;
