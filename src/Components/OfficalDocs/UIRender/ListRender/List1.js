import ShowList from "./ShowList";

const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
//   const listItems = people.map((person) =>
//     <li key={person}>{person}</li>
//   );
//   return <ul>{listItems}</ul>;
const listItems=people.map((p)=>{
   return <li key={p}>{p}</li> 
});
return (
    <>
    <ul>{listItems}</ul>
    <h2>Second List Show </h2>
    <br></br>
    <ShowList/>
    </>
)
}