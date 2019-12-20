import React from 'react'
import Header from './header'
import MainSectionJobs from './main-section-left'
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
                                image:"https://ph-files.imgix.net/ca3aa0f8-45cf-47d3-a10f-900476ccab68?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                                title:"The Offix",
                                text:"Full-stack Engineer/ Product Engineer with a passion for machine learning/big data",
                                comments:"share",
                                country:"India"
                            },

                            {
                                image:"https://ph-files.imgix.net/ca3aa0f8-45cf-47d3-a10f-900476ccab68?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                                title:"The Offix",
                                text:"Full-stack Engineer/ Product Engineer with a passion for machine learning/big data",
                                comments:"share",
                                country:"India"
                            },
                            {
                                image:"https://ph-files.imgix.net/ca3aa0f8-45cf-47d3-a10f-900476ccab68?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                                title:"The Offix",
                                text:"Full-stack Engineer/ Product Engineer with a passion for machine learning/big data",
                                comments:"share",
                                country:"India"
                            },

                            {
                                image:"https://ph-files.imgix.net/47041b9e-82b7-4af9-981b-113ff49959e5?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                                title:"The Offix",
                                text:"Full-stack Engineer/ Product Engineer with a passion for machine learning/big data",
                                comments:"share",
                                country:"India"
                            },

                            {
                                image:"https://ph-files.imgix.net/ca3aa0f8-45cf-47d3-a10f-900476ccab68?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fill-color=fff&fit=fillmax&fill=solid",
                                title:"The Offix",
                                text:"Full-stack Engineer/ Product Engineer with a passion for machine learning/big data",
                                comments:"share",
                                country:"India"
                            }
                        ].map(profile => (
                            <MainSectionJobs {...profile} />
                        ))}
                    </div>
                </div>
                <div className="main-section-right">
                    <MainSectionRight />
                </div>
            </div>
    )

}

export default Jobs;