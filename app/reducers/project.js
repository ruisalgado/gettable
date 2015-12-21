import { OPEN_PROJECT } from '../actions/project';
import Project from './../project';

export default function project(state = null, action) {
  switch (action.type) {
    case OPEN_PROJECT:
      project = state;
      project && project.close();

      project = new Project(window.store, action.path);
      project.keepInSync();

      return project;
    default:
      return state;
  }
}