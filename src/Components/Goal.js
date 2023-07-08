export default function Goal(props){
    const goalScore=props.goalScore;
    if(goalScore >0){
        return <h1>Successfully Goal Done</h1>
    }else{
        return <h1>Sorry Goal Not DOne</h1>
    }
}
