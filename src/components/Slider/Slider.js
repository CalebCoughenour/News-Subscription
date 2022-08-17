import { Carousel } from 'react-bootstrap';
import CarouselVideo from '../CarouselVideo/CarouselVideo';

function Slider() {
  return (
        <Carousel
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#192135'
          }}
          >      
            <Carousel.Item >
              <img
                className="d-block w-100"
                
                src="https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?cs=srgb&dl=pexels-pixabay-158651.jpg&fm=jpg"
                alt="Small stack of newspapers in a non-English language"
                style={{ height: "500px" }}
              />
              <Carousel.Caption style={{ 
                color: 'black',
                fontWeight: 'bolder',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
               }}>
                <h3 style={{ fontWeight: 'bolder'}}>World News Brought To You</h3>
                <p style={{ fontWeight: 'bolder'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>

            </Carousel.Item>          
          <Carousel.Item >
            
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1560177112-fbfd5fde9566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Three newspapers hanging on a brick wall"
                style={{ height: "500px" }}
              />
              <Carousel.Caption style={{ 
                color: 'black',
                fontWeight: 'bolder',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
               }}>
                <h3 style={{ fontWeight: 'bolder'}}>Second slide label</h3>
                <p style={{ fontWeight: 'bolder'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              {/* Can switch out video with image */}
              {/* <img
                className="d-block w-100 "
                src="https://images.unsplash.com/photo-1560177112-fbfd5fde9566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Three newspapers hanging on a brick wall"
              /> */}

              <CarouselVideo />
              
              <Carousel.Caption style={{ 
                color: 'black',
                fontWeight: 'bolder',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
               }}>
                <h3 style={{ fontWeight: 'bolder'}}>Third slide label</h3>
                <p style={{ fontWeight: 'bolder'}}>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  );
}

export default Slider;