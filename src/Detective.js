import React, {useState} from 'react';

function Detective(props) {
    const [sherlock , setSherlock] = useState('психопат');

    const handleClick = () => {
        return  setSherlock('высокоактивный социопат')
    }
    return (
        <div>
            <div>шерлок - {sherlock} </div>
            <button onClick={handleClick}>Узнать правду</button>
        </div>

    );
}

export default Detective;