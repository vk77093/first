import IstComp from '../Components/Test';

import Counter  from '../Components/Counter';
import Goal from '../Components/Goal';

//club creation Message
import Club from '../Components/Cub';
// form test
import MyForm from '../Components/MyForm';
import MultiForm from '../Components/MultiForm';

export default function ReactTesting(){
    const data="Hello Data";
const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
//conditional
const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElementCond = <h1>{text}</h1>;

//Render List

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Samoa'},
    {id: 2, brand: 'Welignton'},
    {id: 3, brand: 'Chiswick'}
  ];
  return (
    <>
      <h1>Famous Rugby Clubs</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}
return(
<>
<h1>React is {5*5} better</h1>
    <h2>{data}</h2>
    {myElement}
    {myElementCond}
    <IstComp a={10} b={20}/>
    <Counter number={4} />
    <Goal goalScore={0}/>
    <Goal goalScore={1}/>
    {/* same page Components */}

   <Garage/>
   <Club message={"club added successfully"}/>
   <h4>Form Checking</h4>
   <MyForm/>
   <br/>
   <h2>Multiple Form Data</h2>
<MultiForm/>
</>
);


}