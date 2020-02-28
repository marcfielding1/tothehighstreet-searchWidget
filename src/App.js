import React, {Component} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Joyride from 'react-joyride';
import {Container, Row, Col, Button, Jumbotron, Image} from 'react-bootstrap'


import Intro from './components/Intro'
import SearchWizard from './components/searchWizard'
import Logo from './TTHSLogo.png'

class App extends Component {
  state = {
    tourDecision: null,
    run: false,
    steps: [
      {
        target: '#startButton',
        content: 'Initially you can chose to either search within a specific shop or items across all shops, choose one now to continue.',
      },
    ]
  };

  startTour(){

      this.setState({tourDecision: true, run: true})
  }

  declineTour(){

    this.setState({tourDecision: false, run: false})
  }

  render(){
    return (
      <div className="App">
        <Container className="mainContainer align-items-center">
          <Container>
          <Jumbotron className="intro-jumbotron">
          <Row className="justify-content-center">
                    <Image className="logo" src={Logo} roundedCircle/>
                </Row> 
            <Joyride 
              callback={(s)=> console.log(s)} 
              steps={this.state.steps} 
              run={this.state.run}
              scrollToFirstStep={true}
              showProgress={true}
            />
            {
              this.state.tourDecision === null ? 
                <Intro startTour={this.startTour.bind(this)}
                      declineTour={this.declineTour.bind(this)}
              /> :                                                        // TERNARY ELSE
                <SearchWizard/>

            
            }
        
            </Jumbotron>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
