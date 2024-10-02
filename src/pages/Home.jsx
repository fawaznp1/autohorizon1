import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import v2 from '../images/v2.jpg';  // Replace with actual image paths
import l1 from '../images/l1.jpg';  // Replace with actual image paths
import e1 from '../images/e5.jpg';
import d1 from '../images/h2.jpg';
import h1 from '../images/h3.jpg';
import { useNavigate, Link } from 'react-router-dom';
import './Buttonextra.css'



function ImageAndTextExample() {
  // Card styles
  const cardStyle = {
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
  };

  const imageStyle = {
    width: '100%',
    height: '250px', // Fixed height for consistency
    objectFit: 'cover', // Ensures the image covers the area without distortion
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  };

 

  
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate('/vintage'); // Navigate to the Explore component
  };
  const handleExploreClick2 = () => {
    navigate('/latest');
  };
   
  const handleExploreClick3 = () => {
    navigate('/electric');
  };
  const handleExploreClick4 = () => {
    navigate('/hybrid');
  };
  const handleExploreClick5 = () => {
    navigate('/diesel');
  };

  

  return (
    <div className="container mt-4">
      <Row className="justify-content-center">
        {/* First Card */}
        <Col md={5} className="mb-4">
          <Card className="shadow-sm" style={{ borderRadius: '15px' }}>
            <Card.Img variant="top" src={v2} style={imageStyle} />
            <Card.Body>
              <Button variant="outline-primary" className="rounded-pill mb-3" size="sm">Vintage</Button>
              <Card.Text>
                Explore the charm of vintage automobiles with detailed reviews, restoration insights, and historical journeys. Let’s dive into the past and relive the glory of classic cars together.
              </Card.Text>
            

            <button class='button2' onClick={handleExploreClick}>
                 <span> Explore
                     </span>
                </button>
            </Card.Body>
          </Card>
        </Col>

        {/* Second Card */}
        <Col md={5} className="mb-4">
          <Card className="shadow-sm" style={{ borderRadius: '15px' }}>
            <Card.Img variant="top" src={l1} style={imageStyle} />
            <Card.Body>
              <Button variant="outline-primary" className="rounded-pill mb-3" size="sm">Latest</Button>
              <Card.Text>
                Keep pace with the newest in automotive technology, from electric vehicles to groundbreaking self-driving features. Embrace the future and learn about the latest innovations.
              </Card.Text>
            
                         {/*    <button onClick={handleExploreClick2}>Explore</button> */}
                           
                <button class='button2' onClick={handleExploreClick2}>
                 <span> Explore
                     </span>
                </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Second Section */}
      <section>
        <div className="container mt-5">
          <h2 className="text-center mb-4">Explore Recent Blogs</h2>
          <p className="text-center text-muted mb-5">Stay updated with expert advice, cutting-edge insights, and practical tips for your automotive knowledge.</p>

          <Row className="justify-content-center">
            {/* Electric Topic */}
            <Col md={4} className="mb-4">
              <Card
                style={cardStyle}
                onMouseOver={e => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                onMouseOut={e => (e.currentTarget.style = cardStyle)}
              >
                <Card.Img variant="top" src={e1} style={imageStyle} />
                <Card.Body>
                  <Button variant="outline-primary" className="rounded-pill mb-3" size="sm">Electric</Button>
                  <Card.Text>
                    Discover the future of transportation with electric vehicles, and learn about the latest advancements in EV technology.
                  </Card.Text>
                  {/* <Button variant="primary" className="rounded-pill">Read More</Button> */}
                  
                    <button class="button1" onClick={handleExploreClick3}>
                        Read More
                    </button>
                </Card.Body>
              </Card>
            </Col>

            {/* Hybrid Topic */}
            <Col md={4} className="mb-4">
              <Card
                style={cardStyle}
                onMouseOver={e => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                onMouseOut={e => (e.currentTarget.style = cardStyle)}
              >
                <Card.Img variant="top" src={h1} style={imageStyle} />
                <Card.Body>
                <Link to={'/hybrid'}>  <Button variant="outline-primary" className="rounded-pill mb-3"  size="sm">Hybrid</Button></Link> 
                  <Card.Text>
                    Learn how hybrid cars are blending traditional and electric technology to reduce emissions and improve efficiency.
                  </Card.Text>
                 {/*  <Button variant="primary" className="rounded-pill" >Read More</Button> */}
                  <button class="button1" onClick={handleExploreClick4}>
                        Read More
                    </button>
                </Card.Body>
              </Card>
            </Col>

            {/* Diesel Topic */}
            <Col md={4} className="mb-4">
              <Card
                style={cardStyle}
                onMouseOver={e => (e.currentTarget.style = { ...cardStyle, ...cardHoverStyle })}
                onMouseOut={e => (e.currentTarget.style = cardStyle)}
              >
                <Card.Img variant="top" src={d1} style={imageStyle} />
                <Card.Body>
                  <Button variant="outline-primary" className="rounded-pill mb-3" size="sm">Diesel</Button>
                  <Card.Text>
                    Dive deep into the world of diesel engines and understand their power, efficiency, and applications in the automotive industry.
                  </Card.Text>
                  {/* <Button variant="primary" className="rounded-pill">Read More</Button> */}
                  
                <button class="button1" onClick={handleExploreClick5}>
                        Read More
                </button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
      <section>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <div className="container">
          <div className="row">
            {/* Google Map Section */}
            <div className="col-md-6 mb-5 mt-5">
              <h2 style={{ marginBottom: '20px' }}>Our Location</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14616381048!2d72.71602662026807!3d19.082177204217967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727808922925!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: '0', borderRadius: '8px' }}
                title="Google Map"
              ></iframe>
            </div>

            {/* Vertical Divider */}
            <div className="col-md-1 d-none d-md-block">
              <div className="vertical-divider"></div>
            </div>

            {/* YouTube Video Section */}
            <div className="col-md-5 mb-5 mt-5">
              <h2 style={{ marginBottom: '20px' }}>Watch Our Video</h2>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3FVwrVp1D7A?si=tcRGTkflEtaa7HIN"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: '0', borderRadius: '8px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default ImageAndTextExample;
