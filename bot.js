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

       message.channel.send('Questi sono i comandi disponibili: \
!aiuto : questo messaggio \
!date : mostra le date associative importanti \
!tavoli : mostra i tavoli di gioco del semestre');

       }

      if (message.content === '!date') {
       message.channel.send('Prossimi appuntamenti: \
');
      }
 
      if (message.content === '!tavoli') {
       message.channel.send('Tavoli di questo semestre: \
');
      }
 
 
     if ((message.content === 'loggia')||(message.content === 'Loggia')) {

       message.reply('Sono il bot della Loggia, se vuoi puoi utilizzarmi usando il prefisso !<comando>, ad esempio !aiuto');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
