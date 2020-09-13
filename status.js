const Discord = require('discord.js');
const bot2 = new Discord.Client();


const activities2 = ["GANGIW Members!"]

const activities = ["Message Me For Suport!" , "Music: /play"]

setInterval(function() {

  let activity2 = activities2[Math.floor(Math.random() * activities2.length)]
  bot2.user.setActivity(activity2, { type: "WATCHING" })

  let activity = activities[Math.floor(Math.random() * activities.length)]
  bot2.user.setActivity(activity, { type: "PLAYING" })
}, 5000)


module.exports = bot2;