// import { useState, useEffect } from "react";
// import SpotifyPlayer from "react-spotify-web-playback";

// export default function Player({ accessToken, trackUri }) {
//   const [play, setPlay] = useState(false);

//   useEffect(() => setPlay(true), [trackUri]);

//   if (!accessToken) return null;
//   return (
//     <SpotifyPlayer
//       token={accessToken}
//       showSaveIcon
//       callback={(state) => {
//         if (!state.isPlaying) setPlay(false);
//       }}
//       play={play}
//       uris={trackUri ? [trackUri] : []}
//     />
//   );
// }

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const YoutubeMusicApi = require("youtube-music-api");

export default function Player() {
  // const api = new YoutubeMusicApi();
  // api.initalize().then((info) => {
  //   api.search(track).then((result) => console.log(result));
  // });
  return (
    <AudioPlayer
      autoPlay
      src="https://r1---sn-ci5gup-civs.googlevideo.com/videoplayback?expire=1626742259&ei=k8n1YPPDIebIz7sP-fW4gAQ&ip=171.48.29.211&id=o-AJWX0VsmkC9mbE72HiB5QJt0ikGq4TXU9ylaemTaIq8i&itag=140&source=youtube&requiressl=yes&mh=D8&mm=31%2C29&mn=sn-ci5gup-civs%2Csn-ci5gup-cvhr&ms=au%2Crdu&mv=m&mvi=1&pl=20&gcr=in&initcwndbps=956250&vprv=1&mime=audio%2Fmp4&ns=okqDmTuFDPdf_yDQeCKuLPsG&gir=yes&clen=2874985&dur=177.469&lmt=1618506095118844&mt=1626720299&fvip=5&keepalive=yes&fexp=24001373%2C24007246&c=WEB&txp=2311224&n=ULOuNQ_TYLEq-zHL&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgE1c5ZKhAIOhFY-wlB_teTgfBp0NpA49tEa20386USuECIQDR8Ulz4gxGnTsw-wwoDSKjjpUIL-Y59MOgRjCMi9mQIQ%3D%3D&ratebypass=yes&sig=AOq0QJ8wRQIgFnLBJNYyYzgoSmNGR9Bq8qvs3mNBgZJennEqkWtng-MCIQCwIGPED0Dzgi7JF6bqg79qwzIw7Fc9S8a7zc8qzICkwQ%3D%3D"
      onPlay={(e) => console.log("onPlay")}
      // other props here
    />
  );
}
