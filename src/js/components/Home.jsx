import React, { useState } from "react";
import List from "./list.jsx";
import Listtotal from "./listtotal.jsx";

//create your first component
const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([
    { text: "Clean up the blood", done: false },
    { text: "Do another sacrifice", done: false },
    { text: "Get milk", done: false },
  ]);

  const todoAdder = (event) => {
    if (event.key === "Enter") {
      const currentTasks = [...tasks];
      console.log(currentTasks);
      currentTasks.unshift({ text: inputValue, done: false });
      setTasks(currentTasks);
      setInputValue("");
    }
  };

  return (
    <div
      className="text-center d-flex flex-column"
      style={{ minHeight: "100vh" }}
    >
      <div className="my-5">
        <h1 style={{ fontSize: "7rem", color: "#b5b6b8" }}>todos</h1>
      </div>
      <div className="bg-white w-50 d-flex mx-auto border border-secondary">
        <input
          className="w-100 border-0"
          style={{ height: "39px", textAlign: "center" }}
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          onKeyDown={todoAdder}
        />
      </div>
      {tasks.map((item, index) => (
        <List
          todo={item}
          key={index}
          index={index}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
      <Listtotal number={tasks.length} />

      {/* Spacer to push footer to bottom if not enough content */}
      <div className="flex-grow-1"></div>

      <div>
        

        <footer className="d-flex justify-content-center align-items-center py-3 border-top" style={{ backdropFilter: "blur(1px)", height: "12px" }}>
          <span className="mb-2 text-body-secondary">
            © 2025 Phoenix Reynolds
          </span>
        </footer>

      </div>
    </div>
  );
};

export default Home;
