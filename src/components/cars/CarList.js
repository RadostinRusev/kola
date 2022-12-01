import { useEffect, useState } from "react";
import { deleteCarById,  getAllCars } from "../../utils/http-utils/user-requests";
import { CarCard } from "./CarCard";
import './CarList.scss';

//then => resolver corectly;
// .catch => on error 
// .finally 

export function CarList() {

    const [cars,setCars] = useState([]);

    const  deleteCar = async (id) =>{
      await  deleteCarById(id);
      setCars(pervState =>{
        return pervState.filter(car => car.id !== id);
      });
    }


    useEffect(()=>{
    getAllCars().then(response => {
        setCars(response.data);
    });
    }, []);
    return(
        <div className="users-list-wrapper">
        {cars.map(bebe=> <CarCard key={bebe.id} car={bebe} deleteCar={deleteCar}/>)}
        </div>
    )
}