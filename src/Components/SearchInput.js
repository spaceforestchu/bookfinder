import React, { Component } from 'react';
import {Well, FormControl} from 'react-bootstrap';


class SearchInput extends Component {

  constructor(props){
    super(props);

    this.state = {
      value: props.value
    }
  }

  onChange(event){
    event.preventDefault();
    this.setState({
      value: event.target.value
    });

    this.props.onChange(this.state.value);
  }


  render() {
    return (
      <Well>
        <FormControl
          type='text'
          value={this.state.value}
          placeholder='Search books...'
          onChange={this.onChange.bind(this)}
          >

        </FormControl>
      </Well>
    );
  }
}

export default SearchInput;
