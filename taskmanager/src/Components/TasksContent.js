import React from 'react'
import PropTypes from 'prop-types'
import TaskItem from './TaskItem'

function TasksContent(props) {
  return (
    <>
    <div className="taskCont content">
        <div className="lable">tasks</div>
        <div className="tasksList">
          {props.todos===0? "no tasks to display" : props.todos.map((todo)=>{
            return <TaskItem onDelete={props.onDelete} key={todo.sno} todo={todo} />
            })
          }
        </div>
      </div>
    </>
  )
}

TasksContent.propTypes = {}

export default TasksContent
