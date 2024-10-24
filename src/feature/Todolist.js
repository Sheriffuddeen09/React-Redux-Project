import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useGetTodosQuery, useAddTodosMutation, useDeleteTodosMutation, useUpdateTodosMutation } from "../api/apiSlice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TodoList (){

    const {
        data: todos,
        isLoading,
        isError,
        error,
        isSuccess
    } = useGetTodosQuery()

    const [updateTodos] = useUpdateTodosMutation()
    const [deleteTodos] = useDeleteTodosMutation()
    const [addTodos] = useAddTodosMutation()
    const [newTodos, setNewTodos] = useState('')

    const handleSubmit = (e) =>{

        e.preventDefault()
        addTodos({userId:1, title:newTodos, completed:false})
        setNewTodos('')
    }
    let content 

    if(isLoading){
        content = <p>Loading</p>
    }
    
    else if(isSuccess){
        content = todos.map((todo) =>(
            <form className="border rounded-xl bg-white w-80 mt-2 p-4 text-black flex items-center gap-2">
                <input type="checkbox" checked={todo.completed} value={todo.completed} onChange={() => updateTodos({...todo, completed: !todo.completed })} className="h-10 w-6" />
                <label htmlFor={todo.id}>{todo.title}</label>
                <button type="button" onClick={() => deleteTodos({id: todo.id})} className="text-red-600"><FontAwesomeIcon icon={faTrash} />
                                                            </button>
            </form>
        ))
    }
    else if(isError){
        content = <p>{error.message}</p>
    }
    const contents = (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border border-2 border-blue-300 p-2 rounded-xl w-72 text-black" 
                value={newTodos} onChange={(e) => setNewTodos(e.target.value)} />
                <button className="bg-green-300 p-2 rounded-xl translate-x-3" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
    return(
        <section className="mx-auto flex flex-col items-center mt-10">
        {contents}
        {content}
        </section>
    )
}

export default TodoList