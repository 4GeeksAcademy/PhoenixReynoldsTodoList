import React, { useState } from "react";
import List from "./list.jsx";
import Listtotal from "./listtotal.jsx";


//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(["Clean up the blood", "Do another sacrifice", "Get milk"]);

  const todoAdder = (event) => {
    if (event.key === "Enter") {
      const currentTasks = [...tasks]; {/* spread operator */ }
      console.log(currentTasks)
      currentTasks.unshift(inputValue); {/* push: adds to the end of an array */ }
      setTasks(currentTasks)
      setInputValue(""); {/* Resets input value so that the field is blank once entered */ }
    }
  }

  return (
    <div className="text-center">
      <div className="my-5">
        <h1 style={{ fontSize: "7rem", color: "#b5b6b8" }}>todos</h1>
      </div>
      <div className="bg-white w-50 d-flex mx-auto border border-secondary">
        <input
          className="w-100 border-0"
          style={{ height: "39px", text: "center" }}
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          onKeyDown={todoAdder}
        />
      </div>
      {tasks.map((item, index) => (
        <List todo={item} key={index} index={index} tasks={tasks} setTasks={setTasks} />
      ))}
      <Listtotal number={tasks.length} />
    </div>
  );
};

export default Home;
