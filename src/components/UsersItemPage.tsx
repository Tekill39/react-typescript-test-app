import {FC, useState, useEffect} from 'react';
import { IUser } from '../types/types';
import axios from 'axios';
import { useParams, useNavigate  } from 'react-router-dom';
 
interface UserItemParams {
    id:string;
}

const UsersItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null)   
    const params = useParams<UserItemParams>()
    const navigate = useNavigate ()

    function handleClick() {
        navigate('/users');
    };

    useEffect(()=> {
        fetchUser()        
    },[])

    async function fetchUser() {
        try{
        const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/'+ params.id)
        setUser(response.data)
        }
        catch(e){
        console.log(e)
        }
    }
    return (
        <div style={{margin:10}}>
            <button style={{
                
                padding: '0 15',
	border: '1px solid #7952b3',  
	borderRadius: 6,
	height: 40,
    width:76,
    
	
	color: '#fff',
	backgroundColor: '#7952b3',
	cursor: 'pointer'}} onClick={handleClick}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
            
        </div>
    ) 
}  
export default UsersItemPage;
  
    
   
   
    