import React, { useState, useEffect } from "react";
import "./TodoFooter.css";
import { Link } from "react-router-dom";

function TodoFooter({ numberOfIncompleteTasks }) {
  const [inputStyle, setInputStyle] = useState({
    opacity: 0,
  });

  useEffect(() => {
    if (numberOfIncompleteTasks > 0) {
      setInputStyle({ opacity: 1 });
    } else {
      setInputStyle({ opacity: 0 });
    }
  }, [numberOfIncompleteTasks]);

  return (
    <div className="todo-footer">
      <p data-testid="para" style={inputStyle}>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
}

export default TodoFooter;
