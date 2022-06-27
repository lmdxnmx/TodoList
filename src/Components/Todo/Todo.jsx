
import React,{useState} from 'react'
import s from './Todo.module.scss'
const Todo =({todo,removeTodo,completeTodo}) => {
  return (
        <div className={s.todo} style={{opacity:todo.complete ? 0.65 : 1}} >  
            <div className={todo.complete ? s.todo__text_strike : s.todo__text}>
                {todo.task}
            </div>
            <div className={s.todo__checkbox_container}>
           <input className={s.todo__checkbox} name="check" type="checkbox" onChange={()=>completeTodo(todo.id)}/>
            <label className={todo.complete && s.todo__checkbox_label } htmlFor="check"></label>
            </div>
            <div className={s.todo__delete} onClick={() => removeTodo(todo.id)}>
                X
            </div>
        </div>
    
  )
};

export default Todo