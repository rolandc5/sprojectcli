import React from 'react';
import { Link } from 'react-router-dom';
import './Global.css';

const ProjectListProps = (props) => {
  let stub = props.stub;
  if (props.id !== '') stub++;
  return (
    <div>
      <ul className='p-projectList'>
        { props.projects.map((value, i) => {
            return (
              <div key={i}>
                { props.id === value._id ? null :
                <li className='p-iProjectContainer'>
                  <Link className='p-linkStyle' to={`/project?id=${value._id}`} onClick="window.location.reload()">
                    <div className='p-project'>
                       <div className='p-pictureContainer'>
                        <img className='p-picture' src={ value.picture } alt=''/>
                       </div>


                   </div>
                </Link>

                <div className='p-avatarContainer'>
                  <div style={{ width: '2em'}}/>
                  <img className='p-avatar' src={ require('./img/avatar2.png') } alt=''/>
                  <div style={{ width: '.5em'}}/>
                  <div className='p-createdByName'>{ value.createdBy }</div>
                </div>
              </li>
              }
            </div>
            )
        })}
        { stub >= 1 ? <li className='p-stubProject'><div></div></li> : null }
        { stub >= 2 ? <li className='p-stubProject'><div></div></li> : null }
        { stub >= 3 ? <li className='p-stubProject'><div></div></li> : null }
      </ul>
    </div>
  )
}

export {
  ProjectListProps,
}

/*
<div className='p-titleContainer'>
   <div className="p-title">
     <span>{ value.projectName }</span>
   </div>
</div>
</div>
*/
