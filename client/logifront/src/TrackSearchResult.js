import React from "react";

// const YoutubeMusicApi = require("youtube-music-api");

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
    // const api = new YoutubeMusicApi();
    // api.initalize().then((info) => {
    //   api.search(track.title + " " + track.artist).then((results) => {
    //     streamId(results);
    //     console.log(results);
    //   });
    // });

    chooseTrack(track);
  }
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "64px", width: "64px  " }} />
      <div className="ml-3">
        <div className="px-4"> {track.title} </div>
        <div className="text-muted px-4"> {track.artist} </div>
      </div>
    </div>
  );
}
