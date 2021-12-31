import React from "react";
import { IUser } from "../types/types";

interface UserItemProps {
    user:IUser;
    onClick:(user:IUser) => void;
}

const UserItem:React.FC<UserItemProps> = ({user, onClick}) => {
    
   
    return (
        <div>   
                <div onClick={()=>onClick(user)} style={{padding:15,border:'1px solid'}}>
                    {user.id}. {user.name} проживает в {user.address.city} на улице {user.address.street}
                </div>
        </div>
    );
};

export default UserItem;