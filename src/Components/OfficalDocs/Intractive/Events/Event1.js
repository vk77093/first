import ShowState from "../State/Ist/ShowState"
import SettingState from "../State/Setting/SettingState"
import ToggleButton from "./ToggleButton"

//Event 1
function AlertButton({alertmessage,children}){
    return(
        <button type="button" onClick={()=>alert(alertmessage)}>{children}</button>
    )
}
function ShowEvent1(){
    return(
       <>
       <p>Firts Event Demo</p>
        <AlertButton alertmessage="I will Show Movie List">Show Moview</AlertButton>
        <AlertButton alertmessage="I will Show Serial List">Show Serial</AlertButton>
        </>
    )
       
}
//end of Vent One
export default function EventShow(){
return(
    <>
    <ShowEvent1/>
   <br/>
   <br/>
   <br/>
    <ToggleButton/>

    <br/>
    <br/>
    <ShowState/>
    <br/>
    <br/>
    <SettingState/>
    </>
)
}