import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledAccrodion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating, RatingType } from './components/Rating/Rating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';

const App = () => {
  const [on, setOn] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [value, setValue] = useState<RatingType>(0);
  return (
    <div className='App'>
      {/* <OnOff  on={on} callBack={setOn} />  */}
      <UncontrolledOnOff callBack={setOn}/>
      {on.toString()}
      <Accordion title={'Menu'} collapsed={collapsed} callBack={setCollapsed}/>
      <UncontrolledAccrodion title={'UNMenu'} />
      <Rating value={value} callBack={setValue}/>
      <UncontrolledRating />

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
