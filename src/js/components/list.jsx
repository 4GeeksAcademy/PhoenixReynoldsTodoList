import React from "react";

const List = ({todo, tasks, setTasks, index}) => {
    const deleteTodo = () => {
        const currentTasks = [...tasks]; {/* spread operator: ... makes const currentTasks into a standalone copy of tasks that can be modified without fucking with the original */}
        currentTasks.splice(index, 1); {/* splice: shecodes bookmark link */}
        setTasks(currentTasks)
    }

    return (
        <div className="listitem bg-white w-50 d-flex mx-auto border border-secondary border-top-0">
            <p className="list-item-text mx-auto my-auto">{todo}</p> {/* Re-study and fix later- import input then mess with it here? */}
            <button className="btn" onClick={deleteTodo}> X </button>
        </div>
    )
}

export default List;