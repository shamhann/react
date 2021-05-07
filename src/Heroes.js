import React, {useState} from 'react';

function Heroes(props) {

    const[names ,setNames] = useState(
        [
            "Шерлок Холмс",
            "Доктор Ватсон",
            "Профессор Мориарти",
            "Миссис Хадсон",
            "Ирен Адлер"
        ]
    )
    const newNames = names.map(function (item,index){
        return <li key={index}>{item}</li>
    })


    return (
        <div>
            <ul>
                {newNames}
            </ul>
        </div>
    );
}

export default Heroes;