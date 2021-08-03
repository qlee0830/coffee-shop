
import Accordion from "react-bootstrap/Accordion";

function MenuItem(props) {
  
  return (
    
    <div className="col mb-4">
        <div className="card">
          <img src={props.src} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <Accordion className="card-text">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>{props.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    
  );
}

export default MenuItem;
