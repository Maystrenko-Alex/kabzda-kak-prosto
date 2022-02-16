import { useEffect } from "@storybook/addons";
import React, { useState, KeyboardEvent } from "react";
import { ItemType } from "../../App";
import s from './Select2.module.css';

type Select2PropsType = {
  value?: string
  onChange: (value: string) => void
  items: Array<ItemType>

}

export const Select2 = (props: Select2PropsType) => {
  const [active, setActive] = useState<boolean>(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
  const selectedItem = props.items.find(i => i.value === props.value);
  const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

  

  const toggleItems = () => setActive(!active);
  const onItemClick = (value: string) => {
    props.onChange(value);
    toggleItems();
  }
  const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
    useEffect(() => {
      setHoveredElementValue(props.value);
    }, [props.value])
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendetElement = e.key ==="ArrowDown" ? props.items[i+1] : props.items[i-1]
          if (pretendetElement) {
            props.onChange(pretendetElement.value);
            return;
          }
        }
      }
      props.onChange(props.items[0].value)
    }
    if (e.key === 'Enter' || e.key === 'Escape') {
      setActive(false)
    }
  }
  return (
    <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
      <div
        className={s.defaultItem}
        onClick={() => setActive(!active)}>
        {selectedItem && selectedItem.title}
      </div>
      <div className={s.items + ' ' + (active ? s.active : '')}>
        {props.items.map(i => <div
          key={i.value}
          onMouseEnter={() => setHoveredElementValue(i.value)}
          className={hoveredItem === i ? s.selected : ''}
          onClick={() => onItemClick(i.value)}>{i.title}</div>)}
      </div>
    </div>
  );
}

