const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));
//load the transcript module
const transcript = require("./transcript")
transcript(client, "!transcript", 1000)  
//transcript(client, "CMD", "MAXIMUM msgs") //minimum = 100 

client.login(config.TOKEN);
