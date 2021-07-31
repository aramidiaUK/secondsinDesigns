import React from 'react'
import VideoCard from '../Cards/VideoCard/VideoCard'
import ClubContentRow from '../ClubContentRow/ClubContentRow'
import "./VideoPlayer.scss";
const VideoPlayer = ({header, subHeader}) => {
    return (
        <ClubContentRow header={header || "Media"} subHeader={subHeader || "New videos"} classAddin="videos">
        <div className="player-w-playList">
            <VideoCard 
            backdropImageLink={"/assets/images/fans.jpeg"}
            sponsorImageLink={"/assets/images/espnSponsor.png"}
            caption={"A great goal from Sanchez on his debut"}
            classAddin={'wide'}
            post={{
              author: {
                user: {
                  full_name: "Henry Akinola",
                  occupation: "Club Manager",
                  imageLink: "/assets/images/person1.jpeg"
                }
              }
            }}
            />
            <div className="player-w-playList-items">
            <VideoCard 
            backdropImageLink={"/assets/images/football.jpg"}
            sponsorImageLink={"/assets/images/espnSponsor.png"}
            caption={"A great goal from Sanchez on his debut"}
            classAddin={'small'}
            post={{
              author: {
                user: {
                  full_name: "Michael Angelo",
                  occupation: "Lead Editor",
                }
              }
            }}
            />
            <VideoCard 
            backdropImageLink={"/assets/images/gameplay.jpeg"}
            sponsorImageLink={"/assets/images/espnSponsor.png"}
            caption={"A great goal from Sanchez on his debut"}
            classAddin={'small'}
            post={{
              author: {
                user: {
                  full_name: "Mitch Johnson",
                  occupation: "First Team Coach",
                  imageLink: "/assets/images/person2.jpeg"
                }
              }
            }}
            />
            </div>
        </div>
        </ClubContentRow>
    )
}

export default VideoPlayer
