import React from 'react'
import '../styles/style.scss'

const MainSectionJobs = props => {
    return (
        <div className="container">
            <div className="container-img">
                <img src={props.image} alt="" width="80px" height="80px" />
            </div>
            <div className="container-content">
                <p>{props.title}</p>
                <p>{props.text}</p>
                <span className="comments">{props.comments}</span>
            </div>
            <div className="container-up-vote">
                <p>{props.country}</p>
            </div>
        </div>
    )
}

export default MainSectionJobs