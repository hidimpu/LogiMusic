const express = require("express");

const cors = require("cors");

const bodyParser = require("body-parser");

const lyricsFinder = require("lyrics-finder");

const ytdl = require("ytdl-core");
const YoutubeMusicApi = require("youtube-music-api");
const SpotifyWebApi = require("spotify-web-api-node");
const SpotifyToYoutube = require("spotify-to-youtube");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const spotifyApi = new SpotifyWebApi({
  redirectUri: "http://localhost:3000",
  clientId: "767eac21cf65444ea0039735d46e71d3",
  clientSecret: "53e6f75a67e94143b05110aba78c06fc",
});

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;

  // clientId, clientSecret and refreshToken has been set on the api object previous to this call.
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body["access_token"]);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
      console.log(err);
    });
});

app.get("/lyrics", async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) ||
    "No Lyrics Found! :( ";
  res.json({ lyrics });
});

app.post("/song", async (req, res) => {
  const { song } = req.body;

  const api = new YoutubeMusicApi();

  async function getStreamUrl(songId) {
    let info = await ytdl.getInfo(songId);
    let format = ytdl.chooseFormat(info.formats, { quality: "140" });
    // console.log(format.url);
    return format.url;
  }

  await api.initalize();
  const result = await api.search(`${song.title} ${song.artist},  'song' `);

  const videoId = result.content[0].videoId;

  const playerUri = await getStreamUrl(videoId);

  res.status(200).send(playerUri);
});

// app.get("/song", async (req, res) => {
//   const spotifyToYoutube = SpotifyToYoutube(spotifyApi);
//   const id = await spotifyToYoutube(req.query.trackUri);
//   console.log(id); // J7_bMdYfSws
// });

app.listen(3001);
