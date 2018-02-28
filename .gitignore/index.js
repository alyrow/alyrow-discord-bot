const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
 
  
  if (message.content === 'åhelp') {
    // Send the user's avatar URL
    message.reply('COMMANDE :');
    message.reply('avatar');
    message.reply('emoji url nom');
  }
  
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  
  if (message.content.startsWith('emoji')) {
    // On récupère le premier channel audio du serveur
    message.reply('breuh');
    // il faudrait utiliser une expression régulière pour valider le lien youtube
    let args = message.content.split(' ')
   
       // let stream = YoutubeStream(args[1])
     guild.createEmoji(args[1], args[2])
  .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
  .catch(console.error);
  }

  /*
  // Create a new emoji from a url

  
  
  guild.createRole({
  name: 'Super Cool People',
  color: 'BLUE',
})
  .then(role => console.log(`Created role ${role}`))
  .catch(console.error)
  
  
  */
  
  
  
  
});


  

client.login(process.env.TOKEN);
