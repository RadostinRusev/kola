
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Rent.scss'
import { useState} from 'react';
import {  rentCar } from '../../utils/http-utils/user-requests';
import { useNavigate, useParams } from 'react-router-dom';
export function Rent(){

  const params = useParams();
  const [rent,setRent] = useState({
    name: "",
    phone: "",
    email: ""
  })

  const navigate = useNavigate();
  const onFromSubmit = (event) =>{
    event.preventDefault();
    const carId = window.location.pathname.split('/')[3]
    rentCar(rent,carId).then(()=>{
      navigate('/car-list')
    })
  }

  const onInputChange = (event) =>{
    setRent((prevState) => {
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
          <Form.Control onChange={onInputChange} value={rent.name} name="name" type="text" placeholder="Enter Name" />
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={rent.email} onChange={onInputChange} name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Phone</Form.Label>
          <Form.Control type="tel" placeholder="enterPhone" onChange={onInputChange} value={rent.phone} name="phone"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
}