import React, { Component } from 'react';
import axios from 'axios';
import Projects from './Projects';
import 'animate.css';

export default class DisplayProject extends Component {
  constructor() {
    super();
    this.state = {
      project: {},
      loading: 0
    }
  }

  handleLink = () => {
    let id = window.location.href.split('=')[1];
    axios.put('https://showabledb.herokuapp.com/getOne', { id })
      .then(response => {
        this.setState({ project: response.data, loading: 1 });
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount = () => {
    this.handleLink();
  };

  componentWillMount = () => {
    this.handleLink ();
  }

  render = () => {
    return (
      <div className='d-container'>
        <div style={{ height: "4em" }}/>
        <div className='d-wrapper'>
          { this.state.loading === 0 ? <div  style={{ height: 1000 }}/> :
          <div className='d-projectContainerCentered'>
            <div className='d-projectContainer'>

              <div className='d-topContainer'>

                <div className='d-titleContainer'>
                  <div className='d-projectName'>{ this.state.project.projectName }</div>
                  <header> By: { this.state.project.createdBy } </header>
                </div>

                <div style={{ width: "100%" }}/>

                <div className='d-bottonContainer'>
                  <button className='d-button'> Save </button>
                  <div style={{ width: 5 }}/>
                  <button className='d-button'> Like </button>
                </div>

              </div>

              <div style={{ textAlign: 'center'}}>
                <img className='d-picture' src={ this.state.project.picture } alt='not found'/>
              </div>

              <div className='d-bottomContainer'>

                <div className='d-leftInfo'>
                   { this.state.project.projectInfo }
                </div>

                <div style={{ width: '2em' }}/>

                <div className='d-rightInfo'>
                  <div className='d-links'>
                    <a className='d-linkStyle' href={ this.state.project.link }> Link </a>
                    <div style={{ width: '1em' }}/>
                    <a className='d-linkStyle' href={ this.state.project.github }> code </a>
                  </div>
                  <div style={{ height: '0.5em' }}/>
                  <div>
                    { this.state.project.tags }
                  </div>
                </div>

              </div>

            </div>
          </div>
        }
        <Projects/>
        </div>
        <div style={{ height: "4em" }}/>
      </div>
    )
  }
}
