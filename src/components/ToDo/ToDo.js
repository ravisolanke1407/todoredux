import React from 'react'
// import todo from "../images/todo.svg";

import "./ToDo.css"
function ToDo() {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG9kb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..." />
                        <i className="fa fa-plus add-btn" title="Add Item" ></i>

                    </div>

                    <div className="showItems">
                        <div className="eachItem">
                            <h3>{"elem.name"}</h3>
                            <div className="todo-btn">
                                <i className="far fa-edit add-btn" title="Edit Item" ></i>
                                <i className="far fa-trash-alt add-btn" title="Delete Item"></i>
                            </div>
                        </div>

                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" ><span> CHECK LIST </span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDo
