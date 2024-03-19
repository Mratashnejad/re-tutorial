export const Classes = (props)=>{
    if (props.finished === true ){
    return  <h2>{props.name} : {props.index}</h2>;
}else {
    return null;
}
}