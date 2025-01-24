const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
	const { Client, Collection, Intents } = require('discord.js');
const fs = require('fs')
const Discord = require("discord.js")
// getting normal data from config.json
const data = require("./config.json")

// secure environment for sensitive data such as token
const dotenv = require('dotenv')
dotenv.config()

// the client
  let client = new Discord.Client({
  intents: [
Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES,
Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
],
partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

                                                                                                     
module.exports = client


	
	
	// Commands && SlashCommands && Events Handling and Initializing The Whole Project..
	
	client.config = data
	client.commands = new Collection();
	client.aliases = new Collection();
	client.events = new Collection();
	client.slashCommands = new Collection();
	client.queue = new Map();
	require(`./source/handlers/cmdHandler/command.js`)(client);
	require(`./source/handlers/slashHandler/slash.js`)(client);
	require(`./source/handlers/eventHandler/events.js`)(client);
	
// handling errors 
process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});
process.on('typeError', error => {
	console.error('Unhandled type rejection:', error);
});


client.login(process.env.token);


