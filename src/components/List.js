import React from 'react'
import {IoClose} from "react-icons/io5"

const List = ({items, setItems, deleteItem}) => {
  console.log(items.type);
  return (
     
    <>
        <article >
          <ul className='bg-gray-700 mx-5 p-5 rounded-lg mt-10 sm:max-w-xl sm:mx-auto'>
            {items.map(({id, title}) => (
            <ul className='flex items-center justify-between border-b border-gray-600'>
              <li className='todo-list text-white py-3 tracking-wider' key={id} >{title}</li>
              <button className='text-xl' onClick={()=>deleteItem(id)} ><IoClose className='text-red-400' /></button>
            </ul>
            ))}
            <ul className='flex items-center justify-between px-5 py-3'>
              <li className='text-sm text-gray-400'>
                Total todos: {items.length} 
              </li>
              <li className='text-sm text-gray-400'>
                <button onClick={() => setItems([])}>Clear All</button>
              </li>
            </ul>
          </ul>
          
        </article>
    </>
  )
}

export default List;
