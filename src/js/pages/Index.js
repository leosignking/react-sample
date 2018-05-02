import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <Header location={ location }/>
        <div class="container">
          <div class="page-header">
            <div class="row">
              <div class="col-lg-8 col-md-7 col-sm-6">
              <h1>CoinBase Replica</h1>
              <p class="lead">A Bold Attempt</p>
              </div>
            </div>
          </div>
          <div class="row">
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
