import React from 'react'
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { ListGroup,ListGroupItem } from 'react-bootstrap';

export default function Desc({movies}) {
  
  const params=useParams();
  let identifiant= Number(params.id);
  const resultat = movies.find( el => el.id === identifiant);
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={resultat.posterUrl}/>
      <Card.Body>
        <Card.Title>{resultat.title}</Card.Title>
        <Card.Text>
         
        </Card.Text>
       
      </Card.Body>
    </Card>
    <ListGroup className="list-group-flush">
          <ListGroupItem><div width='50%'>
          <Card.Title>Trailer</Card.Title>   
    <iframe
     title="trailer" 
      width='1000'
      height="500"
       src={resultat.trailer}
       allowFullScreen
       />
</div></ListGroupItem>
         
        </ListGroup>


    </div>
  )
}
