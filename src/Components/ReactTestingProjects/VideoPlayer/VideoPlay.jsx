import { useState } from "react";
import { Menu } from "./Menu";

import { videos } from "./data";
// const videos = {
//     deer:
//       "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
//     snail:
//       "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
//     cat:
//       "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
//     spider:
//       "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
//   };
  const videoNames=Object.keys(videos);
export default function VideoPlay(){
    const[videoSrc,SetVideoSrc]=useState(videos.spider);

    function OnMenuItemSelected(video){
const videoSrcSet=videos[video];
SetVideoSrc(videoSrcSet);
    }
    return(
        <>
       <div className="container">
        <div className="col-sm-6 col-md-6">
            <h2>Video Player</h2>
            <Menu onSelectedVideo={OnMenuItemSelected} videoData={videoNames}/>
            <Video videoSrc={videoSrc}/>
        </div>
       </div>
        </>
    )
// return(
//    <>
//   <div className="container">
//     <div className="col-sm-6 col-md-6">
//         {videoNames.map((data,id)=>(
//            <div className="form-check form-check-inline" key={id}>
//            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={data}/>
//            <label className="form-check-label" htmlFor="inlineRadio1">{data}</label>
//          </div>
           
//         ))}
//     </div>
//   </div>
//    </>
// )
    
}
export  function Video({ videoSrc }) {
    return (
      <div>
        <video loop controls autostart="true" autoPlay muted src={videoSrc} />
      </div>
    );
  }
