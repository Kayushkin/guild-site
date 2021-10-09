import React from 'react'

const IntroCard = () => {
    return <div className="card" style={{ width: '90%' }}>
        <div className="card-body">
            <h5 className="card-title mx-3">showtooltip</h5>
            <p className="card-text">(formerly Wild Turkey) is a mythic guild looking for DPS and healer players to round out our core roster.We believe in teaching our members how to play well instead of replacing them, but that doesn't mean we will be carrying anyone. We expect our members to have good attendance, show up for raid prepared, and keep a positive attitude while we slay bosses. All classes are welcome to apply, but we need healers, rdps, and warlocks in particular.
                We raid at 7-10PST Tues/Thursday.
                If this interests you, feel free to message Bnet: Xentavious#1440 or Discord: Xentavious#4505</p>
            <a href="#" className="btn">Apply</a>
        </div>
    </div>
}

export default IntroCard