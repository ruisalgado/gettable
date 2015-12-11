import React, { Component } from 'react';
import { Link } from 'react-router';
import RequestsList from '../components/RequestsList';
import RequestEditor from '../components/RequestEditor';

export default class HomePage extends Component {
  render() {
    return (
      <div id="main">
        <Link className="btn new-request" to='/new'>New request</Link>
        <RequestsList/>
      </div>
    );
  }
}
