import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    response: {}
  };
  gonder= ()=>{
    axios.post('/api/iletisim',
    {
      "name":"vey",
      "email":"veysi@gmail.com",
      "konu":"vey",
      "message":"vey",
    }
    )
  }

  componentDidMount() {
    axios.get('/api/iletisim').then((res) => {
      const response = res.data;
      this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from the frontend!</h1>
        <h1>{this.state.response.body}</h1>
        <button onClick={this.gonder}>gonder</button>
      </div>
    );
  }
}

export default App;