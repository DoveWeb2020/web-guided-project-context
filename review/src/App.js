import React, {useState} from 'react';
import { PersonContext } from './AppContextState';
import Hello from './Hello';

const App = () => {
    const [person, setPerson] = useState("Joshhhhh");
    console.log("person context:", PersonContext);
    
    return (<PersonContext.Provider value={[person, setPerson]} >
        <Hello/>
    </PersonContext.Provider>);
};

export default App;