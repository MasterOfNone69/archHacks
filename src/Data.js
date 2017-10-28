import React, { Component } from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import DataDisplay from './DataDisplay';

class Data extends Component {
  constructor(props){
    super(props);
    this.state = {windowHeight: 1000, windowWidth: 300};
  }

  componentWillMount(){
    this.setState({windowHeight: window.innerHeight, windowWidth: window.innerWidth});
  }

  render(){
    return(
        <div className="pageContainer">
          <div className="staticMap" style={{backgroundImage:`url(https://maps.googleapis.com/maps/api/staticmap?size=${this.state.windowWidth}x${this.state.windowWidth}&center=${this.props.match.params.zipcode}&key=AIzaSyAQKGSHo-JvN3JCfRydHWXJiatCa4bWUis)`}}>
            <div className="locationTitle">{this.props.match.params.zipcode}</div>
          </div>
          <Scrollbars style={{ width: '100vw', height: '100vh' }} autoHide>
            <div className="dataContent">
              <Grid fluid>
                <Row>
                  <Col lg={2} md={2} sm={1} xs={0}>
                    <Button className="searchAgainButton" onClick={() => this.props.history.push(`/`)}>Search Again</Button>
                  </Col>
                  <Col lg={8} md={8} sm={10} xs={12}>
                    <DataDisplay />
                  </Col>
                  <Col lg={2} md={2} sm={1} xs={0} />
                </Row>
              </Grid>
            </div>
          </Scrollbars>
        </div>
    );
  }
}

export default Data;