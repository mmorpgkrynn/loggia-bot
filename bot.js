const Discord = require('discord.js');

const client = new Discord.Client();

var risposta = ''; 

client.on('ready', () => {

    console.log('Sono pronto!');

});

 

client.on('message', message => {
    risposta = '';    
    if (message.content === '!ping') {

       message.reply('pong');
     }
 
     if (message.content === '!aiuto') {

       risposta = 'Questi sono i comandi disponibili: \n' +
        '!aiuto : questo messaggio \n' +
        '!link : collegamenti utili \n' +
        '!date : mostra le date associative importanti \n'+
        '!tavoli : mostra i tavoli di gioco del semestre \n'+
        '';
       message.channel.send(risposta);

      }

      if (message.content === '!link') {
       risposta = 'Link utili: \n'+
        'WEB: www.loggiairrealisti.it \n'+
        'Mail: info@loggiairrealisti.it \n'+
        '';
       message.channel.send(risposta);
      }
 
 
      if (message.content === '!date') {
       risposta = 'Prossimi appuntamenti: \n'+
        '30/11/2018: Cena Associativa \n'+
        '21/12/2018: Seconda Riunione associativa \n'+
        '';
       message.channel.send(risposta);
      }
 
      if (message.content === '!tavoli') {
       risposta = 'Tavoli di questo semestre (09/2018 - 12/2018): \n'+
        'Venerdì A - Sine Requie | Star Trek \n'+
        'Venerdì B - Gnosis | The Wild Hell of the West \n'+
        'Sabato - Dungeons & Dragons 5ed. | Tavolo libero \n'+
        '';
       message.channel.send(risposta);      
      }
 
 
     if ((message.content === 'loggia')||(message.content === 'Loggia')) {

       message.reply('Sono il bot della Loggia, se vuoi puoi utilizzarmi usando il prefisso !<comando>, ad esempio !aiuto');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
