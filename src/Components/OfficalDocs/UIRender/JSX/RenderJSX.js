//simple function for profile
export function ProfileUser(){
    const userData={
        username:'Madam Marry',
        DOB:1958,
        Prize :'Nobal',
        Innovation:'Invented Radium Plates',
        alt:'Image of Madam Marry',
        ImageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
        ImageSzie:{
            imagewidth:'90px',
            imageHeight :'90px',
        }
        }
        return(
            <>
            <h1>Scientis Name is {userData.username}</h1>
            <h2>His DOB {userData.DOB} and Price He Got is {userData.Prize} for
            Innovation of {userData.Innovation}</h2>
            <img src={userData.ImageUrl} alt={userData.alt} className="avatar" style={{width:userData.ImageSzie.imagewidth,height:userData.ImageSzie.imageHeight}}/>
            </>
        )
}
export function HisSomeAchivment(){
    return(
        <>
        <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
        </ul>
        </>
    )
}

export default function RenderJSX(){
return (
    <>
    <ProfileUser/>
    <HisSomeAchivment/>
    </>
)
}
