const products=[
    { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
]

export default function ListComp(){
    const listItems=products.map(pro=>
        <li key={pro.id} style={{
            color:pro.isFruit ? 'magenta' :'green'
        }}>
            {pro.title}
        </li>
       
        )
    return(
        <>
        <ul>
        {listItems}
        </ul>
        
        </>
    )
}