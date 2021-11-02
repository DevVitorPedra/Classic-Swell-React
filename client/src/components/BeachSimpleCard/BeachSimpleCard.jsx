import React from 'react'

export default function BeachSimpleCard(props) {
    return (
        <div className="beach-simple-card">

            <img src="" alt={`${props.beachName}`} />
            <h1>{props.beachName}</h1>
        </div>
    )
}
