import { useState } from "react";

function ShowPanel({children,PanelHeading}){
    const[panelisVisible,SetPanelVisibility]=useState(false);
//     return(
//         <>
//         <section className="panel">
// <p>{PanelHeading}</p>
// {panelisVisible ? (<p>{children}</p>) :(
//     <button onClick={()=>SetPanelVisibility(true)}>Show Data</button>
// )}
//         </section>
//         </>
//     )
if(panelisVisible){
    return(
        <section className="panel">
<p>{PanelHeading}</p>
{/* <p>{children}</p> */}
<button onClick={()=>SetPanelVisibility(false)}>Show Data</button>
        </section>
    )
}else{
    return(
        <section className="panel">
<p>{PanelHeading}</p>
<p>{children}</p>
<button onClick={()=>SetPanelVisibility(true)}>Hide Data</button>
        </section>
    ) 
}
}
export function Panel1(){
return (
    <>
    <h2>Panel First Demo</h2>
    <ShowPanel PanelHeading={'Product 1 Details'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eaque consequatur laudantium beatae officia in odio ipsum quae nobis ex optio soluta at odit, alias maxime magnam non expedita velit.</p>
    </ShowPanel>
    <ShowPanel PanelHeading={'Product 2 Details'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, reiciendis laudantium. Aut sed accusantium harum eveniet illum at quasi nihil facilis itaque, ipsam expedita natus adipisci, fugiat tenetur, deserunt repellendus.</p>
    </ShowPanel>
    </>
)
}