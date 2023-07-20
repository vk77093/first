//sample of Export and import and also named componets
export function Profile(){
    const userDeatils={
        username:'Nicolas Frankin',
        Dob:1965,
        ImageUrl:'https://i.imgur.com/QIrZWGIs.jpg',
        alt:'Scientis Pics',
        Dod:2008,
        width:'80px',
        height:'90px',
    }
    return(
        <>
        <img src={userDeatils.ImageUrl} width={userDeatils.width} height={userDeatils.height} alt={userDeatils.alt}/>
        <h2>User Name Is  {userDeatils.username}</h2>
<h3>Date of Birth is {userDeatils.Dob}</h3>
<h4>Date Of Death is {userDeatils.Dod}</h4>
<h5>Duration is {userDeatils.Dod - userDeatils.Dob}</h5>
        </>
    )
        
        
    
}
export default function Gallery(){
    return(
       <>
        <h1>Great Scientis</h1>
        <Profile/>
       </>
    )
}