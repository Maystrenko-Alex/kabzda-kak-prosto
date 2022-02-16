import React, { useState } from "react";
import { ItemsType } from "../../App";
import s from './Select.module.css'

type SelectPropsType = {
  items: ItemsType
}

export const Select = (props: SelectPropsType) => {
    
  const [active, setActive] = useState<boolean>(false);
  const [defualtValue, setDefaultValue] = useState<string>('1');
  const styleSelect = {
    border: active ? '' : '2px solid black'
  }
 
  
  const defaultItems = props.items.map(i => i.value === defualtValue ? i.title : '');
  const selectItems = props.items.map(i => {
    return ( 
      <div key={i.value} 
      onClick={()=>setNewDefaultValue(i.value )}
      >
        {i.title}
      </div>
    )
  }
)
  const setNewDefaultValue = (value: string) => {
    setDefaultValue(value);
    setActive(false)
  }
  return (
    <div className={s.wrapper}>
      <div 
      style={styleSelect}
        className={s.default}  onClick={()=>setActive(!active)}>
        {defaultItems}
      </div>
      <div className={ active ? s.selectItems : s.unvisible}>
        {selectItems}
      </div>
    </div>
  );
}