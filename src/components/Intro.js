
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Jumbotron, Image} from 'react-bootstrap'
import Logo from '../TTHSLogo.png'

class Intro extends Component {


    render(){
        console.log(this.refs)

        return (
            <div>
                <Row className="justify-content-center">
                    <Image className="logo" src={Logo} roundedCircle/>
                </Row> 

                <Row className="justify-content-center">
                    <p> Would you like a quick run down on how to use search on To The High Street?</p>

                </Row>
                <Row>
                    
                    <Col className="text-right">
                    <Button id="startButton" variant="success" size='lg' ref="start" onClick={() => { this.props.startTour() } }>Yes</Button>
                    </Col>

                    <Col className="text-left">
                    <Button variant="danger" size='lg'>No</Button>
                    </Col>

                </Row>
        </div>

        );
      }
}

export default Intro;