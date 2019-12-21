import React from 'react'
import Header from './header'
import MainSectionJobs from './main-section-jobs'
import MainSectionRight from './main-section-right'

import '../styles/style.scss'

const Upcoming = () => {
    return (
        <div>
            <Header />
            <div className="main">
                <div className="main-left-container">
                    <div className="popular-this-month">
                        <p className="popular-heading">Popular Upcoming Products</p>
                    </div>
                    {[
                        {
                            image: "https://ph-files.imgix.net/193a1f93-eda6-4bcd-b387-91a28f8df54f?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Subscribe"
                        },

                        {
                            image: "https://ph-files.imgix.net/b21c9cff-c65e-4942-aac9-3f9c5600eea7?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Subscribe"
                        },
                        {
                            image: "https://ph-files.imgix.net/ba337174-d3a2-4323-b0c8-43709c8643ae?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Subscribe"
                        },

                        {
                            image: "https://ph-files.imgix.net/6cf24e4d-e094-4137-b210-5ce6211f8a37?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Subscribe"
                        },

                        {
                            image: "https://ph-files.imgix.net/bcd0e907-33fe-4e5b-92fd-69201921f85a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
                            title: "The Offix",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Subscribe"
                        },
                        {
                            image: "https://ph-files.imgix.net/981dc16d-6453-4e3b-979f-77df6f0e11f7?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
                            title: "Now/Next",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Subscribe"
                        },
                        {
                            image: "https://ph-files.imgix.net/58321d43-b73d-4db1-a73c-99203f17e524?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bm=normal&bf=max&bh=40&bw=40",
                            title: "Now/Next",
                            text: "Full-stack Engineer/ Product Engineer",
                            comments: "share",
                            upVotes: "Subscribe"
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

export default Upcoming;