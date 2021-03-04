import React, {useState} from 'react';
import { PersonContext } from './AppContextState';

const App = () => {
    const [person, setPerson] = useState();
    console.log("person context:", PersonContext);
    
    return(<h1>Hello, WEBPT24!</h1>);
};

export default App;