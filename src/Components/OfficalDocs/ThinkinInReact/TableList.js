import { useState } from "react";
const productsGot=[
    
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
     
];
function ProductCategoryRow({category}){
    return(
        <tr>
            <th colsapn="2">
                {category}
            </th>
        </tr>
    )
}
function ProductRow({product}){
    const name=product.stocked ? product.name :
    <span style={{color:'red'}}>
        {product.name}
    </span>
    return(
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}
function ProductTable({products,filterText,inStockOnly}){
    const rows=[];
    let lastcategory=null;
    products.forEach((pro) => {
        if(pro.name.toLowerCase().indexOf(filterText.toLowerCase())=== -1){
            //product.name.toLowerCase().indexOf(
        // filterText.toLowerCase()
        // ) === -1
        return;
        }
        if(inStockOnly && !pro.stocked){
            return;
        }
        if(pro.category !==lastcategory){
            rows.push(
                <ProductCategoryRow category={pro.category} key={pro.category}/>
            );
        }
            rows.push(
                <ProductRow product={pro} key={pro.name}/>
            );
            lastcategory=pro.category;
        
    });
    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}
function SearchBar({filterText,inStockOnly,OnInFilterTextChnage,OninStockOnlyChange}){
    return (
        <form>
          <input type="text" value={filterText} onChange={(e)=>OnInFilterTextChnage(e.target.value)} placeholder="Search..." />
          <label>
            <input type="checkbox"  checked={inStockOnly} onChange={(e)=>OninStockOnlyChange(e.target.checked)} />
            {' '}
            Only show products in stock
          </label>
        </form>
      );
}
function ProductTableFilter({products}){
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);
    return(
        <>
        <SearchBar filterText={filterText} OnInFilterTextChnage={setFilterText}
        inStockOnly={inStockOnly} OninStockOnlyChange={setInStockOnly}
        />
        <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
        </>
    )
}
export default function TableList(){
   
   return <ProductTableFilter products={productsGot}/>
    
}
