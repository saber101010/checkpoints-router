import {Modal,Button,Form} from 'react-bootstrap'
import {useState} from 'react'
function Add({addMovie}) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterUrl, setPosterUrl] = useState("");
    const [rate, setRate] = useState(0);


    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        AddMovie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AddMovie</Modal.Title>
          </Modal.Header>
          <Modal.Body>Add new movie</Modal.Body>
          <Modal.Footer>

         
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter posterUrl"
                onChange={(e) => setPosterUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rate"
                onChange={(e) => setRate(e.target.value)}
              />
            </Form.Group>
          </Form>
   
   

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
             onClick={() => {
              addMovie({title,description,posterUrl,rate});
              handleClose();
            }}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 


  export default Add