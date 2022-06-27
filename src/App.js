import { observer } from "mobx-react-lite";
import todo from "./store/todo";
import Todo from "./Components/Todo/Todo";
import s from "./App.module.scss";
import { useState,useEffect } from "react";
import arrow from './Assets/arrow.svg'
const App = observer(() => {
  const [value, setValue] = useState("");
  const [filteredTodo,setFilteredTodo] = useState(todo.todos);
  const [filterTypes, setFilterTypes] = useState([
    { title: "Выполненные" },
    { title: "Невыполненные" },
    { title: "Все" },
  ]);
  useEffect(() => {
   setFilteredTodo(todo.todos)
  }, [todo.todos])
  
  const [currentFilter, setCurrentFilter] = useState({ title: "Все" });
  const currentTypeFiltered = filterTypes.filter(
    (item) => item.title !== currentFilter.title
  );
  const [chooseFilter, setChooseFilter] = useState(false);
   const filterProducts = (title) =>{
    if(title === "Выполненные"){
     const data = todo.todos.filter((todo) => todo.complete === true)
     setFilteredTodo(data)
       }
    if(title === "Невыполненные"){
     const data = todo.todos.filter((todo) => todo.complete !== true)
     setFilteredTodo(data)
       }
    if(title === "Все"){
     const data = todo.todos
     setFilteredTodo(data)
       }
    }
  
  return (
    <div className={s.main}>
      <div >
      <input className={s.main__input} value={value} onChange={(e) => setValue(e.target.value)} />
      <button
        onClick={() => {
          todo.addTodo(value);
          setValue("")
        }}
        className={s.main__button}
      >
        Добавить
      </button>
      </div>
      <div className={s.main__todo_container}>
        <div
          className={s.filter_block}
          onClick={() => setChooseFilter(!chooseFilter)}
        >
          <span>{currentFilter.title}</span>
          <img src={arrow} alt="arrow" />
          {chooseFilter && (
            <div className={s.choose_filter_block}>
              {currentTypeFiltered.map((i) => {
                return (
                  <span
                    onClick={() => {
                      setCurrentFilter(i);
                      setChooseFilter(false);
                      filterProducts(i.title);
                    }}
                  >
                    {i.title}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {filteredTodo.map((t) => {
          return (
            <Todo
              key={t.id}
              todo={t}
              removeTodo={todo.removeTodo}
              completeTodo={todo.completeTodo}
            />
          );
        })}
      </div>
    </div>
  );
});

export default App;
