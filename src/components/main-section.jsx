import React from 'react'
import MainSectionLeft from './main-section-left'


const MainSection = () => {

  return (
    <div className="main">
      <div className="popular-this-month">
        <p className="popular-heading">Popular this month</p>
        <MainSectionLeft
          image="https://ph-files.imgix.net/d437a3bc-8c67-444b-a0df-9cdcdfeb648e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
          title="Basecamp Personal"
          text="Manage all your small projects for free"
          comments="126"
          upVote="25431"
          device="Android"
        />
        <MainSectionLeft
          image="https://ph-files.imgix.net/2588ed4d-46a6-43cc-91b5-f5fe7384a063?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
          title="Basecamp Personal"
          text="Manage all your small projects for free"
          comments="126"
          upVote="25431"
          device="Android"
        />
        <MainSectionLeft
          image="https://ph-files.imgix.net/ab6cc98d-ef60-4296-b75c-75f0c145f8d8?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
          title="Basecamp Personal"
          text="Manage all your small projects for free"
          comments="126"
          upVote="25431"
          device="Android"
        />

      </div>
      <div className="today-container">
        <div className="today-conatiner-heading">
          <p>Today</p>
          <div className="today-container-heading-2">
            <div>Popular</div>
            <div>Newest</div>
          </div>
        </div>
        {[
          {
            image: "https://ph-files.imgix.net/4d44f9de-3d83-4a29-9285-a0651bc948e0?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
            title: "Basecamp Personal",
            text: "Manage all your small projects for free",
            comments: "126",
            upVote: "25431",
            device: "Android"
          },

          {
            image: "https://ph-files.imgix.net/4d44f9de-3d83-4a29-9285-a0651bc948e0?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
            title: "Basecamp Personal",
            text: "Manage all your small projects for free",
            comments: "126",
            upVote: "25431",
            device: "Android"
          },
          {
            image: "https://ph-files.imgix.net/4d44f9de-3d83-4a29-9285-a0651bc948e0?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
            title: "Basecamp Personal",
            text: "Manage all your small projects for free",
            comments: "126",
            upVote: "25431",
            device: "Android"
          },

          {
            image: "https://ph-files.imgix.net/4d44f9de-3d83-4a29-9285-a0651bc948e0?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
            title: "Basecamp Personal",
            text: "Manage all your small projects for free",
            comments: "126",
            upVote: "25431",
            device: "Android"
          },

          {
            image: "https://ph-files.imgix.net/4d44f9de-3d83-4a29-9285-a0651bc948e0?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
            title: "Basecamp Personal",
            text: "Manage all your small projects for free",
            comments: "126",
            upVote: "25431",
            device: "Android"
          }
        ].map(profile => (
          <MainSectionLeft {...profile} />
        ))}
      </div>
    </div>
  )
}

export default MainSection