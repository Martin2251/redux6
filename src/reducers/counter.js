//reducer actions describe how it transforms your state into the next
const counterReducer  = (state = 0, action ) => {
    switch(action.type){
      case"INCREMENT":
      return state + 1;
      case"DECREMENT":
      return state - 1
    }
    } 

    export default counterReducer