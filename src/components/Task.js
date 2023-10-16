import React from "react";

const Task = ({task})=>{
    return(
        <div className="task">
            <p>{task}</p>
            <button>Delete</button>
        </div>
    );
}

export default Task;