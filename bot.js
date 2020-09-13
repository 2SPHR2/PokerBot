const Discord = require("discord.js");
const config = require("./config.json")
const index = require("./index");
const status = require("./status");

//Run status
index.on('ready', () => {
    console.log(`${index.user.username} : Dm Bot Is Run.`);
});

//Run DM Bot
status.on('ready', () => {
    console.log(`${status.user.username} : status Is Run.`);
});


index.login(Process.env.token);
status.login(Process.env.token);