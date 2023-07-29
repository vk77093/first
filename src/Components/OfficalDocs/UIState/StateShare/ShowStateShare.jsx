import { Panel1 } from "./Panel1";
import { Panel2 } from "./Panel2";
import { ShowCounter } from "./ResetState/ShowCounter";
import { SearchList } from "./SearchList";

export default function ShowStateShare(){
    return(
        <>
        <Panel1/>
        <br/>
        <hr/>
        <Panel2/>
        <br/>
        <hr/>
        <SearchList/>
        <br/>
        <hr/>
        <h2>State Isolation Demo</h2>
        <ShowCounter/>
        </>
    )
}