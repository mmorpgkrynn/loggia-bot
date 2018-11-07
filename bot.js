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

       message.channel.send('Questi sono i comandi disponibili: \n !aiuto : questo messaggio \n !link : collegamenti utili \n !date : mostra le date associative importanti \n !tavoli : mostra i tavoli di gioco del semestre');

       }

      if (message.content === '!date') {
       message.channel.send('Prossimi appuntamenti: \n 30/11/2018: Cena Associativa \n 21/12/2018: Seconda Riunione associativa');
      }
 
      if (message.content === '!tavoli') {
       message.channel.send('Tavoli di questo semestre: \n ');
      }
 
 
     if ((message.content === 'loggia')||(message.content === 'Loggia')) {

       message.reply('Sono il bot della Loggia, se vuoi puoi utilizzarmi usando il prefisso !<comando>, ad esempio !aiuto');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
