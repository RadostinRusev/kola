import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './auth/Login/Login';
import { Register } from './auth/Register';
import { Car } from './components/cars/Car';
import { CarFrom } from './components/cars/CarForm';
import { CarList } from './components/cars/CarList';
import {Layout} from './components/layout.js'
import { User } from './components/users/User';
import { UserFrom } from './components/users/UserForm';
import { UsersList } from './components/users/UsersList';
import { AutchentedRoute } from './utils/http-utils/AuthenticatedRoute';
function App() {
  return (
    <div>
    <Routes>
    {/* <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} /> */}
      <Route  exact path="/" element={ <Layout />} >  
    <Route exact path="/users-list" element=<UsersList /> />
    <Route exact path="/user/:id" element={<User />}/>
    <Route exact path="/user/create" element={<UserFrom />}/>
    <Route exact path="/user/edit/:id" element={<UserFrom />} />
   
    </Route>
    <Route exact path="/car-list" element=<CarList /> />
    <Route exact path="/car/:id" element={<Car />}/>
    <Route exact path="/car/create" element={<CarFrom />}/>
    <Route exact path="/car/edit/:id" element={<CarFrom />} />
    </Routes>
    </div>
  
  );
}

export default App;
