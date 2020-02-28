import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Joyride from 'react-joyride';
import {
  Container, Row, Col, Button, Jumbotron, Image,
} from 'react-bootstrap';

import Intro from './components/Intro';
import SearchWizard from './components/searchWizard/searchWizard';
import Logo from './TTHSLogo.png';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tourDecision: null,
      run: false,
      steps: [
        {
          target: '#startButton',
          content:
            'Initially you can chose to either search within a specific shop or items across all shops, choose one now to continue.',
        },
      ],
    };
  }

  startTour() {
    this.setState({ tourDecision: true, run: true });
  }

  declineTour() {
    this.setState({ tourDecision: false, run: false });
  }

  render() {
    // I've done inline logic on this for now, probably refactor so we figure out what Component to display here.

    const { steps, run, tourDecision } = this.state;
    return (
      <div className="App">
        <Container className="outer-container align-items-center">
          <Container className="inner-container">
            <Jumbotron className="intro-jumbotron">
              <Row className="justify-content-center">
                <Image className="logo" src={Logo} roundedCircle />
              </Row>
              <Joyride
                callback={(s) => console.log(s)}
                steps={steps}
                run={run}
                scrollToFirstStep
                showProgress
              />
              {tourDecision === null ? (
                <Intro
                  startTour={this.startTour.bind(this)}
                  declineTour={this.declineTour.bind(this)}
                /> // TERNARY ELSE
              ) : (
                <SearchWizard />
              )}
            </Jumbotron>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
