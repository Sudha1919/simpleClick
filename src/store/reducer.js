const initialstate = {
  age:21
}
const reducer =(state = initialstate, action)=>{
const newState = {...state};
if(action.type=='AGE_UP'){
  newState++;
}
if(action.type=='AGE_DOWN'){
  newState--;
}
return newState;
}
export default reducer;