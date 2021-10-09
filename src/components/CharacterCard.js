import React from 'react'
import wowPlayer from '../assets/wowPlayer.jpg'

const CharacterCard = ({ name, _class, age, location }) => {
    return <div className="card" style={{ width: '18rem' }}>
        <img src={wowPlayer} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">This guy fucking sucks.</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Class: {_class}</li>
            <li className="list-group-item">Age: {age}</li>
            <li className="list-group-item">Location: {location}</li>
        </ul>
        <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
        </div>
    </div>
}

export default CharacterCard