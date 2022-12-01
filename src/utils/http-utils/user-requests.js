import axios from 'axios';

const carsUrl = 'http://localhost:3005/cars';
const usersUrl = 'http://localhost:3005/users';

export function getAllUsers(){
    return axios.get(usersUrl);
}

export function getUserById(id){
    return axios.get(`${usersUrl}/${id}`)
}

export function deleteUserById(id){
    return axios.delete(`${usersUrl}/${id}`)
}

export function saveUser(user){

    if(user.id){
        return axios.put(`${usersUrl}/${user.id}`,user)
    }

    return axios.post(`${usersUrl}`,user)
}

export async function registerUser(user){
 const existingUser =  (await  axios.get(`${usersUrl}?email=${user.email}`)).data;
   if(existingUser.lenght>0){
    throw new Error('User with email alredy exist')
   }

   return saveUser(user)
}
export async function login(user){
    const allUsers = await (await getAllUsers()).data;

    const foundUser = allUsers.find(u=>u.email===user.email && u.password === user.password)

    if(!foundUser){
        throw new Error('invalid password')
    }

    localStorage.setItem('loggedUser',JSON.stringify(foundUser));

    return foundUser;
}

export function getLoogedUser(){
    return JSON.parse(localStorage.getItem('loggedUser'));
}

export  function logout(){
    localStorage.removeItem('loggedUser')
}

//car

export function getAllCars(){
    return axios.get(carsUrl);
}

export function getCarById(id){
    return axios.get(`${carsUrl}/${id}`)
}

export function deleteCarById(id){
    return axios.delete(`${carsUrl}/${id}`)
}

export function saveCar(car){

    if(car.id){
        return axios.put(`${carsUrl}/${car.id}`,car)
    }

    return axios.post(`${usersUrl}`,car)
}

// export async function createCar(car){
//  const existingUser =  (await  axios.get(`${carsUrl}?email=${car.email}`)).data;
//    if(existingUser.lenght>0){
//     throw new Error('User with email alredy exist')
//    }

//    return saveCar(user)
// }