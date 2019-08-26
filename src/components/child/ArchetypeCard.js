import React from 'react';

const ArchetypeCard = (props) => {
  return (
    <div>
      <h2 className="ui header">{ props.archetype }</h2>
      <div className="ui two cards">
        <a className="card">
          <div className="image">
            <img src={ props.maleImage } />
          </div>
        </a>
        <a className="card">
          <div className="image">
            <img src={ props.femaleImage } />
          </div>
        </a>
      </div>
      <p>{ props.description }</p>
    </div>
  )
}

export default ArchetypeCard