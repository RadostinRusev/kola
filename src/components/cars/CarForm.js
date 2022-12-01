
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CarFrom.scss'
import {useEffect, useState} from 'react';
import { getCarById, saveCar } from '../../utils/http-utils/user-requests';
import { useNavigate, useParams } from 'react-router-dom';
export function CarFrom(){

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
        if(car.constuctionYear<1970){
            alert("car Too old should be newer then 1970");
            return;
        }
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
          <Form.Control type="text" placeholder="Enter brand" value={car.vehicle.brand} onChange={onInputChange} name="brand" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>model</Form.Label>
          <Form.Control type="text" placeholder="Enter model" onChange={onInputChange} value={car.vehicle.model} name="model"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>constuctionYear</Form.Label>
          <Form.Control type="number" placeholder="enter construction year" onChange={onInputChange} value={car.vehicle.constuctionYear} name="constuctionYear"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>fuelType</Form.Label>
          <Form.Select value={car.fuelType} onChange={handleChange} name="fuelType">
            <option value="petrol">petrol</option>
            <option value="diesel">diesel</option>
            <option value="hybrid">hybrid</option>
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
          <Form.Control type="text" placeholder="price" onChange={onInputChange} value={car.pricePerDay} name="pricePerDay"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Number of Cars avadable</Form.Label>
          <Form.Control type="text" placeholder="count" onChange={onInputChange} value={car.count} name="count"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    )
}