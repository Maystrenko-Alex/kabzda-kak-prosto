import { useState } from "@storybook/addons";
import { Story } from "@storybook/react";
import React, { ChangeEvent } from "react";

export default {
  title: 'input',
  argTypes: {
    onChange: { action: "want to change" }
  }
}

export const UncontrolledInput = () => <input />;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState('')
  return (
    <>
      <input onChange={(e) => setValue(e.currentTarget.value)} />
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
      <input ref={inputRef} />
      <button onClick={getValueInput}>get value:</button>
      {value}
    </>
  )
}

export const ControlledInputWithFixedValues = () => <input readOnly value={'controlled'} />;

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');
  return <input value={parentValue} onChange={(e) => setParentValue(e.currentTarget.value)} />
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState<boolean>(true);
  const getChecked = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
  return <input type={'checkbox'} checked={parentValue} onChange={getChecked} />
}

export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>('0')
  const getValue = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)
  return (
    <select value={value} onChange={getValue}>
      <option>None</option>
      <option value={'1'}>Minsk</option>
      <option value={'2'}>Moscow</option>
      <option value={'3'}>Kiev</option>
    </select>
  )
}