import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledAccrodion } from './components/UncontrolledAccordion/UncontrolledAccordion';
import { OnOff } from './components/OnOff/OnOff';
import { Rating, RatingType } from './components/Rating/Rating';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';
import { UncontrolledRating } from './components/UncontrolledRating/UncontrolledRating';
import { MyButton } from './components/Button/MyButton';
import { Select } from './components/Select/Select';

export type ItemType = {
  title: string,
  value: string
}
export type ItemsType = Array<ItemType>
const App = () => {
  const [on, setOn] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [value, setValue] = useState<RatingType>(0);

  const items: ItemsType = [
    {title: 'Dimich', value: '1'},
    {title: 'Valera', value: '2'},
    {title: 'Artem', value: '3'},
    {title: 'Viktor', value: '4'}
  ]
  return (
    <div className='App'>
      {/* <OnOff  on={on} callBack={setOn} />  */}
      <UncontrolledOnOff onChange={setOn} defaultOn/>
      {on.toString()}
      <Accordion 
        title={'Menu'} 
        collapsed={collapsed} 
        onClick={setCollapsed} 
        onChange={()=>alert('click item')}
        items={items} 
        color={'red'}/>
      <UncontrolledAccrodion title={'UNMenu!'} />
      <Rating value={value} callBack={setValue}/>
      <UncontrolledRating />
      {/* <MyButton title={'button'} color={'green'} onClick={()=>alert('clickfalse')}/> */}
      <Select  items={items} />
      text
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
