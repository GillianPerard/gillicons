import React from 'react';
import * as gillicons from 'gillicons';
import Gillicon from 'react-gillicons';

import './App.css';

function App() {

    const icons = Object.values(gillicons).map(icon => (
        <Gillicon
            className="icon"
            icon={icon}
            key={icon.name}
            onClick={() => console.log(icon.name)}
            style={{fontSize: '40px'}} />
    ));

    return (
        <>
            {icons}
        </>
    );
}

export default App;
