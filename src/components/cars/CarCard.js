import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './CarCard.scss';

export function CarCard({car,deleteCar}){

  const navigate = useNavigate();

  const redirectToDetails = () =>{
      navigate(`/car/${car.id}`);
  }
  const redirectToEdit = () =>{
    navigate(`/car/edit/${car.id}`);
}

  if(!car){
    return <p>no car</p>
  }
          return (
            <Card style={{ width: '18rem'}} >
              <Card.Img variant="top" src={car.picture} />
              <Card.Body>
                <Card.Title>{car.vechileType}</Card.Title>
                <Card.Text>
                 <span className='key'>
                 fuelType: 
                 </span>
                 <span className='value'>
                 {car.fuelType}
                 </span>
                </Card.Text>
                <Card.Text>
                 <span className='key'>
                 brand: 
                 </span>
                 <span className='value'>
                 {car.vehicle.brand}
                 </span>
                </Card.Text>
                <Card.Text>
                 <span className='key'>
                 model: 
                 </span>
                 <span className='value'>
                 {car.vehicle.model}
                 </span>
                </Card.Text>
                <Card.Text>
                 <span className='key'>
                 pricePerDay: 
                 </span>
                 <span className='value'>
                 {car.pricePerDay}
                 </span>
                </Card.Text>
                <div className='btn-holder'>
                <Button variant="primary" onClick={redirectToEdit}>Edit</Button>
                <Button variant="primary" onClick={()=>deleteCar(car.id)}>Delete</Button>
                <Button variant="info" onClick={redirectToDetails}>Details</Button>
                </div>
              </Card.Body>
            </Card>
          );
        }
