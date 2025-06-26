import React from "react";

const List = ({ todo, tasks, setTasks, index }) => {
    const deleteTodo = () => {
        const currentTasks = [...tasks]; {/* spread operator: ... makes const currentTasks into a standalone copy of tasks that can be modified without fucking with the original */ }
        currentTasks.splice(index, 1); {/* splice: shecodes bookmark link */ }
        setTasks(currentTasks)
    };
    const toggleDone = (ind) => {
        let result = tasks.map((task, i) => {
            if (ind == i) return { text: task.text, done: !task.done }
            else return task
        });
        setTasks(result);
    };


    return (
        <div className="listitem w-50 d-flex mx-auto border border-secondary border-top-0" style={{ backgroundColor: todo.done == true ? "#71f587" : "#ffffff", color: todo.done == true ? "#23b13b" : "#000000"}}>
            <button className="btn" onClick={() => toggleDone(index)}>{todo.done ? "☑" : "☐"}</button>
            <p className="list-item-text m-auto">{todo.text}</p> {/* Re-study and fix later- import input then mess with it here? 2cc346 is a good color */}
            <button className="btn" onClick={deleteTodo}> ✖ </button>
        </div>
    )
}

export default List;