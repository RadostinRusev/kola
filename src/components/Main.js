import { Route, Routes } from "react-router-dom";
import { Car } from "./cars/Car";
import { CarFrom } from "./cars/CarForm";
import { CarList } from "./cars/CarList";
import { Home } from "./Home";
import { Rent } from "./rent/Rent";
import { User } from "./users/User";
import { UserFrom } from "./users/UserForm";
import { UsersList } from "./users/UsersList";

export function Main(){

return (
    <div className="mainContent">
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/users-list" element={<UsersList />} />
    <Route exact path="/user/:id" element={<User />}/>
    <Route exact path="/user/create" element={<UserFrom />}/>
    <Route exact path="/user/edit/:id" element={<UserFrom />}/>
    <Route exact path="/car-list" element={<CarList />} />
    <Route exact path="/car/:id" element={<Car />}/>
    <Route exact path="/car/create" element={<CarFrom />}/>
    <Route exact path="/car/edit/:id" element={<CarFrom />}/>
    <Route exact path="/car/rent/:id" element={<Rent />} />
    </Routes>
     </div>
)

}