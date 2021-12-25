import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';

import { Rating } from './components/Rating/Rating';

const App = () => {
  return (
    <div>
      <OnOff />
      <OnOff />
      <OnOff />
      

      <PageTitle title={"This is App component"} />
      <Rating value={3} />
      <Accordion title={"Title_1"} collapsed={false} />
      <Accordion title={"Title_2"} collapsed={true} />
      <PageTitle title={"My frends"} />
      <Rating value={4} />
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
