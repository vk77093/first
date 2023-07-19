
export default function EventStatRemainSame({countvalueprops,onclickaction}){
    return(
<button onClick={onclickaction} style={{border:'solid 2px yellow',color:'green'}}>Clicked Times Is {countvalueprops}</button>
    );

}