import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {Grid, Col, Row, PageHeader} from 'react-bootstrap';

class DataDisplay extends Component {

  render() {
    console.log(this.props);
    return (
        <div className="dataContentInner">
          <Grid fluid>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <PageHeader>
                  Environmental Risk Factors
                </PageHeader>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12} sm={12}>
                <Bar data={{
                  labels: ["Water Quality", "Air Quality", "Land Quality", "Built Quality", "Social Quality", "Overall Quality", "Superfund Sites"],
                  datasets: [{
                    label: this.props.data.city.city,
                    data: [this.props.data.city.waterEQI, this.props.data.city.airEQI, this.props.data.city.landEQi, this.props.data.city.builtEQI, this.props.data.city.socialEQI, this.props.data.city.totalEQI, this.props.data.city.superfundSites],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                    ],
                    borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                    ],
                    borderWidth: 1
                  },{
                    label: this.props.data.city.state,
                    data: [this.props.data.state.waterEQI, this.props.data.state.airEQI, this.props.data.state.landEQi, this.props.data.state.builtEQI, this.props.data.state.socialEQI, this.props.data.state.totalEQI, this.props.data.state.superfundSites],
                    backgroundColor: [
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                    ],
                    borderColor: [
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                  },{
                    label: "United States",
                    data: [this.props.data.country.waterEQI, this.props.data.country.airEQI, this.props.data.country.landEQi, this.props.data.country.builtEQI, this.props.data.country.socialEQI, this.props.data.country.totalEQI, this.props.data.country.superfundSites],
                    backgroundColor: [
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                    ],
                    borderColor: [
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                    ],
                    borderWidth: 1
                  }]
                }} />

              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12}>
                <PageHeader>
                  Mortality
                </PageHeader>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12} sm={12}>
                <Bar data={{
                  labels: ["Heart", "Respiratory", "Injury", "Stroke", "Cancer"],
                  datasets: [{
                    label: this.props.data.city.city,
                    data: [this.props.data.city.Heart, this.props.data.city.Resp, this.props.data.city.Injury, this.props.data.city.Stroke, this.props.data.city.Cancer],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                      'rgba(255, 99, 132, 0.9)',
                    ],
                    borderColor: [
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                      'rgba(255,99,132,1)',
                    ],
                    borderWidth: 1
                  },{
                    label: this.props.data.city.state,
                    data: [this.props.data.state.Heart, this.props.data.state.Resp, this.props.data.state.Injury, this.props.data.state.Stroke, this.props.data.state.Cancer],
                    backgroundColor: [
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                      'rgba(54, 162, 235, 0.9)',
                    ],
                    borderColor: [
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                  },{
                    label: "United States",
                    data: [this.props.data.country.Heart, this.props.data.country.Resp, this.props.data.country.Injury, this.props.data.country.Stroke, this.props.data.country.Cancer],
                    backgroundColor: [
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                    ],
                    borderColor: [
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                      'rgba(255, 206, 86, 0.9)',
                    ],
                    borderWidth: 1
                  }]
                }} />

              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

export default DataDisplay;
