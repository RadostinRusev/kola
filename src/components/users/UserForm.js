
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './UserFrom.scss'
import {useEffect, useState} from 'react';
import { getUserById, saveUser } from '../../utils/http-utils/user-requests';
import { useNavigate, useParams } from 'react-router-dom';
export function UserFrom(){

  const params = useParams();
  const [user,setUser] = useState({
    isActive:false,
    name: "",
    picture: "",
    email: "",
    phone: "",
    address: ""
  })

  useEffect(()=>{
    if(params.id){
    getUserById(params.id).then(response=>{
      setUser(response.data)
    });
  }  },[params.id])
  const navigate = useNavigate();
  const onFromSubmit = (event) =>{
    event.preventDefault();

    saveUser(user).then(()=>{
      navigate('/users-list')
    })
  }

  const onInputChange = (event) =>{
    let value = event.target.name;
      if(event.target.name==='isActive'){
          value=event.target.checked;
      }

      setUser((prevState) => {
          return {
            ...prevState,
            [event.target.name]: event.target.value
          }
      })
  }
    return(
        <Form onSubmit={onFromSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={onInputChange} value={user.name} name="name" type="text" placeholder="Enter Name" />
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={user.email} onChange={onInputChange} name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="enterPhone" onChange={onInputChange} value={user.phone} name="phone"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}