import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';
const movieCard = ({ movie }) => {
  
    return (
      <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        <ReactStars
              count={5}
              isHalf={true}
              edit={false}
              value={movie.rate}
              size={24}
              activeColor="#ffd700"
            />
        </Card.Text>
       <Link to={`/Desc/${movie.id}`} ><Button variant="primary">Go somewhere</Button></Link>
      </Card.Body>
    </Card>
    </>
  );
}



export default movieCard