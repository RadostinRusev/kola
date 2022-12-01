import { useEffect, useState } from "react";
import { deleteUserById, getAllUsers } from "../../utils/http-utils/user-requests";
import { UserCard } from "./UserCard";
import './UsersLists.scss';

//then => resolver corectly;
// .catch => on error 
// .finally 

export function UsersList() {

    const [users,setUsers] = useState([]);

    const  deleteUser = async (id) =>{
      await  deleteUserById(id);
      setUsers(pervState =>{
        return pervState.filter(user => user.id !== id);
      });
    }


    useEffect(()=>{
    getAllUsers().then(response => {
        setUsers(response.data);
    });
    }, []);
    return(
        <div className="users-list-wrapper">
        {users.map(bebe=> <UserCard key={bebe.id} user={bebe} deleteUser={deleteUser}/>)}
    
        </div>
    )
}