import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'




function MovieCard({movie}){



    return(
        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterURL} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
     {movie.description}
    </Card.Text>
    <Card.Text>{"⭐".repeat(movie.rating)}</Card.Text>
    <Link to={`/description/${movie.id}`}><Button variant="primary">Go trailer</Button> </Link>
  </Card.Body>
</Card>
        </div>


        
    )
}

export default MovieCard