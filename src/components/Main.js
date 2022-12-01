import { Route, Routes } from "react-router-dom";
import { User } from "./users/User";
import { UserFrom } from "./users/UserForm";
import { UsersList } from "./users/UsersList";

export function Main(){

return (
    <div className="mainContent">
    MAIN CONTENT 
    <Routes>
    <Route exact path="/users-list" element={<UsersList />} />
    <Route exact path="/user/:id" element={<User />}/>
    <Route exact path="/user/create" element={<UserFrom />}/>
    <Route exact path="/user/edit/:id" element={<UserFrom />}>
    </Route>
    </Routes>
     </div>
)

}