import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

function TodoList(props) {
  const { task = [] } = props;
  return (
    <div>
      {task?.map((item, index) => (
        <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
      ))}
    </div>
  );
}

export default TodoList;
