
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CarFrom.scss'
import {useEffect, useState} from 'react';
import { getCarById, getUserById, saveCar, saveUser } from '../../utils/http-utils/user-requests';
import { useNavigate, useParams } from 'react-router-dom';
import { FormSelect } from 'react-bootstrap';
export function CarFrom(){

//     "id":"3f3481fa-93dd-4e18-85bd-737cbbfeb0c0",
//     "vechileType": "economy",
//     "vehicle": {
//       "brand": "VW",
//       "model": "passat",
//       "constuctionYear": 2000
//     },
//     "fuelType": "petrol",
//     "numberOfSeats": "12",
//     "picture":"https://picsum.photos/id/237/200/300",
//     "pricePerDay":10,
//     "count":7
//   },
  const params = useParams();
  const [car,setCar] = useState({
    vechileType: '',
    vehicle: {
              brand: '',
              model: '',
              constuctionYear: ''
            },
            fuelType: '',
            numberOfSeats: '',
            picture:'',
            pricePerDay:'',
            count:''
  })

  useEffect(()=>{
    if(params.id){
    getCarById(params.id).then(response=>{
      setCar(response.data)
    });
  }  },[params.id])
  const navigate = useNavigate();
  const onFromSubmit = (event) =>{
    event.preventDefault();

    saveCar(car).then(()=>{
      navigate('/car-list')
    })
  }

  const onInputChange = (event) =>{

      setCar((prevState) => {
          return {
            ...prevState,
            [event.target.name]: event.target.value,
            vehicle: {
                ...prevState.vehicle,
                [event.target.name]: event.target.value,
            }
          }
      })
  }

  const handleChange = (event) =>{
    setCar((prevState) => {
        return {
          ...prevState,
          [event.target.name]: event.target.value
        }
    })
  }
    return(
        <div className="user-form">
        <Form onSubmit={onFromSubmit} >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>vechileType</Form.Label>
          <Form.Select value={car.vechileType} onChange={handleChange} name="vechileType">
            <option value="economy">economy</option>
            <option value="estate">estate</option>
            <option value="luxury">luxury</option>
            <option value="SUV">SUV</option>
            <option value="cargo">cargo</option>
          </Form.Select>
          </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>brand</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={car.vehicle.brand} onChange={onInputChange} name="brand" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>model</Form.Label>
          <Form.Control type="text" placeholder="enterPhone" onChange={onInputChange} value={car.vehicle.model} name="model"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>constuctionYear</Form.Label>
          <Form.Control type="text" placeholder="enterPhone" onChange={onInputChange} value={car.vehicle.constuctionYear} name="constuctionYear"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>fuelType</Form.Label>
          <Form.Select value={car.fuelType} onChange={handleChange} name="fuelType">
            <option value="petrol">petrol</option>
            <option value="diesel">diesel</option>
            <option value="cargo">cargo</option>
            <option value="electric">electric</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>numberOfSeats</Form.Label>
          <Form.Select value={car.numberOfSeats} onChange={handleChange} name="numberOfSeats">
            <option value="4/5">4/5</option>
            <option value="6/7">6/7</option>
            <option value="cargo">cargo</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Picture (Link)</Form.Label>
          <Form.Control type="text" placeholder="picture" onChange={onInputChange} value={car.picture} name="picture"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Price per day in EUR</Form.Label>
          <Form.Control type="text" placeholder="enterPhone" onChange={onInputChange} value={car.pricePerDay} name="pricePerDay"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
}