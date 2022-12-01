import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { login } from "../../utils/http-utils/user-requests";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
  

export function Login(){
    const [user,setUser] = useState({
        email:'',
        password: ''
    })
    const navigate = useNavigate();
    const [error,setError] = useState('')

    const onInputChange = (event) =>{
        setUser((prevState) =>({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const onFromSubmit = (event)=>{
        event.preventDefault();
        login(user).then(()=>{
            navigate('/users-list')
        }).catch(error => setError(error.message))
    }
    return(
        <Form onSubmit={onFromSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required value={user.email} onChange={onInputChange} name="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="enter pic link" onChange={onInputChange} value={user.password} name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}