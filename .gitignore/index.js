const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

client.login('NDE3NzEyNjk2ODU5ODIwMDQz.DXXA1Q.igKKzsSPgzoBJU-r3zf2JN8kx84');
