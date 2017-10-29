import React, { Component } from 'react';
import {Doughnut, Radar, Polar, Bubble} from 'react-chartjs-2';
import {Grid, Col, Row} from 'react-bootstrap';
class DataDisplay extends Component {

  render(){
    console.log(this.props);
    return(
        <div className="dataContentInner">
            <Grid fluid>
              <Row>
                  <Col md={3} lg={3}>
                      <p>Here is the Donut Chart.</p>
                      <ul>
                          <li> "Learning New things" </li>
                          <li> "lots of herpes here..." </li>
                      </ul>
                  </Col>
                  <Col md={7} lg={7}>
                      <Doughnut data={{
                          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                          datasets: [{
                            label: "# of Votes",
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                              'rgba(255,99,132,1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                          }]
                        }} />

                  </Col>
              </Row>
              <Row>
                  <Col md={7} lg={7}>

                  <Radar data={{
                          labels: ["Air Quality", "Heart Disease", "STDs", "Access"],
                          datasets: [{
                            data: [
                            12, 19, 3, 5, 21,
                            ],
                            backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: [
                              'rgba(255,99,132,1)',
                            ],
                            borderWidth: 2
                          },
                          {
                            data: [
                            9, 12 , 20, 5, 14,
                            ],
                            backgroundColor: [
                              'rgba(54, 162, 235, 0.2)',
                            ],
                            borderColor: [
                              'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 2
                          }
                          ],

                        }} />

                  </Col>
                  <Col md={3} lg={3}>
                      <p>Here is the Radar Chart.</p>
                          <ul>
                              <li> "Learning New things" </li>
                              <li> "lots of herpes here..." </li>
                          </ul>
                      </Col>
              </Row>
              <Row>
                  <Col md={3} lg={3}>
                      <p>Here is the Donut Chart.</p>
                      <ul>
                          <li> "Learning New things" </li>
                          <li> "lots of herpes here..." </li>
                      </ul>
                  </Col>
                  <Col md={7} lg={7}>
                      <Polar data={{
                          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                          datasets: [{
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3],
                            backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 206, 86, 0.2)',
                              'rgba(75, 192, 192, 0.2)',
                              'rgba(153, 102, 255, 0.2)',
                              'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                              'rgba(255,99,132,1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255, 206, 86, 1)',
                              'rgba(75, 192, 192, 1)',
                              'rgba(153, 102, 255, 1)',
                              'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                          }]
                        }} />

                  </Col>
              </Row>
              <Row>
                  <Col md={7} lg={7}>

                  <Bubble data={{
                          labels: ["Red", "Blue"],
                          datasets: [{
                            data: [
                              {x: 12, y: 5, r: 10},
                              {x: 4, y: 7, r: 15},
                              {x: 10, y: 20, r: 20},
                              {x: 8,y: 8,r: 8},
                            ],
                            backgroundColor: [
                              'rgba(255, 99, 132, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(54, 162, 235, 0.2)',
                              'rgba(255, 99, 132, 0.2)',
                            ],
                            borderColor: [
                              'rgba(255,99,132,1)',
                              'rgba(54, 162, 235, 1)',
                              'rgba(255,99,132,1)',
                              'rgba(54, 162, 235, 1)',
                            ],
                            borderWidth: 1
                          }]
                        }} />
                  </Col>
                  <Col md={3} lg={3}>
                      <p>Here is the Radar Chart.</p>
                          <ul>
                              <li> "Learning New things" </li>
                              <li> "lots of herpes here..." </li>
                          </ul>
                      </Col>
              </Row>
            </Grid>
        </div>
    );
    

  }

}
  export default DataDisplay;
