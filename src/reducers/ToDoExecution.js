let initialState={
    lists:[]
}

const toDOExecution =(state = initialState,action)=>{
    switch (action.type) {
        case "ADD_TODO":
            const {id , text} = action.payload
            return {
                ...state,
                lists:[
                    ...state.lists,
                    {
                        id:id,
                        text:text
                    }
                ]
            };
            

        case "UPDATE":
            const elementsIndex = state.lists.findIndex(element => element.id === action.payload.id)
            let newArray = [...state.lists]
            newArray[elementsIndex] = { ...newArray[elementsIndex], text: "value has been updated 😄" }
            return {
                ...state,
                lists: newArray
               
            };

        case "DELETE":
        return {
            ...state,
            lists: state.lists.filter((list)=>list.id !== action.id) 
        };
        case "REMOVEALL":return {
            ...state,
            lists: [] 
        };

        default:return state;
    }
}

export default toDOExecution