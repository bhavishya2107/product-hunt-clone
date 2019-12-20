import React from 'react'
import '../styles/style.scss'

const MainSectionJobs = p => {
    return (
        <div className="container">
            <div className="container-img">
                <img src={p.image} alt="" width="80px" height="80px" />
            </div>
            <div className="container-content">
                <p>{p.title}</p>
                <p>{p.text}</p>
                <span className="comments">{p.comments}</span>
            </div>
            <div className="container-up-votes">
                <p>{p.upVotes}</p>
            </div>
        </div>
    )
}

export default MainSectionJobs