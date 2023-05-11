import React, {useState} from 'react'
import PickCategory from './PickCategory';

export const TodoForm = ({addTodo}) => {

  const [value, setValue] = useState('');

  function checkInputAndCategory() {
    //Проверка на выбранную категорию и ввод текста
    const input = document.getElementById("input__text");
    const text = value.trim();
    const category = document.querySelector('input[name="purpose"]:checked');

    if (text.length === 0) {
        // Проверяем на пустоту строки
        input.style.border = "1px solid red";
    } else if (value.trim().length > 0) {
      input.style.border = "initial";
    }
  if (category === null) {
      // Проверяем, что хотя бы одна категория выбрана
      alert("Выберите категорию");
      return;
  }
}

    const handleSubmit = (e) => {
        e.preventDefault();
        checkInputAndCategory();

        if (value) {
          addTodo(value);
          setValue('');
        }
      };


  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <label htmlFor="input__text"><h1>What's on your todo list?</h1></label>
    <input type="text" id="input__text" name="input-text" value={value} onChange={(e) => setValue(e.target.value)} className="input__todo" placeholder="Task ..."/>
    <PickCategory/>    
    <button className="add__button" type="submit"><span className="add__button__text">Add todo</span></button>
  </form>
  
  )
}
