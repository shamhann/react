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


    const handleDelete = (ind) => {
        const filtered = newNames.filter(function(item,index){
            if(ind === index){
                return false
            }
        return true
    })
        setNames(filtered)
    }

    const newNames = names.map(function (item,index){
        return <li key={index} onClick={(() => {handleDelete(index)} ) }>{item}</li>
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