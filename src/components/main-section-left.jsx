import React from 'react'

const MainSectionLeft = props => {
    return (
        <div className="container">
            <div className="container-img">
                <img src={props.image} alt="" />
            </div>
            <div className="container-content">
                <p>{props.title}</p>
                <p>{props.text}</p>
                <span className="comments">{props.comments}</span>
                <span className="container-device">{props.device}</span>
            </div>
            <div className="container-up-vote">
                <p>▲</p>
                <p>{props.upVote}</p>
            </div>
        </div>
    )
}

export default MainSectionLeft