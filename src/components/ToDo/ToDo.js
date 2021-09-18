import React, { useState } from 'react'

import "./ToDo.css"
import { useSelector,useDispatch } from 'react-redux'
import { addToDo, delteToDo, removeAllToDo, updateToDo } from '../../actions/index'

function ToDo() {
    const lists = useSelector(state => state.toDOExecution.lists)
    const  dispatch = useDispatch()
    const [text, setText] = useState("")
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9kb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..." value={text} onChange={(e)=>setText(e.target.value)}/>
                        <i className="fa fa-plus add-btn" title="Add Item" onClick={()=>dispatch(addToDo(text),setText(""))}></i>
                    </div>

                    {lists.map((list)=>(
                        <div className="showItems" key={list.id}>
                            <div className="eachItem">
                                    <h3>{list.text}</h3>
                                <div className="todo-btn">
                                    <i className="far fa-edit add-btn" title="Edit Item"  onClick={()=>dispatch(updateToDo(list))}></i>
                                    <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>dispatch(delteToDo(list.id))}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                   

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=>dispatch(removeAllToDo())}><span> CHECK LIST </span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo
