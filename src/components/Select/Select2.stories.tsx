import React, { useState } from "react";
import { Select2 } from "./Select2";

export default {
  title: 'MyComponents/Select',
  component: Select2
}

export const WithValue = () => {
  const [value, setValue] = useState<string>('1')
  return (
  <Select2
    value={value}
    items={[
      { title: 'Minsk', value: '1' },
      { title: 'Moscow', value: '2' },
      { title: 'Kiev', value: '3' }]}
    onChange={(value:string) => setValue(value)} />
  )}

export const WithoutValue = () => {
  const [value, setValue] = useState<string>('1')
  return (
  <Select2
    value={value}
    items={[
      { title: 'Minsk', value: '1' },
      { title: 'Moscow', value: '2' },
      { title: 'Kiev', value: '3' }]}
    onChange={(value:string) => setValue(value)} />
  )}