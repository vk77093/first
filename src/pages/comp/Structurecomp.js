export default function StructureComp(props){
    return (
        <div className="font-weight-bold">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    )
}