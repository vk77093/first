import { useImmer } from "use-immer";
// npm install use-immer
export function ImmerDemo(){
    const[person,SetPerson]=useImmer({

        username:'Ajit Kumar',
        basicDetails:{
        surname:'Gupta',
        Dob:19/12/1990,
        },
        address:{
            city:'Jalandhar',
            imgUrl:'https://i.imgur.com/Sd1AgUOm.jpg',
            description:'Some Text at the sid eand bottom',
        }
    });
    function SetUserName(e){
        SetPerson((draft)=>{
            draft.username=e.target.value;
        })
    }
    function SurnmaeSet(e){
        SetPerson(draft=>{
            draft.basicDetails.surname=e.target.value;
        });
    }
    function DOBSet(e){
        SetPerson(draft=>{
            draft.basicDetails.Dob=e.target.value;
        });
    }
    function SetCity(e){
        SetPerson(draft=>{
            draft.address.city=e.target.value;
        })
    }
    function SetImageUrl(e){
        SetPerson(draft=>{
            draft.address.imgUrl=e.target.value;
        })
    }
    function SetDescription(e){
        SetPerson(draft=>{
            draft.address.description=e.target.value;
        })
    }
    return(
        <>
        <div className="container">
            <div className="col sm-8">
            <div className="form-group">
                    <label>Your Surname</label>
                    <input type="text" className="form-control" value={person.basicDetails.surname} onChange={SurnmaeSet}/>
                </div>
                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-control" value={person.username} onChange={SetUserName}/>
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" value={person.basicDetails.Dob} onChange={DOBSet}/>
                </div>
                <div className="form-group">
                    <label>City Name</label>
                    <input type="text" className="form-control" value={person.address.city} onChange={SetCity} />
                </div>
                <div className="form-group">
                    <label>User Image URL</label>
                    <input type="text" className="form-control" value={person.address.imgUrl} onChange={SetImageUrl} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-conrol" value={person.address.description} onChange={SetDescription}/>
                </div>
            </div>
            <div className="col-sm-4">
                <h2>SUser Deails Is Below</h2>
                <p>
                    UserName is {person.username}
                    Surname Is {person.basicDetails.surname}
                    His City is {person.address.city}
                </p>
                <img src={person.address.imgUrl} width={50} 
                height={100}/>
                <p>{person.address.description}</p>
            </div>
        </div>
        </>
    )
}