import React, {useState} from "react";

import SpecialButton from './SpecialButton';

import { specials } from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsState, setSpecialsState] = useState(specials);

  return (
    <div>
   
       {specialsState.map((special, index) => (
         <SpecialButton special={special} key={index} />
       ))}
    </div>
  );
};

export default Specials;