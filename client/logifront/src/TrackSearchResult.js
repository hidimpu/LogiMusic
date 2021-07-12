import React from "react";

export default function TrackSearchResult({ track, chooseTrack }) {
  function handlePlay() {
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
