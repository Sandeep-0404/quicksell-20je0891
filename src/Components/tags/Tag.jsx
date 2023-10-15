import React from 'react'
import './tag.css'
import { BiSolidCircle } from "react-icons/bi";
import { AntennaBars5 } from 'tabler-icons-react';

const Tag = (props) => {
  return (
    <div className='tag'>
        <AntennaBars5 size={17}/>
        <p>{props.text}</p>
    </div>
  )
}

export default Tag