import React from 'react';

import './NewPlace.css';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';

const NewPlace = () => {
  return (
    <form action='' className='place-form'>
      <Input
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please Enter a Valid Title'
        element='input'
      />
    </form>
  );
};

export default NewPlace;
