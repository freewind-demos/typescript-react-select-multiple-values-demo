//import * as React from 'react'
import React, {useState} from 'react'
import Select from 'react-select';
import {ValueType, OptionsType} from "react-select/lib/types";

type OptionType = {
  value: string,
  label: string
}

const options: OptionsType<OptionType> = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanillas1', label: 'Vanilla'},
  {value: 'vanillas2', label: 'Vanilla'},
  {value: 'vanillas3', label: 'Vanilla'},
  {value: 'vanillas4', label: 'Vanilla'},
  {value: 'vanillas5', label: 'Vanilla'},
  {value: 'vanillas6', label: 'Vanilla'},
  {value: 'vanillas7', label: 'Vanilla'},
  {value: 'vanillas8', label: 'Vanilla'},
  {value: 'vanillas9', label: 'Vanilla'},
  {value: 'vanillas0', label: 'Vanilla'},
  {value: 'vanillasd1', label: 'Vanilla'},
  {value: 'vanillasd2', label: 'Vanilla'},
  {value: 'vanillasd3', label: 'Vanilla'},
  {value: 'vanillasd4', label: 'Vanilla'},
  {value: 'vanillasd5', label: 'Vanilla'},
  {value: 'vanillasd6', label: 'Vanilla'},
  {value: 'vanillasd7', label: 'Vanilla'},
  {value: 'vanillasd8', label: 'Vanilla'},
  {value: 'vanillasd9', label: 'Vanilla'},
  {value: 'vanillasd0', label: 'Vanilla'},
  {value: 'vanillasf1', label: 'Vanilla'},
  {value: 'vanillasf2', label: 'Vanilla'},
  {value: 'vanillasf3', label: 'Vanilla'},
  {value: 'vanillasf4', label: 'Vanilla'},
  {value: 'vanillasf5', label: 'Vanilla'},
  {value: 'vanillasf6', label: 'Vanilla'},
  {value: 'vanillasf7', label: 'Vanilla'},
  {value: 'vanillasf8', label: 'Vanilla'},
  {value: 'vanillasf9', label: 'Vanilla'},
  {value: 'vanillasf0', label: 'Vanilla'},
  {value: 'vanillasf34', label: 'Vanilla'},
  {value: 'vanillasf4334', label: 'Vanilla'},
  {value: 'vanilla0', label: 'Vanilla'},
  {value: 'vanilla9', label: 'Vanilla'},
  {value: 'vanilla8', label: 'Vanilla'},
  {value: 'vanilla7', label: 'Vanilla'},
  {value: 'vanilla6', label: 'Vanilla'},
  {value: 'vanilla5', label: 'Vanilla'},
  {value: 'vanilla4', label: 'Vanilla'},
  {value: 'vanilla3', label: 'Vanilla'},
  {value: 'vanilla2', label: 'Vanilla'},
  {value: 'vanilla1', label: 'Vanilla'},
];

export default function Hello() {
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(null)

  return <div>
    <h1>Hello React Select</h1>
    <Select value={selectedOption} onChange={setSelectedOption} options={options}/>
  </div>
};
