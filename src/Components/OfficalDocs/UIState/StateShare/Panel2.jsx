import { useState } from 'react';
export function Panel2(){
return(
    <>
    <h2>Panel With Only One Open</h2>
    <ShowPanelData panelHeading={'Samoa'} isActive={true}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates labore cumque perspiciatis maxime corporis quisquam ullam repudiandae sed, debitis voluptas at quia aperiam ab praesentium voluptate ex optio quis.</p>
    </ShowPanelData>
    <ShowPanelData panelHeading={'Chiswicks'} isActive={true}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum facere debitis itaque eaque rerum totam error odio tempore minima eligendi, dolor placeat sit accusantium tenetur perspiciatis? Qui, esse quo?
    </ShowPanelData>
    </>
)
}
function ShowPanelData({panelHeading,children,isActive}){
    const[isActiveData,setIsActive]=useState(false);
    return(
        <section className="panel">
            <h5>{panelHeading}</h5>
          {isActive ? (<p>{children}</p>) : (
            <button onClick={()=>setIsActive(true)}>Show Panel</button>
          )}
        </section>
    )
}
