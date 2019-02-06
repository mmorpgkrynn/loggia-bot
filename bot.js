const Discord = require('discord.js');

const client = new Discord.Client();

var domanda = ''; 
var risposta = ''; 

client.on('ready', () => {

    console.log('Sono pronto!');

});

 

client.on('message', message => {
    risposta = '';    
    
    domanda = message.content;
    if (domanda.search('/r') == 0) {
        var nD = 0;
        var tD = 0;
        var dadi = domanda.substring(2);
        dadi = dadi.toUpperCase();
        var diviso = dadi.split('D'); 
        if (isNaN(diviso[0]) == false) nD = parseInt(diviso[0]);
        if (isNaN(diviso[1]) == false) tD = parseInt(diviso[1]);        
        var diviso2 = diviso[1].split('!'); 
        if (tD == 0) tD = diviso2[0];
        if ((nD == 0) || (tD ==0)) {
         message.reply('Che dadi devo tirare? (La sintassi è xDy)');
        }
        else {
         var valoreF = 0;
         var tiroF = 0;
         var sequenza = '';
         for (i = 0; i < nD; i++) {
             tiroF = Math.floor(Math.random() * tD) + 1;
             valoreF += tiroF;
             if (dadi.search('!') > 0) {
                 //voglio anche la sequenza dei tiri
                 if (i == 0) {
                  sequenza += tiroF.toString();
                 }
                 else {
                  sequenza += ',' + tiroF.toString();
                 }
             }
         }           
         if (sequenza != '')
         {
             sequenza = '\n (' + sequenza + ')';
         }
         message.reply('hai tirato: '+ valoreF.toString() + ' [con '+ nD.toString() + ' dadi da '+ tD.toString()+']' + sequenza);
        }
            
     }
    
    if (message.content === '!ping') {
       message.reply('pong');
     }
 
     if (message.content === '!aiuto') {

       risposta = 'Questi sono i comandi disponibili: \n' +
        '!aiuto : questo messaggio \n' +
        '!link : collegamenti utili \n' +
        '!date : mostra le date associative importanti \n'+
        '!tavoli : mostra i tavoli di gioco del semestre \n'+
        '/r xDy : tiro [x] dadi da [y] facce \n'+
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
       risposta = 'Prossimi appuntamenti 2019: \n'+
        '29/03/2019: Cena Associativa \n'+
        '26/07/2019: Prima Riunione associativa \n'+
        '29/11/2019: Cena Associativa \n'+
        '20/12/2019: Seconda Riunione associativa \n'+
        '';
       message.channel.send(risposta);
      }
 
      if (message.content === '!tavoli') {
       risposta = 'Tavoli di questo semestre (Febbraio - Luglio 2019): \n'+
        'Venerdì A - Mekton Z | Rolemaster \n'+
        'Venerdì B - Pathfinder | Avventure ad Hogwarts \n'+
        'Sabato - Sine Requie | Tavolo libero \n'+
        '';
       message.channel.send(risposta);      
      }
 
 
     if ((message.content === 'loggia')||(message.content === 'Loggia')) {

       message.reply('Sono il bot della Loggia, se vuoi puoi utilizzarmi usando il prefisso !<comando>, ad esempio !aiuto');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
