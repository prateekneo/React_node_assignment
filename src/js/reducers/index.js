const initialState = {
    todo: [],
    prioritySortFlag : 0,
    timeSortFlag : 0,
    statusSortFlag : 0

};

function rootReducer(state = initialState, action) {
    if(action.type === 'ADD_TODO'){
        return Object.assign({}, state, {
            todo : state.todo.concat(action.payload),
            prioritySortFlag : state.prioritySortFlag,
            timeSortFlag : state.timeSortFlag,
            statusSortFlag : state.statusSortFlag
          });
    } else if(action.type === 'EDIT_TODO'){
        const updatedItems = state.todo.map((item, i) => {
            if(i === action.index){
              if(action.feature === 'Completed') {
                item.status = 'Incomplete'
              } else {
                item.status = 'Completed'
              }
            }
            return item
          })
          return  ({
                todo : updatedItems,
                prioritySortFlag : state.prioritySortFlag,
            timeSortFlag : state.timeSortFlag,
            statusSortFlag : state.statusSortFlag
          })
    } else if(action.type === 'DELETE_TODO'){
        const updatedItems = state.todo.filter((item, i) => {
            if(i !== action.index){
              return item;
            }
          })
          return  ({
                todo : updatedItems,
                prioritySortFlag : state.prioritySortFlag,
            timeSortFlag : state.timeSortFlag,
            statusSortFlag : state.statusSortFlag
          })
    }
    else if(action.type === 'SORT_TODO_BY_PRIORITY'){
        let array = [];
        state.todo.forEach((value) => {
            array.push(value);
        })
        console.log(array);
        if(state.prioritySortFlag === 0){
            array.sort( (a, b) => {
                if(parseInt(a.priority) > parseInt(b.priority)){
                    return 1;
                } else{
                    return -1;
                }
            })
          return  ({
                todo : array,
                prioritySortFlag : 1,
                timeSortFlag : state.timeSortFlag,
                statusSortFlag : state.statusSortFlag
          })
        }  else {
            array.sort( (a, b) => {
                if(parseInt(a.priority) < parseInt(b.priority)){
                    return 1;
                } else{
                    return -1;
                }
            })
            return  ({
                todo : array,
                prioritySortFlag : 0,
                timeSortFlag : state.timeSortFlag,
                statusSortFlag : state.statusSortFlag
            })
        }     
    } else if(action.type === 'EDIT_FORM_TODO'){
        let array = [];
        state.todo.forEach( (value, index) => {
            if(index !== action.index)
                array.push(value)
            else{
                array.push(action.payload)
            }
        })
        return ({
                todo : array,
                prioritySortFlag : state.prioritySortFlag,
            timeSortFlag : state.timeSortFlag,
            statusSortFlag : state.statusSortFlag
        })
        
    } else if(action.type === 'SORT_TODO_BY_TIME'){
        let array = [];
        state.todo.forEach((value) => {
            array.push(value);
        })
        console.log(array);
        if(state.timeSortFlag === 0){
            array.sort( (a, b) => {
                if(new Date(a.date) > new Date(b.date)){
                    return 1;
                } else if(new Date(a.date) < new Date(b.date)){
                    return -1;
                } else {
                    if(a.time > b.time){
                        return 1
                    }
                    else {
                        return -1;
                    }
                }
            })
            return  ({
                todo : array,
                prioritySortFlag : state.prioritySortFlag,
                timeSortFlag : 1,
                statusSortFlag : state.statusSortFlag
            })
        } else {
            array.sort( (a, b) => {
                if(new Date(a.date) < new Date(b.date)){
                    return 1;
                } else if(new Date(a.date) > new Date(b.date)){
                    return -1;
                } else {
                    if(a.time < b.time){
                        return 1
                    }
                    else {
                        return -1;
                    }
                }
            })
            return ({
                todo : array,
                prioritySortFlag : state.prioritySortFlag,
                timeSortFlag : 0,
                statusSortFlag : state.statusSortFlag
            })
        }
        
    }
    else if(action.type === 'SORT_TODO_BY_STATUS'){
        let array = [];
        state.todo.forEach((value) => {
            array.push(value);
        })
        console.log(array);
        if(state.statusSortFlag === 0){
            array.sort( (a, b) => {
                if(a.status > b.status){
                    return 1;
                } else{
                    return -1;
                }
            })
          return ({
                todo : array,
                prioritySortFlag : state.prioritySortFlag,
                timeSortFlag : state.timeSortFlag,
                statusSortFlag : 1
          })
        } else {
            array.sort( (a, b) => {
                if(a.status < b.status){
                    return 1;
                } else{
                    return -1;
                }
            })
            return  ({
                todo : array,
                prioritySortFlag : state.prioritySortFlag,
                timeSortFlag : state.timeSortFlag,
                statusSortFlag : 0
            })
        }   
    } else if (action.type === 'FILTER_BY_STATUS'){
        if(action.status === 'Incomplete'){
            let array = [];
            state.todo.forEach((value, index) => {
                if(value.status == 'Completed'){
                    array.push(value);
                    array[index].filter_status = false;  
                } else {
                    array.push(value);
                    array[index].filter_status = true;  
                }
            })
            return ({
                todo : array
            })
        } else if(action.status === 'Completed'){
            let array = [];
            state.todo.forEach((value, index) => {
                if(value.status == 'Incomplete'){
                    array.push(value);
                    array[index].filter_status = false;   
                } else {
                    array.push(value);
                    array[index].filter_status = true; 
                }
            })
            return ({
                todo : array
            })
        } else {
            let array = [];
            state.todo.forEach((value, index) => {
                    array.push(value);
                    array[index].filter_status = true;     
            })
            return ({
                todo : array
            })
        }
    }
    return state;
  };
  export default rootReducer;