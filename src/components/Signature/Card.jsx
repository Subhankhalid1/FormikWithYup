import React from 'react'

const Card = ({ imageURL }) => {

    return (
        <div style={{ height: '400px', width: '400px' }}>
            {imageURL ? (
                <img src={imageURL} alt="my signature" style={{ display: "block", border: "1px solid black", width: "200px" }} />
            ) : null}
        </div>
    )
}

export default Card;