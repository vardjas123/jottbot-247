const commando = require("discord.js-commando");
const Discord = require("discord.js");
const bot = new commando.Client();
const newUsers = new Discord.Collection();

bot.login(process.env.BOT_TOKEN);
