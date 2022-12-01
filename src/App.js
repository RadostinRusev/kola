import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Car } from './components/cars/Car';
import { CarFrom } from './components/cars/CarForm';
import { CarList } from './components/cars/CarList';
import {Layout} from './components/layout.js'
import { Rent } from './components/rent/Rent';
import { User } from './components/users/User';
import { UserFrom } from './components/users/UserForm';
import { UsersList } from './components/users/UsersList';
function App() {
  return (
    <div>
    <Routes>
    <Route  exact path="/" element={ <Layout />} >  
    <Route exact path="/users-list" element=<UsersList /> />
    <Route exact path="/user/:id" element={<User />}/>
    <Route exact path="/user/create" element={<UserFrom />}/>
    <Route exact path="/user/edit/:id" element={<UserFrom />} />
    <Route exact path="/car-list" element=<CarList /> />
    <Route exact path="/car/:id" element={<Car />}/>
    <Route exact path="/car/create" element={<CarFrom />}/>
    <Route exact path="/car/edit/:id" element={<CarFrom />} />
    <Route exact path="/car/rent/:id" element={<Rent />} />
    </Route>
    </Routes>
    </div>
  
  );
}

export default App;
