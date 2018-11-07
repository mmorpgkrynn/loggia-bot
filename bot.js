const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Sono pronto!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTA5NjM4OTQxOTcyODg5NjAw.DsQuNQ.iT6JuIk8Lj7Aisxu2dL-xIQt1SQ);//where BOT_TOKEN is the token of our bot
