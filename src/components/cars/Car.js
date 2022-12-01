import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCarById } from "../../utils/http-utils/user-requests";
import { CarCard } from "./CarCard";

export function Car(props){
    const params = useParams();
    const[car,setCar] = useState(null);


    useEffect(()=>{
        getCarById(params.id).then(response=> setCar(response.data));
    },[params.id])
    return(
        <div className="userContetnt">
            <CarCard  car={car}/>
        </div>
    )
}