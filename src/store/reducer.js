const initialstate = {
  age:22
}
const reducer =(state = initialstate, action)=>{
  const a = {...state};
if(action.type==='AGE_UP'){
  a++;
}
if(action.type==='AGE_DOWN'){
  a--;
}
return a;
}
export default reducer;