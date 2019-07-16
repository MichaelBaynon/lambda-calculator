import React, {useState} from "react";

import NumberButton from './NumberButton';

 import { numbers } from '../../../data';


//import any components needed

//Import your array data to from the provided data file



const Numbers = () => {

  const [numbersState, setNumbersState] = useState(numbers);
  
  console.log('numbers', {numbersState})
  // STEP 2 - add the imported data to state
  return (
    <div>
      
       {numbersState.map((number, index) => (
         <NumberButton number={number} key={index} />
       ))}
    </div>
  );
};

export default Numbers;
