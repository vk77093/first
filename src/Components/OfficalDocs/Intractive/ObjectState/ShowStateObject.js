import { ImmerDemo } from "./ImmerDemo";
import MovingCursor from "./MovingCursor";
import { SpreadOpertorUse } from "./SpreadOperatorUse";

export default function ShowStateObject(){
    return(
        <>
        <MovingCursor/>
        <SpreadOpertorUse/>
        <h2>Use Of Immer Hooks for deep down the object</h2>
        <ImmerDemo/>
        </>
    )
}