import React,{useState} from "react";

export const DisplayTodos = (props) => {
    const [sort,setSort]=useState('active')
    return(
    <div className="displaytodos">
        <div className="buttons">
            <button onClick={()=>setSort('active')}>Active</button>
            <button onClick={()=>setSort('completed')}>Completed</button>
            <button onClick={()=>setSort('all')}>All</button>
        </div>
        <ul>{props.todos.length > 0&& sort==='active'?}</ul>
    </div>
);
}