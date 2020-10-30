import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      name : '',
      email: '',
      message: '',
    }
  }

  handleSubmit(){

  }

  onChangeEmail(event){
    this.setState({
      email: event.target.email
    })
  }

  onChangeMessage(event){
    this.setState({
      mesage: event.target.message
    })
  }
  
  onChangeName(event){
    this.setState({
      name: event.target.name
    })
  }
  render(){
    return (
      <form id="contact-form" method="post" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail.bind(this)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
    <textarea className="form-control" rows="5" onChange={this.state.onChangeMessage}>{this.state.message}</textarea>
        </div>
        <button type="submit" className="btn btn-primary">Envoyer</button>
  
      </form>
    );
  }
 
}

export default App;
