import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Container, Title, Component, Input, Button } from "./styles";
import TodoList from "../TodoList/TodoList";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  const addTask = () => {
    if (inputValue !== "") {
      setTask([...task, inputValue]);
    }
    setInputValue("");
  };

  return (
    <Container>
      <Title>ToDo</Title>
      <TextField
        id="filled-basic"
        label="Task"
        variant="filled"
        sx={{ width: "30%" }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
        <div>
            <TextField
                label="With normal TextField"
                id="standard-start-adornment"
                sx={{ m: 1, width: '25ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                }}
                variant="standard"
            />
            <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                <Input
                    id="standard-adornment-weight"
                    value={values.weight}
                    onChange={handleChange('weight')}
                    endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                />
      <Button
        variant="text"
        sx={{ fontSize: "22px", width: "30%", marginTop: "1%", color: "grey" }}
        onClick={addTask}
      >
        Add Task
      </Button>
      <Component>
        <Input id="task" label="Task" value={inputValue} />
        <Button>Add Task</Button>
      </Component>
      <TodoList task={task} />
    </Container>
  );
}

export default Header;
