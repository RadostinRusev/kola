import { Navigate, useNavigate } from "react-router-dom";
import { getLoogedUser } from "./user-requests";

export function AutchentedRoute({children}){

    const user = getLoogedUser();


    if(!user){
    return <Navigate to='/login' />
    }
    return children;
}