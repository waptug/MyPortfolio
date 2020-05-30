import React, { Component } from 'react';
    import axios from 'axios';

    class UserForm extends Component {
      constructor() {
        super();
        this.state = {
          fname: '',
          lname: '',
          email: '',
          message: '',
        };
      }

      onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state 
        */
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { fname, lname, email, message } = this.state;

        axios.post('/', { fname, lname, email, message })
          .then((result) => {
            //access the results here....
          });
      }

      render() {
        const { fname, lname, email, message } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <input
            type="text"
            name="message"
            value={message}
            onChange={this.onChange}
          />
            <button type="submit">Submit</button>
          </form>
        );
      }
    }