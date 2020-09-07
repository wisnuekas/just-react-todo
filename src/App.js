import React, { useState } from "react";
import "./App.css";
import { Button, Input, InputLabel, FormControl } from "@material-ui/core";
import Todo from "./Todo";

function App() {
  //state
  const [Todos, setTodos] = useState(["Belajar React", "Jangan lupa firebase"]);
  const [InputTodo, setInputTodo] = useState("");

  const addTodos = (event) => {
    event.preventDefault(); // Prevent default action (refresh when submitting form)
    setTodos([...Todos, InputTodo]);
    setInputTodo(""); // Setting input field to blank
  };

  return (
    <div className="App">
      <h1>Todo List App </h1>

      <form>
        <FormControl>
          <InputLabel>Write todo</InputLabel>
          <Input
            color="primary"
            value={InputTodo}
            onChange={(e) => {
              setInputTodo(e.target.value); // push value of this input (target) to Input
            }}
          />
          <Button
            type="submit"
            disabled={!InputTodo}
            variant="contained"
            color="primary"
            onClick={addTodos}
          >
            Tambah
          </Button>
        </FormControl>
      </form>

      <Todo list={Todos} />
      {/* <ul>
        {Todos.map((doc) => (
          <Todo body={doc} />
        ))}
      </ul> */}
    </div>
  );
}

export default App;
