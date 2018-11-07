const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('Sono pronto!');

});

 

client.on('message', message => {

    if (message.content === '!ping') {

       message.reply('pong');

       }
 
     if (message.content === '!aiuto') {

       message.send('Questi sono i comandi disponibili:');

       }
 
     if ((message.content === 'loggia')||(message.content === 'Loggia')) {

       message.reply('Sono il bot della Loggia, se vuoi puoi utilizzarmi usando il prefisso !<comando>, ad esempio !aiuto');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
