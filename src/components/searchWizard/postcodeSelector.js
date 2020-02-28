import React, { Component } from 'react';
import {
  InputGroup, FormControl, Col, Button,
} from 'react-bootstrap';

class PostcodeSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Col sm={3} className="mx-auto">
        <InputGroup className="mb-2">
          <FormControl
            id="postcodeInput"
            placeholder="MK6 4LF"
            aria-label="search"
            aria-describedby="Postcode"
          />
          <InputGroup.Prepend>
            <Button variant="success">
              Submit
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Col>
    );
  }
}


export default PostcodeSelector;
