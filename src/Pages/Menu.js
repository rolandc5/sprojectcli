import React, { Component } from 'react';

export default class Menu extends Component {
    handleCreateButton = () => {
        console.log('hello');
    }
    render() {
        return (
            <div className='n-container'>
                <div className='n-wrapper'>
                    <div className='n-navContainer'>
                        <div className='n-leftNav'>
                            <span>
                                <div className='n-bar'/>
                                <div style={{ height: 2 }}/>
                                <div className='n-bar'/>
                                <div style={{ height: 2 }}/>
                                <div className='n-bar'/>
                            </span>
                            <span className='n-menu'>menu</span>
                        </div>
                        <div className='n-rightNav'>
                            <div className='n-loginButton'>
                                <img className='p-avatar' src={ require('./img/avatar2.png') } alt=''/>
                            </div>
                            <div className='n-submitButton' onClick={ (e) => this.handleCreateButton(e) }>
                                submit your project!
                            </div>
                        </div>
                        <div className='n-titleContainer'>
                            <a className='n-title' href='/'>showabel</a>
                        </div>
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
