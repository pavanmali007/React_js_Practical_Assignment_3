import React from 'react'
import PropTypes from 'prop-types'
import SearchT from './SearchT'
import SearchPlate from './SearchPlate'
import LogoDiv from './LogoDiv'

function Header(props) {
  const addTodo = (title) => {
  const myTodo = {
    title: title,
    completed: false,
  };
  props.setTodos([...props.todos, myTodo]);
};

  return (
    <>
    <div className="header">
        <LogoDiv brandChar="T" brandText="Task" />
        <SearchPlate addTodo={()=>addTodo} placeHolder="add tasks" name="search" id="search" />
        <SearchT list="Add" />  
    </div>
    </>
  )
}

Header.propTypes = {}

export default Header
