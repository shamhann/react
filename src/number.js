import React from 'react';

function Number(props) {
    return (
        <div className='number'>
            {props.counter}
        </div>
    );
}

export default Number;