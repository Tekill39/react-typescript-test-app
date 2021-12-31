import React from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
    todo:ITodo;
}

const TodoItem:React.FC<TodoItemProps> = ({todo}) => {   
    return (
        <div>   
                <div>
                    <input type='checkbox' checked={todo.completed}/>
                    {todo.id} . {todo.title}
                </div>
        </div>
    );
};

export default TodoItem;