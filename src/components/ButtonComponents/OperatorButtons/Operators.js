import React, {useState} from "react";

import OperatorsButton from './OperatorButton';

import { operators } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {

  const [operatorsState, setOperatorsState] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      
       {operatorsState.map((operator, index) => (
         <OperatorsButton operator={operator} key={index} />
       ))}
    </div>
  );
};

export default Operators;