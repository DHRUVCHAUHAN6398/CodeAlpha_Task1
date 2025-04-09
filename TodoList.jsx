import React from 'react'

export default function TodoList(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

