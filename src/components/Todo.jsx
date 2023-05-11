import React from 'react'
export const Todo = ({task, deleteTodo, editTodo}) => {

  const pickBusiness = document.getElementById("pick__category__business");
  const pickPersonal = document.getElementById("pick__category__personal");

  let itemClass = 'task__item__text';

  if (pickBusiness.checked) {
    // соответствующий цвет задачи
    itemClass += ' task__list__item--business';
  } else if (pickPersonal.checked) {
    itemClass += ' task__list__item--personal';
  }
  return (
    <div className="Todo task__list__item">
        <p className={itemClass} id="item__text__id">{task.task}</p>
        <div className="task__buttons">
        <button className="task__button__edit" onClick={() => editTodo(task.id)}>Edit</button>
        <button className="task__button__remove" onClick={() => deleteTodo(task.id)}>Remove</button>
        </div>
    </div>
  )
}
