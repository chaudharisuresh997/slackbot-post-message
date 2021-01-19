const axios = require('axios');
const process=require('process')
//Create app
    //add redirect url http://example.com/path
    //create app level token in auth and permission menu on path https://api.slack.com/apps under menu Auth and permissions
    //
//Applevel acccess token u should use
//add in etc/hosts//http://example.com/path     localhost:8080
//
//go to channel and type /invite @G //G is the app name added to workspace
const dotenv = require('dotenv');

run()//.catch(err => console.log(err));
 
//var randomColor = colors[Math.floor(Math.random()*colors.length)]; 
//console.log(randomColor)
 function run() {
  dotenv.config();

  slackToken= process.env.APP_TOKEN;
  
  var games = ["I will be back said by whom in movie terminator","Choose one activity from this link https://whatmomslove.com/kids/active-indoor-games-activities-for-kids-to-burn-energy/","Row skipping for 5min"];
  const url = 'https://slack.com/api/chat.postMessage';
  const res =  axios.post(url, {
    channel: process.env.CHANNEL,
    text: games[Math.floor(Math.random()*games.length)]
  }, { headers: { authorization: `Bearer ${slackToken}` } });

  console.log('Done', res.data);
}