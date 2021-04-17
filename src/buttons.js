import React from 'react';

function Buttons(props) {
    function plus(){
        const x = props.counter + 1;
        props.setCounter(x)
    }
    function minus(){
        const x = props.counter - 1;
        props.setCounter(x)
    }
    function reset(){
        props.setCounter(0)

    }
    return (
        <div className='buttons'>
            <button className='buttonBlue' onClick={plus}>Увеличить</button>
            <button className='buttonOrange' onClick={minus}>Уменьшить</button>
            <button className='buttonGray' onClick={reset}>Сбросить</button>
        </div>
    );
}

export default Buttons;