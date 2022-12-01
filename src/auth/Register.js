import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../utils/http-utils/user-requests";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export function Register(){

    const [user,setUser] = useState({
        name: "",
        email: "",
        phone: "",
      })
      const [error,setError] = useState('');
      const onInputChange = (event) =>{
        setUser((prevstate)=>{
            return{
                ...prevstate,
                [event.target.name]: event.target.value
            }
        })

        setError('')
      }
        const navigate = useNavigate()
      const onFromSubmit= (event)=>{
        event.preventDefault();
        registerUser(user).then(()=>{
            navigate('/users-list')
        }).catch(error=>{
            setError(error.message)
        })

      }

    return(
        <div>
        {error && <span className="text-danger">{error}</span>}
        <Form onSubmit={onFromSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={onInputChange}  required value={user.name} name="name" type="text" placeholder="Enter Name" />
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required value={user.email} onChange={onInputChange} name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="enterPhone"  required onChange={onInputChange} value={user.phone} name="phone"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    );
}