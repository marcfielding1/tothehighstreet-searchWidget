import React, {Component} from 'react';
import { Container, InputGroup, FormControl, Col } from 'react-bootstrap';
import {Search} from 'react-bootstrap-icons'

class SearchWizard extends Component {

    render() {
        return (
            <Col sm={8} className="mx-auto">
                <InputGroup className="mb-2">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1"><Search/></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                placeholder="I'm shopping for..."
                aria-label="search"
                aria-describedby="I'm shopping for..."
                />
            </InputGroup>
          </Col>
        )
    }
}

export default SearchWizard