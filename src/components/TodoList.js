import React, { useState, useCallback, useRef, useEffect } from "react";

let idSeq = Date.now();

function Control(props) {
  const { addTodo } = props;
  const inpRef = useRef(null);

  const onSubmit = () => {
    const todoContent = inpRef.current.value.trim();

    if (!(todoContent.length === 0)) {
      addTodo({
        id: ++idSeq,
        txt: todoContent,
        complete: false
      });

      inpRef.current.value = "";
    }
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input type="text" placeholder="Enter todo pls!" ref={inpRef} />
    </form>
  );
}

function TodoItem(props) {
  const {
    todo: { id, txt, complete },
    removeTodo,
    toggleTodo
  } = props;

  const onChange = () => {
    toggleTodo(id);
  };

  const onClick = () => {
    removeTodo(id);
  };

  return (
    <li>
      <input type="checkbox" onChange={onChange} />
      <span className={complete ? "complete" : ""}>{txt}</span>
      <button onClick={onClick} style={{ marginLeft: 16 }}>
        delete
      </button>
    </li>
  );
}

function Todos(props) {
  const { todos, removeTodo, toggleTodo } = props;
  return (
    <ul>
      {todos.map(v => (
        <TodoItem key={v.id} todo={v} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
}

const LS_TODOS = "!$#$_todos_@!serfgo84";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(todo => {
    setTodos(todos => [...todos, todo]);
  }, []);

  const removeTodo = useCallback(id => {
    setTodos(todos => todos.filter(v => v.id !== id));
  }, []);

  const toggleTodo = useCallback(id => {
    setTodos(todos =>
      todos.map(v => {
        return v.id === id
          ? {
              ...v,
              complete: !v.complete
            }
          : v;
      })
    );
  }, []);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_TODOS) || "[]");
    setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODOS, JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="todo-list">
      <Control addTodo={addTodo} />
      <Todos todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </main>
  );
}
