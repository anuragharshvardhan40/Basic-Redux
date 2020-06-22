const {createStore} = require("redux");
const initialState = {
    bal:10000
}

const reducer = (state=initialState,action)=>{
 const newState = {...state};
 switch(action.type){
     case "DEPOSIT":
         newState.bal+=action.value;
         break;
     case "WITHDRAW":
         newState.bal-=action.value;
         break;

 }
  return newState;
}

const store = createStore(reducer);
store.subscribe (()=>{
    console.log(store.getState());
})
store.dispatch({type:"DEPOSIT", value:5000});
store.dispatch({type:"WITHDRAW",value:2000});