import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../utils/http-utils/user-requests";
import { UserCard } from "./UserCard";

export function User(props){
    const params = useParams();
    const[user,setUser] = useState(null);


    useEffect(()=>{
        getUserById(params.id).then(response=> setUser(response.data));
    },[params.id])
    return(
        <div className="userContetnt">
            <UserCard  user={user}/>
        </div>
    )
}