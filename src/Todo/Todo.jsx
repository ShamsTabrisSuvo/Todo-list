import React, { useEffect, useState } from 'react'
import list from '../assets/Todo.jpg'
import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";

const Todo = () => {
    const db = getDatabase();
    const [todo, setTodo] = useState("");
    const [printTodo, setPrintTodo] = useState([]);
    const [editTodo, setEditTodo] = useState(null)
    const [editText, setEditText] = useState("");

    const handleGetInput = (e) => [
        setTodo(e.target.value)
    ]
    const handleSubmit = () => {
        if (todo) {
            set(push(ref(db, "todo/")), {
                todo: todo,
            });
            setTodo("");
        }
    }

    useEffect(() => {
        const todoRef = ref(db, 'todo/')
        onValue(todoRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                arr.push({ ...item.val(), todoid: item.key })
            })
            setPrintTodo(arr)
        })
    }, [])

    const handleRemove = (item) => {
        console.log(item);
        remove(ref(db, 'todo/' + item.todoid))
    }

    const handleEdit = (item) => {
        console.log(item);
        if (editTodo === item.todoid) {
            setEditTodo(null)
        } else {
            setEditTodo(item.todoid)
            setEditText(item.todo);
        }
    }

    const handleEditSave = (item) => {
        if (editText) {
            set(ref(db, "todo/" + item.todoid), {
                todo: editText,
            });
            setEditTodo(null);
        }
    };
    return (
        <div>
            <div className='flex justify-between gap-[130px]'>
                <div>
                    <h1 className='text-[50px] font-semibold   text-black'>To-Do List :-</h1>
                    
            <div className='mt-[80px]'>
                <label className='text-[40px] font-semibold text-black'>Add To-Do</label>

                <input onChange={handleGetInput} type="text" className='border border-black rounded-xl py-[20px] px-[20px] w-full text-black' />

                <div onClick={handleSubmit} className='bg-blue-900 text-black text-[30px] py-[20px] w-[300px] mx-auto mt-[30px] rounded-xl cursor-pointer font-semibold'>Submit</div>
            </div>

            <div className="lists text-left text-[30px] font-semibold  text-blue-700">
                {
                    printTodo.map((item) => (
                        <ul className='list-disc flex items-center gap-x-[30px] mt-[30px]'>
                            <li>{item.todo}</li>
                            <div onClick={() => handleRemove(item)} className='cursor-pointer font-semibold bg-green-950 py-[10px] px-[10px] rounded-xl text-[18px]'>Remove</div>

                            <div onClick={() => handleEdit(item)} className='cursor-pointer font-semibold bg-red-600 py-[10px] px-[10px] rounded-xl text-[18px]'>Edit</div>

                            {editTodo === item.todoid && (
                                <div className="flex items-center gap-x-2">
                                    <input
                                        type="text"
                                        value={editText}
                                        onChange={(e) => setEditText(e.target.value)}
                                        className="border border-yellow-500 py-[5px] px-[10px] rounded-xl"
                                    />
                                    <button
                                        onClick={() => handleEditSave(item)}
                                        className="bg-green-500 text-white px-[10px] py-[5px] rounded-xl ml-[10px]"
                                    >
                                        Save
                                    </button>
                                </div>
                            )}
                        </ul>
                    ))
                }

            </div>
                </div>
                <img src={list} alt="" className='w-[710px] '/>
            </div>
        </div>
    )
}

export default Todo