import React, {useState} from 'react';
import Number from "./number";
import Buttons from "./buttons";
import Hr from "./Hr";

function MainContent(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div className='mainContent'>
            <Hr/>
            <Number  counter={counter}/>
            <Buttons counter={counter} setCounter={setCounter}/>
        </div>
    );
}

export default MainContent;