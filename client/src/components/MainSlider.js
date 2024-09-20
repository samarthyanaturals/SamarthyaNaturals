import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import one from './../components/Layout/image/5.png'
import two from './../components/Layout/image/6.png'
import three from './../components/Layout/image/3.png'
import four from './../components/Layout/image/7.png'

const MainSlider = () => {
  return (
    <div style={{display:'block'}}>
            <Carousel>
      <Carousel.Item interval={1000}>
      <div       
      style={{
        backgroundColor:'#e2f9ce',
        backgroundImage: `url(${one})`,
        height: '80vh',
        width:'100vw', // You can adjust the height and other styles as needed
        backgroundSize: '100vw 80vh', // This ensures the image contains the whole div
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat' // This centers the image in the div
      }}></div>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div       
      style={{
        backgroundColor:'#e2f9ce',
        backgroundImage: `url(${two})`,
        height: '80vh',
        width:'100vw', // You can adjust the height and other styles as needed
        backgroundSize: '100vw 80vh', // This ensures the image contains the whole div
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat' // This centers the image in the div
      }}></div>

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <div       
      style={{
        backgroundColor:'#e2f9ce',
        backgroundImage: `url(${three})`,
        height: '80vh',
        width:'100vw', // You can adjust the height and other styles as needed
        backgroundSize: '100vw 80vh', // This ensures the image contains the whole div
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat' // This centers the image in the div
      }}></div>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <div       
      style={{
        backgroundColor:'#e2f9ce',
        backgroundImage: `url(${four})`,
        height: '80vh',
        width:'100vw', // You can adjust the height and other styles as needed
        backgroundSize: '100vw 80vh', // This ensures the image contains the whole div
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat' // This centers the image in the div
      }}></div>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default MainSlider