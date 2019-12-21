import React from 'react'
import Header from './header'
import MainSectionJobs from './main-section-jobs'
import MainSectionRight from './main-section-right'
import '../styles/style.scss'

const Jobs = () => {
    return (

        <div>
            <Header />
            <div className="main">
                <div className="main-left-container">
                    <div className="popular-this-month">
                        <p className="popular-heading">Jobs</p>
                    </div>
                    {[
                        {
                            image: "https://ph-files.imgix.net/ca3aa0f8-45cf-47d3-a10f-900476ccab68?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "India"
                        },

                        {
                            image: "https://ph-files.imgix.net/4a885fb1-aa08-4688-89ef-5a4d4301bb12?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "HotJar",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Francisco"
                        },
                        {
                            image: "https://ph-files.imgix.net/ca3aa0f8-45cf-47d3-a10f-900476ccab68?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "New York"
                        },

                        {
                            image: "https://ph-files.imgix.net/47041b9e-82b7-4af9-981b-113ff49959e5?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Poland"
                        },

                        {
                            image: "https://ph-files.imgix.net/ca3aa0f8-45cf-47d3-a10f-900476ccab68?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Berlin"
                        },
                        {
                            image: "https://ph-files.imgix.net/4a885fb1-aa08-4688-89ef-5a4d4301bb12?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Remote"
                        },
                        {
                            image: "https://ph-files.imgix.net/47041b9e-82b7-4af9-981b-113ff49959e5?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer / Product Engineer",
                            comments: "share",
                            upVotes: "Mumbai"
                        },
                        {
                            image: "https://ph-files.imgix.net/4a885fb1-aa08-4688-89ef-5a4d4301bb12?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Remote"
                        },
                        {
                            image: "https://ph-files.imgix.net/852298cd-5818-4cfb-a1db-e011764e854b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Remote"
                        },  {
                            image: "https://ph-files.imgix.net/852298cd-5818-4cfb-a1db-e011764e854b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Remote"
                        }
                    ].map(profile => (
                        <MainSectionJobs {...profile} />
                    ))}
                </div>
      
            <div className="main-section-right">
                <MainSectionRight />
            </div>
            </div>
        </div>
    )

}

export default Jobs;