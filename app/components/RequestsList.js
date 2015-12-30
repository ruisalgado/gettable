import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class RequestListItem extends Component {
  render() {
    const request = this.props.request;

    return (
      <article className="request">
        <Link to={`/projects/${request.projectId}/requests/${request.id}`}>
          <span className={'method ' + request.method.toLowerCase() }>{ request.method }</span>
          { request.name }
        </Link>
      </article>
    );
  }
}

class ProjectListItem extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="project">
        <div className="project-details">
          <span>{project.name}</span>
          <Link className="new-request" to={`/projects/${project.id}/requests/new`}>New request</Link>
        </div>
        {project.requests.map((request, index) =>
          <RequestListItem key={index} request={request}/>
        )}
      </div>
    );
  }
}

class RequestsList extends Component {
  static propTypes = {
    requests: PropTypes.array
  };

  render() {
    const { dispatch, projects } = this.props;
    return (
      <div id="requests">
        {this.props.projects.map((project, index) =>
          <ProjectListItem key={index} project={project}/>
        )}
      </div>
    );
  }
}

function select(state) {
  return {
    projects: state.projects
  }
}

export default connect(select)(RequestsList)
