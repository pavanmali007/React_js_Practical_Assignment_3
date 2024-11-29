import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'

function SearchPlate(props) {
  const [title, setTitle] = useState("");

  const submit = (e) =>{
    e.preventDefault();
    if(!title){
      alert("title cannot be empty . . .");
    }
    props.addTodo(title);
  }
  return (
    <>
    <div className="searchPlate">
        <form onSubmit={submit}>
          <input type="text" className='inp' onChange={(e)=>setTitle(e.target.value)} name={props.name} id={props.id} placeholder={props.placeHolder} />
          <button className='btn' type='submit'>submit</button>
        </form>
    </div>
    </>
  )
}

SearchPlate.propTypes = {}

export default SearchPlate
