import React from 'react'
import { Video } from '../../types'
import { VideoEntry } from './entry'


export const EntryTable: React.FC<{videos: Video[]}> = ({videos}) => {
    return (
        <div>
            <div className="form-background top-margin bottom-margin center-text">
                <p className="side-margin">! Links are checked with YouTube API to be actual videos when submitted, but we can't know what they actually
                    contain. If you wan't to be sure what you click, try searching on YouTube with the video title. !
                </p>
            </div>
            <section className="grid-video-entry">
                <div className="bar lighter start-f start-m"/>
                <div className="bar lighter">
                    <p>Video: </p>
                </div>
                <div className="bar">
                    <p>Channel: </p>
                </div>
                <div className="bar lighter full-screen-only">
                    <p>Link: </p>
                </div>
                <div className="bar full-screen-only">
                    <p>Most used ingredients: </p>
                </div>
                <div className="bar lighter">
                    <p>Calories (approx.): </p>
                </div>
                <div className="bar">
                    <p>Price (approx.): </p>
                </div>
                <div className="bar lighter">
                    <p>Cooking time: </p>
                </div>
                <div className="bar full-screen-only">
                    <p>Vegetarian: </p>
                </div>
                <div className="bar lighter full-screen-only">
                    <p>Favourites: </p>
                </div>
                <div className="bar full-screen-only">
                    <p>Clicks: </p>
                </div>
                <div className="bar lighter full-screen-only">
                    <p>Added: </p>
                </div>
                <div className="bar full-screen-only">
                    <p>Adding user: </p>
                </div>
                <div className="bar lighter-m end-m end-f"/>
            </section>
            {videos && videos.map((video: Video) => <VideoEntry key={video.id} video={video}/>)}
            {(!videos || videos.length === 0) && 
                <div className="form-background top-margin bottom-margin center-text">
                    <p className="side-margin">There is no videos here. Take a look elsewhere</p>
                </div>}
        </div>
    )
}