import React, { Component } from 'react';
import Books from './Components/Books';
import Header from './Components/Header';
import SearchInput from './Components/SearchInput';

import {Grid, Col, Row} from 'react-bootstrap';
import axios from 'axios';
import './App.css';



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      books: [],
      text: 'Harry Potter'
    }
  }

  componentWillMount(){
    this.getBooks();
  }

  getBooks(){
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.text
    })
    .then( (response) => {
      this.setState({
        books: response.data.items
      }, () => {
        console.log(this.state);
      })
    })
    .catch ( (error) => {
      console.log(error);
    })
  }

  handleChange(text){
    console.log("press");
    this.setState({
      text: text
    }, () => {
      this.getBooks();
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <SearchInput value={this.state.text} onChange={this.handleChange.bind(this)} />
              <Books books={this.state.books}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
