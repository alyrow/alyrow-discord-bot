const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
msg.reply('pong');
  }
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
  
  
  /*
  // Create a new emoji from a url
guild.createEmoji('https://i.imgur.com/w3duR07.png', 'rip')
  .then(emoji => console.log(`Created new emoji with name ${emoji.name}!`))
  .catch(console.error);
  
  
  guild.createRole({
  name: 'Super Cool People',
  color: 'BLUE',
})
  .then(role => console.log(`Created role ${role}`))
  .catch(console.error)
  
  
  */
  
  
  
  
});


  

client.login(process.env.TOKEN);
