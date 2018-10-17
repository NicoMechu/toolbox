import React, { Component } from 'react'
import { FormControl, FormGroup, Col, ControlLabel, Button, Well, Alert } from 'react-bootstrap'
import axios from 'axios'


const req = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  }
});


export function URLEncode(parms){
    const res = new URLSearchParams();
    for (let key in parms){
      res.append(key, parms[key]);
    }
    return res
}

class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      value:'',
      response:'',
      error:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(){
    req.post('echo', URLEncode({ echo: this.state.value })).then( response => {
      this.setState({
        error:'',
        response:response.data.response
      })
    }).catch( error => {
      this.setState({
        error: error,
        response:''
      })
    })
  }

  render() {
    return (
      <div className="app">
        <div className="header">  
        <img src="logo.png" style={{margin:'12px'}} heigth='30px' alt=""/></div>
        <div className="body">
          <div className='input-box'>
            <FormGroup controlId="formHorizontal">
              <Col sm={10}>
                <FormControl type="text" placeholder="Enter your text" onChange={this.handleChange}/>
              </Col>
            </FormGroup>
            <Button bsStyle="primary" onClick={this.handleSubmit} >Send</Button>
          </div>

          <Well>{this.state.response}</Well>
          {this.state.error? ( 
            <Alert bsStyle="danger">
              <strong>Ups!</strong><br/>
              {this.state.error.message}
            </Alert>
           ):''
          }
        </div>
      </div>
    );
  }
}

export default App;
