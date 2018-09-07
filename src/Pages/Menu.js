import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div className='m-container'>
        <div className='m-wrapper'>

          <div className='m-menuContainer'>
            <Link className='m-title' to='/'>SHOWABEL</Link>

            <div style={{ width: "60%" }}/>

            <nav className='m-navigation'>
              <button className='m-navButton'> Sign in </button>
              <div style={{ width: "1em" }}/>
              <button className='m-navButton'> Sign up </button>
            </nav>
          </div>



          <div className='m-bottomNav'>

          <a className='m-projectCreate' href='/create'>Create Project</a>

          </div>

        </div>
      </div>
    )
  }
}

/*
<div style={{ width: "15%"}}/>
<button className='m-navBottomButton'> ALL </button>
<div style={{ width: "1em" }}/>
<button className='m-navBottomButton'> WEB </button>
<div style={{ width: "1em" }}/>
<button className='m-navBottomButton'> MOBILE </button>
*/
