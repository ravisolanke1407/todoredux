export const addToDo = (text)=>{
    return {
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            text:text
        }
    }
}

export const updateToDo = (list)=>{
    return {
        type:"UPDATE",
        payload:{
            id:list.id,
            text:list.text
        }
    }
}

export const delteToDo = (id)=>{
    return {
        type:"DELETE",
        id
    }
}


export const removeAllToDo = ()=>{
    return {
        type:"REMOVEALL"
    }
}