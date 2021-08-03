import Carousel from 'react-bootstrap/Carousel';
import img from 'react-bootstrap';
import { DUMMY_MENUITEMS } from "./DUMMY_MENU";


function BestSeller(props) {
    return (
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            src= ""
            alt=""
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img height = {100}
            className="img-responsive center-block" width={400} height={400}
            src="https://natashaskitchen.com/wp-content/uploads/2019/08/Affogato-Coffee-Dessert-8.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default BestSeller;