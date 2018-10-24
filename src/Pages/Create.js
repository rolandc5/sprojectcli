import React, { Component } from 'react';
import axios from 'axios';


const CLOUDINARY_UPLOAD_PRESET = 'gisk1vl6'
const CLOUDINARY_CLOUD_NAME = 'dbquvargx'
const CLOUDINARY_API_KEY = '236448318463957'

export default class Create extends Component {
    constructor() {
        super();
        this.state = {
        projectName: '',
        createdBy: '',
        picture: '',
        pictureLink: '',
        projectInfo: '',
        sent: 0,
        link: '',
        github: '',
        tags: [],
        pressed: 0,
        error: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleInput(e) {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'tags') {
            let tags = value.split(',');
            this.setState({ [name]: tags });
            return;
        }
        if (e.target.files !== null) {
            this.setState({ picture: e.target.files });
            return;
        }
        this.setState({ [name]: value });
    }

    fileUpload(e) {
        let a = this.state;
        const urls = [];
        const formData = new FormData()
        formData.append('file', e[0])
        formData.append('api_key', CLOUDINARY_API_KEY)
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
        formData.append('timestamp', (Date.now() / 1000) | 0)
        axios.post(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
        formData, { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        .then((response) => {
            axios.post('https://showabledb.herokuapp.com/createProject', { projectName: a.projectName, createdBy: a.createdBy, picture: response.data.secure_url, projectInfo: a.projectInfo, link: a.link, github: a.github, tags: a.tags })
            .then(response => {
                this.setState({ pressed: 2 }, () => {
                console.log(this.state.pressed);
                })
            })
            .catch(err => {
                console.log(err, JSON.stringify(err));
            });
        })
        .catch(err => {
            console.log(JSON.stringify(err), err.response.data.error);
        })
        }

    handleSend() {
        let a = this.state;
        if (!a.projectName || !a.createdBy || !a.picture ||!a.projectInfo || !a.link || !a.github || !a.tags) {
            this.setState({ error: 'Input required fields' });
            return;
        };
            this.setState({ pressed: 1 }, () => {
            this.fileUpload(a.picture);
        })
    }

    render = () => {
        return (
        <div className='c-container'>
            <div className='c-wrapper'>
                <div className='c-d-table'>
                    <div className='c-d-verticalMiddle'>
                        <div className='c-buttonContainer'>
                            <button> Project Info </button>
                            <button> Contributors </button>
                            <button> Media </button>
                            <button> Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

/*
axios.all(uploaded).then(() => {
  this.setState(prev => ({ fileUrls: [...prev.fileUrls, ...urls]}));
}


<div style={{ height: '4em' }}/>
        <div className='c-wrapper'>
          <div className='c-inputForm'>
            { this.state.error.length > 0 ? <span className='animated fadeIn' style={{ color: 'red' }}> All fields required for input <div style={{ height: '1em' }}/></span> : null }
            Author
            <input className='c-inputStyle' name='createdBy' placeholder='Created By' onChange={ this.handleInput }/>
            Project Contents
            <input className='c-inputStyle' name='projectName' placeholder='Project Name' onChange={ this.handleInput }/>
            Picture:
            <input className='c-uploadStyle' id='file-1' type="file" name="picture" accept="image/png, image/jpeg" onChange={ this.handleInput }/>
            <input className='c-inputStyle' type='textarea' name='projectInfo' placeholder='Project Information' onChange={ this.handleInput }/>
            <input className='c-inputStyle' name='link' placeholder='Link' onChange={ this.handleInput }/>
            <input className='c-inputStyle' name='github' placeholder='Github' onChange={ this.handleInput }/>
            <input className='c-inputStyle' name='tags' placeholder='tags (separated by commas)' onChange={ this.handleInput }/>
            <div className='c-buttonP'>
              { this.state.pressed === 0 ? <button className='c-inputStyle' onClick={ this.handleSend }> Save </button> : null }
              { this.state.pressed === 1 ? <button className='c-inputStyle'> Saving </button> : null }
              { this.state.pressed === 2 ? <button className='c-inputStyle'> Saved </button> : null }
            </div>
          </div>
        </div>
*/


