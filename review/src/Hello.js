import React, { useContext } from 'react';
import { PersonContext } from './AppContextState';

const Hello = () => {
  const value = useContext(PersonContext);
  console.log("Value fetched from context:", value);
  return (
    <h1>Hello, {value}</h1>
  );
};

export default Hello;