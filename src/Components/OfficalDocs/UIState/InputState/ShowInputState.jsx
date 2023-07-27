import { FirstState } from "./FirstState";
import { ReduantStateAvoid2 } from "./ReduantSateAvoid2";
import { ReduantStateAvoid } from "./ReduantStateAvoid";
import { SelectedItem } from "./SelectedItem";
import { SelectedItemEditable } from "./SelectedItemEditable";
import { SelectedItemEditable2 } from "./SelectedItemEditable2";

export default function ShowInputState(){
    return(
        <>
        <FirstState/>
        <hr/>
        <h2>Avoid the Reduant State</h2>
        <ReduantStateAvoid/>
        <br></br>
        <br/>
        <hr/>
        <h2>Avoid the Reduant State</h2>
        <ReduantStateAvoid2/>
        <br/>
        <hr/>
        <SelectedItem/>
        <br/>
        <hr/>
        <SelectedItemEditable/>
        <br/>
        <hr/>
        <SelectedItemEditable2/>
        </>
    )
}