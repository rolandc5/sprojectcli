import React, { Component } from 'react';
import axios from 'axios';

import * as Props from './Props';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      stub: 0,
      windowWidth: window.innerWidth,
      error: '',
      id: '',
    }
  }

  handleStubs = (e) => {
    let list = this.state.projects.length;
    if (e === undefined || list === 0) return;
    let fetched = e.length;
    let divisible = 4;
    let count = 0;
    if (this.state.windowWidth <= 1407) {
      divisible = 3;
    }
    if (this.state.windowWidth <= 1055) {
      divisible = 2;
    }
    if (this.state.windowWidth <= 703) {
      divisible = 1;
    }
    if (list === 0) {
      while (fetched % divisible !== 0) {
        count++;
        fetched++;
      }
    }
    while (list % divisible !== 0) {
      count++;
      list++
    }
    this.setState({ stub: count });
  }

  handleResize = (e) => {
  	this.setState({ windowWidth: window.innerWidth });
    this.handleStubs();
  };

  componentDidMount = () => {
    let id = window.location.href.split('=')[1];
    if (id !== undefined) {
      this.setState({ id: id });
    }
  	window.addEventListener('resize', this.handleResize);
    axios.get('https://showabledb.herokuapp.com/getProject')
      .then(response => {
        this.setState({ projects: response.data.reverse() }, () => {
           this.handleStubs(response.data);
          return;
        });
      })
      .catch(err => {
        this.setState({ error: 'failed' }, () => {;
          return;
        })
      })
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize);
  };


  render = () => {
    return (
      <div className='p-container'>
        <div style={{ height: "4em" }}/>
        <div className='p-wrapper'>
          <div>
            <div className='p-projectsContainer'>
              { this.state.projects.length !== 0 ? <Props.ProjectListProps projects={ this.state.projects } stub={ this.state.stub } id={ this.state.id }/> : this.state.error === 'failed' ? <div className='p-failed-loading'>Failed to load items, refresh page or try again later</div> : <div className='p-failed-loading'></div> }
            </div>
          </div>
        </div>
        <div style={{ height: "4em" }}/>
      </div>
    )
  }
}
