import React from "react";

export type MyButtonPropsType = {
  title: string,
  color: string,
  onClick: ()=> void
  
}
export const MyButton = (props: MyButtonPropsType) => {
  return (
    <button
      style={{backgroundColor: props.color}}
      onClick={props.onClick}>
      --{ props.title}--
      </button>
  )
}