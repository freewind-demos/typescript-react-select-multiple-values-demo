//import * as React from 'react'
import React, {useState} from 'react'
import Select from 'react-select';
import {ValueType, OptionsType} from "react-select/lib/types";

type OptionType = {
  value: string,
  label: string
}

const options: OptionsType<OptionType> = [
  {value: '111', label: 'Chocolate'},
  {value: '222', label: 'Strawberry'},
  {value: '333', label: 'Vanilla'},
];

export default function Hello() {
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(null)

  return <div>
    <h1>Hello React Select</h1>
    <Select value={selectedOption} onChange={setSelectedOption} options={options} isMulti/>
    <div>{JSON.stringify(selectedOption)}</div>
  </div>
};
