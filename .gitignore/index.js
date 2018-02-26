const Discord = require('discord.js');

const hook = new Discord.WebhookClient('webhook id', 'webhook token');
// Send a message using the webhook
hook.send('Je suis la !');


const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    const emoji = guild.emojis.first();
msg.reply(`pong ${emoji}`);
  }
  if (message.content === 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});


  

client.login(process.env.TOKEN);
