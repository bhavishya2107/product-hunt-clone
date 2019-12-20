import React from 'react'

const Makers = () => {
    return (
        <div className="makers-container">
            <p className="makers-container-para">Makers working today</p>
            <div>
                {['1', '2', '3', '4', '5', '6'].map((user, index) => (
                    <img
                        src={`images/i${index + 1}.jpeg `}
                        alt=""
                    />
                ))}
            </div>
        </div>
    )
}

export default Makers