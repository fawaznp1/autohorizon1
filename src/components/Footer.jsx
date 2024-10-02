import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
            <MDBIcon fab icon='facebook-f' />
            
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='/' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' placeholder='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            
            Auto Horizon is a dynamic blog page dedicated to exploring the latest trends, technologies, and innovations in the automotive world. It offers in-depth insights and engaging content for car enthusiasts and industry followers alike.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  FAQ
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Terms n conditions
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                     Privacy policy
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Legal information
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    AutoHorizon@info.com
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    +91 9876543210
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    0490 2 456 789
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    https://goo.gle.maps
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Download Our App</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                  <i class="me-2 fa-brands fa-google-play"></i> playstore
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  <i class="me-2 fa-brands fa-apple fa-lg"></i>appstore
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  <i class="me-2 fa-brands fa-windows"></i> desktop
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                  <i class="me-3 fa-solid fa-laptop"></i>MacOS
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Brand Partners</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Amana Toyota
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Popular Maruti
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Bharat Benz
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Samsung
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='www.linkedin.com/in/fawaznp1' target='_blank'>
          fawaznp1
        </a>
      </div>
    </MDBFooter>
  );
}