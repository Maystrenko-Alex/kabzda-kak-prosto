import { useState } from "@storybook/addons";
import React from "react";

export default {
  title: 'input',
}

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <input onChange={(e)=>setValue(e.currentTarget.value)}/>
      value of input: '{value}'
    </>
 )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState('')
  const inputRef = React.createRef<HTMLInputElement>();
  const getValueInput = () => inputRef.current ? setValue(inputRef.current?.value) : null;
  return (
    <>
      <input ref={inputRef}/>
      <button onClick={getValueInput}>get value:</button>
      {value}
    </>
    )
}

export const ControlledInputWithFixedValues = () => <input readOnly value={'controlled'}/>;