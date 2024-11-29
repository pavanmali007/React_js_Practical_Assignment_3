import React from 'react'

function TaskItem(props){
  return (
    <>
    <div className="taskItem">
      <div className="taskCircle completedCircle"></div>
      <div className="taskText">{props.todo}</div>
      <div className="taskCross" onClick={()=>{props.onDelete(props.todo)}}></div>
    </div>
    </>
  )
}

TaskItem.propTypes = {}

export default TaskItem
