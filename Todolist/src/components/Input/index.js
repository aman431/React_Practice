import React from 'react'

export default function Input({newItems,UpdateItem,addItem}) {
    return (
        <div>
            Add an Item...
            <input 
            type='text'
            placeholder="Enter the List"
            value={newItems}
            onChange={(e) => UpdateItem("newItems" , e.target.value)}
            />
            <button onClick={addItem}>Add an Item</button>
        </div>
    )
}
