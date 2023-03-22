import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

class Services extends Component{
    render() {
      return (
        <div className='m-5'>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="Services.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossOrigin="anonymous" />
          <title>Choose Service</title>
          <br />
          <h1 style={{color: 'rgb(50, 113, 239)', textAlign: 'center'}}>Our Services</h1>
          <br />
          <div className="row image ">
            <div className="col-md-4 border" style={{textAlign: 'center'}}>
              <h2>Medical</h2>
              <img src="https://www.childrensomaha.org/wp-content/uploads/2020/01/2388777_s-e1579283726922.jpg" className="img-responsive" width={250} height={250} />
              <p />
              <button onclick="myFunction1()" className="btn btn-secondary" type="submit">Detail</button>
              <p id="run1" />
              <p id="run2" />
              <p id="run3" />
              <button onclick="button1()" className="btn btn-primary" type="submit">Choose Service</button>
              <p id="demo1" />
            </div>
            <div className="col-md-4 border" style={{textAlign: 'center'}}>
              <h2>Activity</h2>
              <img src="https://raisingchildren.net.au/__data/assets/image/0028/48727/activities-for-school-kids-2narrow.jpg" className="img-responsive" width={250} height={250} />
              <p />
              <button onclick="myFunction2()" className="btn btn-secondary" type="submit">Detail</button>
              <p id="run4" />
              <p id="run5" />
              <button onclick="button2()" className="btn btn-primary" type="submit">Choose Service</button>
              <p id="demo2" />
            </div>
            <div className="col-md-4 border" style={{textAlign: 'center'}}>
              <h2>Education</h2>
              <img src="https://media-whichmedia.s3.ap-southeast-1.amazonaws.com/media/large/6/0/60b53e92575d.jpeg" className="img-responsive" width={250} height={250} />
              <p />
              <button onclick="myFunction3()" className="btn btn-secondary" type="submit">Detail</button>
              <p id="run6" />
              <p id="run7" />
              <p id="run8" />
              <p id="run9" />
              <button onclick="button3()" className="btn btn-primary" type="submit">Choose Service</button>
              <p id="demo3" />
            </div>
            <div className="col-md-12" style={{textAlign: 'center'}}>
              <br />
              <button className="btn btn-info" type="submit">Save</button>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Services;