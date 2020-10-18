import React from 'react'

export default function Todolist({list,deleteItem}) {
    return (
        <div>
            <ul>
                {list.map((item) => {
                    return(
                    <li key={item.id}>
                        {item.value}
                        <button onClick={()=>deleteItem(item.id)}>X</button>
                    </li>
                    );
                })}
            </ul>
        </div>
    )
}
