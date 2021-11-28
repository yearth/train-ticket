import React, { useState, useCallback, useRef, useEffect } from "react";
import { createSet, createAdd, createRemove, createToggle } from "../actions";

let idSeq = Date.now();

function Control(props) {
  const { dispatch } = props;
  const inpRef = useRef(null);

  const onSubmit = () => {
    const todoContent = inpRef.current.value.trim();

    if (!(todoContent.length === 0)) {
      dispatch(
        createAdd({
          id: ++idSeq,
          txt: todoContent,
          complete: false
        })
      );

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
    dispatch
  } = props;

  const onChange = () => {
    dispatch(createToggle(id));
  };

  const onClick = () => {
    dispatch(createRemove(id));
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
  const { todos, dispatch } = props;
  return (
    <ul>
      {todos.map(v => (
        <TodoItem key={v.id} todo={v} dispatch={dispatch} />
      ))}
    </ul>
  );
}

const LS_TODOS = "!$#$_todos_@!serfgo84";

export function TodoList() {
  const [todos, setTodos] = useState([]);

  const dispatch = useCallback(action => {
    const { type, payload } = action;

    switch (type) {
      case "set":
        setTodos(payload);
        break;
      case "add":
        setTodos(todos => [...todos, payload]);
        break;
      case "remove":
        setTodos(todos => todos.filter(v => v.id !== payload));
        break;
      case "toggle":
        setTodos(todos =>
          todos.map(v => {
            return v.id === payload
              ? {
                  ...v,
                  complete: !v.complete
                }
              : v;
          })
        );
        break;

      default:
        break;
    }
  }, []);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem(LS_TODOS) || "[]");
    dispatch(createSet(todos));
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODOS, JSON.stringify(todos));
  }, [todos]);

  return (
    <main className="todo-list">
      <Control dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </main>
  );
}
