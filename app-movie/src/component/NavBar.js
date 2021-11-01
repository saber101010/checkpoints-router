   import {Nav,Navbar,Form,FormControl,Button,Container} from 'react-bootstrap'
   import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

   function NavBar({getSearch,getRating}){

    const ratingChanged = (newRating) => {
     getRating(newRating);
    };

       return(
           <div>
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/" >Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
       
      </Nav>
      <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
     
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => getSearch(e.target.value)}
        />
        <Button variant="outline-success"
        
        >Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
           </div>
       )
   }

   export default NavBar