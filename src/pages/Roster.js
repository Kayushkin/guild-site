import React from 'react';
import CharacterCard from '../components/CharacterCard'
import { fakeData } from '../data/fakeData'

const Roster = () => {
    return <div className="row">
        {fakeData.map(data => {
            return <CharacterCard {...data} />
        })}
    </div>
}

export default Roster