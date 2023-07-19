
const user={
    name:'Aklazzine Marry',
    ImageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    size:'90px',
};

export default function UserAvatar(){
    
    return (
        <>
        <h1>{user.name}</h1>
        <img className='avatar'
        src={user.ImageUrl} alt={'User Name is '+user.name}
        style={{
            width:user.size,
            height:user.size,
        }}
        />

        
        </>
    )
}